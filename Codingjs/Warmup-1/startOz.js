function startOz(str) {
  let res = "";
  if (str[0] && str[0] == "o") res += "o";
  if (str[1] && str[1] == "z") res += "z";
  return res;
}

// Problem desc:
// Given a string, return a string made of the first 2 chars (if present),
//  however include first char only if it is 'o' and include the second only if it
// is 'z', so 'ozymandias' yields 'oz'.

// Data to test
// startOz('ozymandias') → oz	oz	✔
// startOz('bzoo') → z	z	✔
// startOz('oxx') → o	o	✔
// startOz('ounce') → o	o	✔
// startOz('o') → o	o	✔
// startOz('abc') →		✔
// startOz('') →		✔
// startOz('zoo') →		✔
// startOz('aztec') → z	z	✔
// startOz('zzzz') → z	z	✔
// startOz('oznic') → oz	oz	✔
