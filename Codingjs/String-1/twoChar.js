function twoChar(str, index) {
  if (str.length - 2 >= index && index <= str.length && index > 0) {
    return str[index] + str[index + 1];
  }
  return str[0] + str[1];
}

// Problem desc:
// Given a string and an index, return a string length 2 starting at the given
//  index. If the index is too big or too small to define a string length 2, use
// the first 2 chars. The string length will be at least 2.

// Data to test
// twoChar('java', 0) → ja	ja	✔
// twoChar('java', 2) → va	va	✔
// twoChar('java', 3) → ja	ja	✔
// twoChar('java', 4) → ja	ja	✔
// twoChar('java', -1) → ja	ja	✔
// twoChar('Hello', 0) → He	He	✔
// twoChar('Hello', 1) → el	el	✔
// twoChar('Hello', 99) → He	He	✔
// twoChar('Hello', 3) → lo	lo	✔
// twoChar('Hello', 4) → He	He	✔
// twoChar('Hello', 5) → He	He	✔
// twoChar('Hello', -7) → He	He	✔
// twoChar('Hello', 6) → He	He	✔
// twoChar('Hello', -1) → He	He	✔
// twoChar('yay', 0) → ya	ya	✔
