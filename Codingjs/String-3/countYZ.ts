function countYZ(str: string): number {
  let count: number = 0;
  for (let i: number = 0; i < str.length + 1; i++) {
    if (
      (str.charCodeAt(i) <= 64 || str[i] == undefined) &&
      (str[i - 1] === "y" ||
        str[i - 1] === "z" ||
        str[i - 1] === "Z" ||
        str[i - 1] === "Y")
    ) {
      count++;
    }
  }
  return count;
}

// Problem desc:
// Given a string, count the number of words ending in 'y' or 'z' -- so the 'y' in
// "heavy" and the 'z' in "fez" count, but not the 'y' in "yellow" (not case sensitive).
//  We'll say that a y or z is at the end of a word if there is not an alphabetic letter
//  immediately following it. (Note: Character.isLetter(char) tests if a char is an alphabetic letter.)

// Data to test
// Test → Expected	Yours	Result
// countYZ('fez day') → 2	2	✔
// countYZ('day fez') → 2	2	✔
// countYZ('day fyyyz') → 2	2	✔
// countYZ('day yak') → 1	1	✔
// countYZ('day:yak') → 1	1	✔
// countYZ('!!day--yaz!!') → 2	2	✔
// countYZ('yak zak') → 0	0	✔
// countYZ('DAY abc XYZ') → 2	2	✔
// countYZ('aaz yyz my') → 3	3	✔
// countYZ('y2bz') → 2	2	✔
// countYZ('zxyx') → 0	0	✔
