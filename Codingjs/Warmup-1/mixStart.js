function mixStart(str) {
  if (str[1] + str[2] == "ix") return true;
  return false;
}

// Problem desc:
// Return true if the given string begins with 'mix', except the 'm' can be
//  anything, so 'pix', '9ix' .. all count.

// Data to test
// mixStart('mix snacks') → true	true	✔
// mixStart('pix snacks') → true	true	✔
// mixStart('piz snacks') → false	false	✔
// mixStart('nix') → true	true	✔
// mixStart('ni') → false	false	✔
// mixStart('n') → false	false	✔
