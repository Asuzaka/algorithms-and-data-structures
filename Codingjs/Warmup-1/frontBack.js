function frontBack(str) {
  if (str.length == 1 || str.length < 1) {
    return str;
  }
  let center = "";
  let startEnd = str[0];
  let endStart = str[str.length - 1];
  for (let i = 1; i < str.length - 1; i++) {
    center += str[i];
  }
  return endStart + center + startEnd;
}

// Problem desc:
// Given a string, return a new string where the first and last chars have been exchanged.

// Data to test
// frontBack('code') → eodc	eodc	✔
// frontBack('a') → a	a	✔
// frontBack('ab') → ba	ba	✔
// frontBack('abc') → cba	cba	✔
// frontBack('') →		✔
// frontBack('Chocolate') → ehocolatC	ehocolatC	✔
// frontBack('aavj') → java	java	✔
// frontBack('hello') → oellh	oellh	✔
