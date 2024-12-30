function delDel(str) {
  if (str[1] + str[2] + str[3] == "del") {
    let res = "";
    console.log(res);
    for (let i = 0; i < str.length; i++) {
      if (i < 1 || i > 3) {
        res += str[i];
      }
    }
    return res;
  }
  return str;
}

// Problem Desc:
// Given a string, if the string "del" appears starting at index 1, return a string
//  where that "del" has been deleted. Otherwise, return the string unchanged.

// Data to test
// delDel('adelbc') → abc	abc	✔
// delDel('adelHello') → aHello	aHello	✔
// delDel('abcdel') → abcdel	abcdel	✔
// delDel('add') → add	add	✔
// delDel('ad') → ad	ad	✔
// delDel('a') → a	a	✔
// delDel('') →		✔
// delDel('del') → del	del	✔
// delDel('adel') → a	a	✔
// delDel('aadelbb') → aadelbb	aadelbb	✔
