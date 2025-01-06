function atFirst(str) {
  return `${str[0] == undefined ? (str[0] = "@") : str[0]}${
    str[1] == undefined ? (str[1] = "@") : str[1]
  }`;
}

// Problem desc:
// Given a string, return a string length 2 made of its first 2 chars. If the
// string length is less than 2, use '@' for the missing chars.

// Data to test
// atFirst('hello') → he	he	✔
// atFirst('hi') → hi	hi	✔
// atFirst('h') → h@	h@	✔
// atFirst('') → @@	@@	✔
// atFirst('kitten') → ki	ki	✔
// atFirst('java') → ja	ja	✔
// atFirst('j') → j@	j@	✔
