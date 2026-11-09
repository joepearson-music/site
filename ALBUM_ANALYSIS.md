# Debut album — GitHub Actions analysis

The workflow [.github/workflows/analyze-debut-album.yml](.github/workflows/analyze-debut-album.yml) processes the **14 source MP4s** for the Self Titled album in the same order as the homepage track list.

It starts automatically when the workflow or analysis script changes on main. To rerun it manually, visit **GitHub → Actions → Analyze debut album MP4s → Run workflow**.

## Output locations

- [GitHub Actions runs](https://github.com/joepearson-music/site/actions/workflows/analyze-debut-album.yml): each successful run exposes an artifact named **debut-album-analysis** (90-day retention).
- [Generated inspection packets on album-analysis branch](https://github.com/joepearson-music/site/tree/album-analysis/analysis/debut-album): the workflow creates or updates this **separate branch**, not main.

Each track gets an individual README, ffprobe metadata in JSON, SHA-256 of the source video, **20 time-distributed JPEG frames** plus a contact sheet, a full-track waveform PNG and spectrogram PNG, and one-second dynamics measurements in CSV. An index links to all 14 packets.

These are machine-derived inspection aids, **not authored descriptions**. Twenty screenshots cannot represent every transition in the moving visualization. A spectrogram alone cannot reliably identify instrumentation, notes, chords or composer intentions. Long-form descriptions still need listening, full visual examination and research into cover composition histories.

## Privacy and scope

Only the 14 explicitly listed public MP4s in src/media/ are read. The old freewill.mp4 is not included; freewillfinal.mp4 is used instead. Neither Ableton projects nor extracted audio files nor complete video duplicates are uploaded as results. **Generated results are public** because this repository is public. No private Ableton file should be added to the workflow's input list.

The generated analysis branch is independent of the Netlify deployment of main. No public navigation, /backstage entry or homepage is modified.

## Running locally

Requires Python 3.10+ and FFmpeg/FFprobe.

    python3 scripts/analyze_debut_album.py --repo . --output /tmp/debut-album-analysis

For a one-track test:

    python3 scripts/analyze_debut_album.py --repo . --output /tmp/debut-album-analysis --only 02-protium

The job requests GitHub Actions contents:write permission to update the results branch. If your repository settings prevent this, the workflow can still upload its downloadable artifact before the branch-publishing step fails. It is also subject to the account's GitHub Actions usage and storage limits.
