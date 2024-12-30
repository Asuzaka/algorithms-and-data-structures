function icyHot(temp1, temp2) {
  if ((temp1 > 100 && temp2 < 0) || (temp1 < 0 && temp2 > 100)) return true;
  else return false;
}

// Problem desc:
//Given two temperatures, return true if one is less than 0 and the other is
//  greater than 100.

// Data to test
// icyHot(120, -1) → true	true	✔
// icyHot(-1, 120) → true	true	✔
// icyHot(2, 120) → false	false	✔
// icyHot(-1, 100) → false	false	✔
// icyHot(-2, 120) → true	true	✔
// icyHot(120, 120) → false	false	✔
