function endUp(str) {
  let str3 = str.length - 3;
  let res = "";
  for (let i = 0; i < str.length; i++) {
    if (i < str3) res += str[i];
    else res += str[i].toUpperCase();
  }
  return res;
}

// Problem desc:
// Given a string, return a new string where the last 3 chars are now in upper
//  case. If the string has less than 3 chars, uppercase whatever is there. Note
// that str.toUpperCase() returns the uppercase version of a string.

// Data to test
// endUp('Hello') → HeLLO	HeLLO	✔
// endUp('hi there') → hi thERE	hi thERE	✔
// endUp('hi') → HI	HI	✔
// endUp('woo hoo') → woo HOO	woo HOO	✔
// endUp('xyz12') → xyZ12	xyZ12	✔
// endUp('x') → X	X	✔
// endUp('') →		✔
