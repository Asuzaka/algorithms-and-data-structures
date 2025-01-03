function stringYak(str) {
  let res = "";
  for (let i = 0; i < str.length; i++) {
    if (str[i] + str[i + 2] == "yk") {
      i += 3;
    }
    if (str[i]) res += str[i];
  }
  return res;
}

// Problem desc:
// Suppose the string "yak" is unlucky. Given a string, return a version where
// all the "yak" are removed, but the "a" can be any char. The "yak" strings
// will not overlap.

// Data to test
// stringYak('yakpak') → pak	pak	✔
// stringYak('pakyak') → pak	pak	✔
// stringYak('yak123ya') → 123ya	123ya	✔
// stringYak('yak') →		✔
// stringYak('yakxxxyak') → xxx	xxx	✔
// stringYak('xxcaazz', 'hiyakHi') → xxcaazz	xxcaazz	✔
// stringYak('xxxyakyyyakzzz') → xxxyyzzz	xxxyyzzz	✔
