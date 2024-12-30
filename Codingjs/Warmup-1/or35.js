function or35(n) {
  if (n % 3 == 0 || n % 5 == 0) return true;
  else return false;
}

// Problem desc:
//Return true if the given non-negative number is a multiple of 3 or a
//  multiple of 5. (Hint: Use the % 'mod' operator)

// Data to test
// or35(3) → true	true	✔
// or35(10) → true	true	✔
// or35(8) → false	false	✔
// or35(15) → true	true	✔
// or35(5) → true	true	✔
// or35(4) → false	false	✔
// or35(9) → true	true	✔
// or35(4) → false	false	✔
// or35(7) → false	false	✔
// or35(6) → true	true	✔
// or35(17) → false	false	✔
// or35(18) → true	true	✔
// or35(29) → false	false	✔
// or35(20) → true	true	✔
// or35(21) → true	true	✔
// or35(22) → false	false	✔
// or35(45) → true	true	✔
// or35(99) → true	true	✔
// or35(100) → true	true	✔
// or35(101) → false	false	✔
// or35(121) → false	false	✔
// or35(122) → false	false	✔
// or35(123) → true	true	✔
