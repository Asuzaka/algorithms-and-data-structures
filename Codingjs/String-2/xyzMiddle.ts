function xyzMiddle(str: string): boolean {
  const len: number = str.length;
  const mid: number = Math.floor(len / 2);
  if (len < 3) {
    return false;
  }
  if (len % 2 === 0) {
    return (
      str.substring(mid - 1, mid + 2) === "xyz" ||
      str.substring(mid - 2, mid + 1) === "xyz"
    );
  } else {
    return str.substring(mid - 1, mid + 2) === "xyz";
  }
}

// Problem desc:
// Given a string, does "xyz" appear in the middle of the string? To define
//  middle, we'll say that the number of chars to the left and right of the "xyz"
//  must differ by at most one. This problem is harder than it looks.

// Data to test
// Test → Expected	Yours	Result
// xyzMiddle('AAxyzBB') → true	true	✔
// xyzMiddle('AxyzBB') → true	true	✔
// xyzMiddle('AxyzBBB') → false	false	✔
// xyzMiddle('AxyzBBBB') → false	false	✔
// xyzMiddle('AAAxyzB') → false	false	✔
// xyzMiddle('AAAxyzBB') → true	true	✔
// xyzMiddle('AAAAxyzBB') → false	false	✔
// xyzMiddle('AAAAAxyzBBB') → false	false	✔
// xyzMiddle('1x345xyz12x4') → true	true	✔
// xyzMiddle('xyzAxyzBBB') → true	true	✔
// xyzMiddle('xyzAxyzBxyz') → true	true	✔
// xyzMiddle('xyzxyzAxyzBxyzxyz') → true	true	✔
// xyzMiddle('xyzxyzxyzBxyzxyz') → true	true	✔
// xyzMiddle('xyzxyzAxyzxyzxyz') → true	true	✔
// xyzMiddle('xyzxyzAxyzxyzxy') → false	false	✔
// xyzMiddle('AxyzxyzBB') → false	false	✔
// xyzMiddle('') → false	false	✔
// xyzMiddle('x') → false	false	✔
// xyzMiddle('xy') → false	false	✔
// xyzMiddle('xyz') → true	true	✔
// xyzMiddle('xyzz') → true	true	✔
