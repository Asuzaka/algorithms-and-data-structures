function startHi(str) {
  if (str[0] + str[1] === "hi") return true;
  return false;
}

// Problem desc :
// Given a string, return true if the string starts with 'hi'and false otherwise

// data to test
// startHi('hi there') → true	true	✔
// startHi('hi') → true	true	✔
// startHi('hello hi') → false	false	✔
// startHi('he') → false	false	✔
// startHi('h') → false	false	✔
// startHi('') → false	false	✔
// startHi('ho hi') → false	false	✔
// startHi('hi ho') → true	true	✔
