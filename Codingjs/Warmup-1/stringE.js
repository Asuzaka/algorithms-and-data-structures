function stringE(str) {
  let count = 0;
  for (i = 0; i < str.length; i++) {
    str[i] == "e" && count++;
  }
  if (count > 0 && count <= 3) return true;
  else return false;
}

// Problem desc:
// Return true if the given string contains between 1 and 3 'e' chars.

// Data to test
// stringE('Hello') → true	true	✔
// stringE('Heelle') → true	true	✔
// stringE('Heelele') → false	false	✔
// stringE('HII') → false	false	✔
// stringE('e') → true	true	✔
// stringE('') → false	false	✔
