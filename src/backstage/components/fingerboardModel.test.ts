import { getFingerboardNotes, INSTRUMENTS, midiToFrequency, pitchName } from "./fingerboardModel";

test("the violin has exactly 52 correctly mapped positions", () => {
  const strings = getFingerboardNotes(INSTRUMENTS.violin);
  expect(strings).toHaveLength(4);
  expect(strings.map(string => string.length)).toEqual([13, 13, 13, 13]);
  expect(strings.map(string => string[0].label)).toEqual(["G", "D", "A", "E"]);
  expect(strings.map(string => string[12].label)).toEqual(["G", "D", "A", "E"]);
  expect(strings.map(string => string[0].midi)).toEqual([55, 62, 69, 76]);
  expect(strings.map(string => string[12].midi)).toEqual([67, 74, 81, 88]);
  for (const string of strings) {
    string.forEach((note, offset) => expect(note.midi).toBe(string[0].midi + offset));
  }
  expect(strings[0][6].name).toBe("C♯4");
  expect(strings[0][6].accessibilityLabel).toBe("C sharp 4, G string");
});

test("equal temperament yields the expected frequencies", () => {
  expect(midiToFrequency(69)).toBeCloseTo(440, 10);
  expect(midiToFrequency(81)).toBeCloseTo(880, 10);
  expect(midiToFrequency(55)).toBeCloseTo(195.99771799, 7);
  expect(pitchName(88)).toBe("E6");
});

test("other tunings are data-driven, not hard-coded in the pitch mapper", () => {
  expect(getFingerboardNotes(INSTRUMENTS.guitar)).toHaveLength(6);
  expect(getFingerboardNotes(INSTRUMENTS.cello)[0][0].name).toBe("C2");
  expect(getFingerboardNotes(INSTRUMENTS.bassGuitar)[0][0].name).toBe("E1");
});
