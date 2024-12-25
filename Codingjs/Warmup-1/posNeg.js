function posNeg(a, b, negative) {
  if (
    (a < 0 && b > 0 && negative == false) ||
    (a > 0 && b < 0 && negative == false) ||
    (a < 0 && b < 0 && negative == true)
  ) {
    return true;
  } else {
    return false;
  }
}

// Problem desc:
// Given 2 int values, return true if one is negative and one is positive.
//  Except if the parameter "negative" is true, then return true only if both are
// negative.

// Data to test
// posNeg(1, -1, false) → true	true	✔
// posNeg(-1, 1, false) → true	true	✔
// posNeg(-4, -5, true) → true	true	✔
// posNeg(-4, -5, false) → false	false	✔
// posNeg(-4, 5, false) → true	true	✔
// posNeg(-4, 5, true) → false	false	✔
// posNeg(1, 1, false) → false	false	✔
// posNeg(-1, -1, false) → false	false	✔
// posNeg(1, -1, true) → false	false	✔
// posNeg(-1, 1, true) → false	false	✔
// posNeg(1, 1, true) → false	false	✔
// posNeg(-1, -1, true) → true	true	✔
// posNeg(5, -5, false) → true	true	✔
// posNeg(-6, 6, false) → true	true	✔
// posNeg(-5, -6, false) → false	false	✔
// posNeg(-2, -1, false) → false	false	✔
// posNeg(1, 2, false) → false	false	✔
// posNeg(-5, 6, true) → false	false	✔
// posNeg(-5, -5, true) → true	true	✔
