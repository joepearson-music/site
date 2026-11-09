#!/usr/bin/env python3
"""Extract reproducible inspection evidence from the 14 public debut-album MP4s.

FFmpeg/FFprobe + Python standard library only. No audio/video copies are published.
"""
from __future__ import annotations
import argparse
from array import array
import csv
import hashlib
import json
import math
from pathlib import Path
import re
import shutil
import subprocess
import sys

TRACKS = [
    ("01-if-silence-exists-then-where-is-it", "if silence exists then where is it?", "ifsilence.mp4", "original"),
    ("02-protium", "protium", "protium.mp4", "original"),
    ("03-are-we-all-water", "are we all water?", "water.mp4", "original"),
    ("04-a-single-petal-of-a-rose", "a single petal of a rose — Duke Ellington", "asingle.mp4", "cover"),
    ("05-sassafrass", "Sassafrass", "sassafrass.mp4", "original"),
    ("06-fractal", "Fractal", "fractal.mp4", "original"),
    ("07-my-argument-for-free-will", "my argument for free will", "freewillfinal.mp4", "original"),
    ("08-moving-forward", "Moving Forward", "movingforward.mp4", "original"),
    ("09-you-dont-know-my-name", "you dont know my name — Alicia Keys", "ydkmn.mp4", "cover"),
    ("10-its-a-mans-mans-mans-world", "its a mans mans mans world — James Brown", "iammmw.mp4", "cover"),
    ("11-day-tripper", "day tripper — Lennon & McCartney", "day_tripper.mp4", "cover"),
    ("12-sarabande-in-g", "Sarabande in G — Johann Sebastian Bach", "bachcello.mp4", "cover"),
    ("13-like-monk", "Like Monk", "likemonk.mp4", "original"),
    ("14-tour-trolley", "Tour-Trolley", "TTrolley.mp4", "original"),
]
FRAME_COUNT = 20

def command(parts, capture=False):
    return subprocess.run(parts, check=True, text=True,
                          stdout=subprocess.PIPE if capture else subprocess.DEVNULL,
                          stderr=subprocess.PIPE if capture else None)

def file_sha256(src):
    hasher = hashlib.sha256()
    with src.open("rb") as stream:
        for chunk in iter(lambda: stream.read(1024 * 1024), b""):
            hasher.update(chunk)
    return hasher.hexdigest()

def ffprobe(src):
    return json.loads(command(["ffprobe", "-v", "error", "-show_format", "-show_streams",
                               "-of", "json", str(src)], capture=True).stdout)

def visual_from_audio(src, dst, filter_name):
    command(["ffmpeg", "-hide_banner", "-nostdin", "-loglevel", "error", "-y",
             "-i", str(src), "-filter_complex",
             "[0:a:0]aformat=channel_layouts=mono," + filter_name + "[v]",
             "-map", "[v]", "-frames:v", "1", str(dst)])

def video_frames(src, out, duration):
    target = out / "frames"
    target.mkdir(parents=True, exist_ok=True)
    stamps = []
    for i in range(FRAME_COUNT):
        when = max(0.0, min(duration * (i + 0.5) / FRAME_COUNT, duration - 0.05))
        name = "frame-%02d.jpg" % (i + 1)
        command(["ffmpeg", "-hide_banner", "-nostdin", "-loglevel", "error", "-y",
                 "-ss", "%.3f" % when, "-i", str(src), "-map", "0:v:0",
                 "-frames:v", "1", "-vf", "scale=640:-2", "-q:v", "3", str(target / name)])
        stamps.append({"timestamp_seconds": round(when, 3), "file": "frames/" + name})
    command(["ffmpeg", "-hide_banner", "-nostdin", "-loglevel", "error", "-y",
             "-framerate", "1", "-start_number", "1", "-i", str(target / "frame-%02d.jpg"),
             "-vf", "tile=5x4:margin=8:padding=6:color=white",
             "-frames:v", "1", str(out / "contact-sheet.png")])
    return stamps

def audio_envelope(src, out):
    # 4 kHz mono PCM, one-second RMS and peak. Not true-peak or LUFS measurements.
    sample_rate = 4000
    args = ["ffmpeg", "-hide_banner", "-nostdin", "-loglevel", "error", "-i", str(src),
            "-map", "0:a:0", "-vn", "-ac", "1", "-ar", str(sample_rate),
            "-f", "s16le", "-acodec", "pcm_s16le", "pipe:1"]
    proc = subprocess.Popen(args, stdout=subprocess.PIPE, stderr=subprocess.PIPE)
    assert proc.stdout is not None and proc.stderr is not None
    rows = []
    while True:
        raw = proc.stdout.read(sample_rate * 2)
        if not raw:
            break
        vals = array("h")
        vals.frombytes(raw)
        if sys.byteorder != "little":
            vals.byteswap()
        if not vals:
            break
        rms = math.sqrt(sum(x * x for x in vals) / len(vals))
        peak = max(abs(x) for x in vals)
        def dbfs(value):
            return round(20 * math.log10(value / 32768), 2) if value else -120.0
        rows.append({"second": len(rows), "rms_dbfs": dbfs(rms), "peak_dbfs": dbfs(peak)})
    err = proc.stderr.read().decode("utf-8", "replace")
    if proc.wait() != 0:
        raise RuntimeError("Audio decode failed: " + err[-1000:])
    with (out / "envelope.csv").open("w", newline="", encoding="utf-8") as stream:
        writer = csv.DictWriter(stream, ["second", "rms_dbfs", "peak_dbfs"])
        writer.writeheader()
        writer.writerows(rows)
    return {"window_seconds": 1, "windows": len(rows), "mono_sample_rate_hz": sample_rate,
            "rms_dbfs_range": [min(x["rms_dbfs"] for x in rows), max(x["rms_dbfs"] for x in rows)] if rows else None}

def sample_volume(src):
    result = command(["ffmpeg", "-hide_banner", "-nostdin", "-loglevel", "info",
                      "-i", str(src), "-map", "0:a:0", "-af", "volumedetect",
                      "-f", "null", "-"], capture=True)
    measurements = {}
    for key in ("mean_volume", "max_volume"):
        match = re.search(r"\b" + key + r":\s*(-?(?:\d+(?:\.\d+)?|inf))\s*dB",
                          result.stderr)
        measurements[key + "_dbfs"] = float(match.group(1)) if match else None
    return measurements

def inspect(repo, root, idx, slug, title, filename, category):
    src = repo / "src" / "media" / filename
    if not src.is_file():
        raise FileNotFoundError(src)
    out = root / slug
    out.mkdir(parents=True, exist_ok=True)
    print("Analyzing %02d/%02d: %s" % (idx, len(TRACKS), title), flush=True)
    probe = ffprobe(src)
    duration = float(probe.get("format", {}).get("duration", 0))
    videos = [x for x in probe["streams"] if x.get("codec_type") == "video"]
    audios = [x for x in probe["streams"] if x.get("codec_type") == "audio"]
    if not videos or duration <= 0:
        raise ValueError("Invalid MP4 or no video stream: " + str(src))
    positions = video_frames(src, out, duration)
    record = {"album_position": idx, "title": title, "category": category,
              "source": "src/media/" + filename, "duration_seconds": round(duration, 3),
              "sha256": file_sha256(src), "source_probe": probe, "frames": positions}
    audio = {}
    if audios:
        visual_from_audio(src, out / "waveform.png", "showwavespic=s=1800x440:colors=white")
        visual_from_audio(src, out / "spectrogram.png", "showspectrumpic=s=1800x720:legend=1:scale=log")
        audio.update(audio_envelope(src, out))
        audio.update(sample_volume(src))
    record["audio_status"] = "ok" if audios else "no_audio"
    record["audio_measurements"] = audio
    (out / "metadata.json").write_text(json.dumps(record, indent=2, ensure_ascii=False) + "\n", encoding="utf-8")
    v, a = videos[0], audios[0] if audios else {}
    lines = [
        "# " + title, "",
        "Source: [src/media/%s](https://github.com/joepearson-music/site/blob/main/src/media/%s)" % (filename, filename),
        "Album position: %s; %s" % (idx, category),
        "SHA-256: " + record["sha256"],
        "Duration: %.2f seconds" % duration,
        "Video: %s × %s, %s codec" % (v.get("width", "?"), v.get("height", "?"), v.get("codec_name", "?")),
        "Audio: %s, %s Hz, %s channels" % (a.get("codec_name", "none"), a.get("sample_rate", "?"), a.get("channels", "?")),
        "", "## Visual inspection", "",
        "[Contact sheet of 20 equally spaced moments](contact-sheet.png)",
        "", "These are representative frames, not a continuous visual review.", "",
        "| Timestamp (s) | Video frame |", "| ---: | --- |",
    ]
    lines += ["| %.2f | [frame %02d](%s) |" % (p["timestamp_seconds"], i + 1, p["file"])
              for i, p in enumerate(positions)]
    lines += ["", "## Audio inspection", ""]
    if audios:
        lines += ["[Waveform](waveform.png) · [Spectrogram](spectrogram.png) · [1-second envelope CSV](envelope.csv)",
                  "", "FFmpeg mean level: %s dBFS; max sample: %s dBFS." %
                  (audio.get("mean_volume_dbfs"), audio.get("max_volume_dbfs"))]
    else:
        lines += ["This MP4 has no detectable audio stream."]
    lines += ["", "## Description status", "",
              "Not yet written. These technical results do not certify instrumentation, pitch, lyrics, structure,",
              "or composer intention. Firsthand listening, closer visual inspection and researched",
              "attributions are required before publication of substantial descriptions.", ""]
    (out / "README.md").write_text("\n".join(lines), encoding="utf-8")
    return {"slug": slug, "title": title, "category": category,
            "source": record["source"], "duration_seconds": record["duration_seconds"],
            "audio_status": record["audio_status"]}

def main():
    parser = argparse.ArgumentParser(description=__doc__)
    parser.add_argument("--repo", type=Path, default=Path("."))
    parser.add_argument("--output", required=True, type=Path)
    parser.add_argument("--only", help="Optional track slug for a one-track local test")
    args = parser.parse_args()
    for tool in ("ffmpeg", "ffprobe"):
        if not shutil.which(tool):
            raise RuntimeError("Missing dependency " + tool)
    dest = args.output.resolve()
    dest.mkdir(parents=True, exist_ok=True)
    selected = [(i, *item) for i, item in enumerate(TRACKS, 1)
                if not args.only or item[0] == args.only]
    if not selected:
        raise ValueError("Unknown track slug: " + str(args.only))
    results = [inspect(args.repo.resolve(), dest, *item) for item in selected]
    (dest / "index.json").write_text(json.dumps({
        "source_repository": "joepearson-music/site", "tracks": results,
        "notice": "These are measurements and sampled frames, not finished music descriptions."
    }, indent=2, ensure_ascii=False) + "\n", encoding="utf-8")
    lines = ["# Self Titled — audiovisual inspection packets", "",
             "Generated from the original public repository MP4s with FFmpeg and FFprobe.",
             "The full MP4s and separate audio exports are NOT copied to this branch.",
             "", "Machine-derived evidence, not verified musical descriptions.", "",
             "| # | Track | Type | Duration | Inspection |", "| ---: | --- | --- | ---: | --- |"]
    for row in results:
        num = next(i for i, track in enumerate(TRACKS, 1) if track[0] == row["slug"])
        lines.append("| %02d | %s | %s | %.1f s | [packet](%s/README.md) · [20-frame sheet](%s/contact-sheet.png) |" %
                     (num, row["title"], row["category"], row["duration_seconds"], row["slug"], row["slug"]))
    lines += ["", "Caution: 20 frames can miss movements and transitions. Spectrograms and levels",
              "cannot prove which instruments, chords, notes, or recording techniques are present.",
              "Covers additionally require researched attribution to the original artists.", ""]
    (dest / "README.md").write_text("\n".join(lines), encoding="utf-8")
    print("Created %s packets at %s" % (len(results), dest), flush=True)

if __name__ == "__main__":
    main()
