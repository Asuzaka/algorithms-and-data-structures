function in1020(a, b) {
  if ((a >= 10 && a <= 20) || (b >= 10 && b <= 20)) return true;
  else return false;
}

// Problem desc:
// Given 2 int values, return true if either of them is in the range 10..20
//  inclusive.

// Data to test
// in1020(12, 99) → true	true	✔
// in1020(21, 12) → true	true	✔
// in1020(8, 99) → false	false	✔
// in1020(99, 10) → true	true	✔
// in1020(20, 20) → true	true	✔
// in1020(21, 21) → false	false	✔
// in1020(9, 9) → false	false	✔
