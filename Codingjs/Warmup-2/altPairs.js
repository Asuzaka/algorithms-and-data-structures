function altPairs(str) {
  let inita = 0,
    initb = 1,
    res = "";
  function returner() {
    if (inita < str.length) {
      if (str[inita]) res += str[inita];
      if (str[initb]) res += str[initb];
      inita += 4;
      initb += 4;
      returner();
    }
  }
  returner();
  return res;
}

// Problem desc:
// Given a string, return a string made of the chars at indexes 0,1, 4,5, 8,9 ...
// so "kittens" yields "kien".

// Data to test
// altPairs('kitten') → kien	kien	✔
// altPairs('Chocolate') → Chole	Chole	✔
// altPairs('CodingHorror') → Congrr	Congrr	✔
// altPairs('yak') → ya	ya	✔
// altPairs('ya') → ya	ya	✔
// altPairs('y') → y	y	✔
// altPairs('') →		✔
// altPairs('ThisThatTheOther') → ThThThth	ThThThth	✔
