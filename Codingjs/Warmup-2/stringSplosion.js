function stringSplosion(str) {
  let res = "";
  for (let i = 0; i <= str.length; i++) {
    for (let j = 0; j < i; j++) {
      res += str[j];
    }
  }
  return res;
}

// Problem desc:
// Given a non-empty string like "Code" return a string like "CCoCodCode".

// Data to test
// console.log(stringSplosion("Code") => 'CCoCodCode);
