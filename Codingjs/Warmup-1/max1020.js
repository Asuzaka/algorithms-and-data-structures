function max1020(a, b) {
  let arange = a >= 10 && a <= 20;
  let brange = b >= 10 && b <= 20;
  if (arange && !brange) return a;
  if (brange && !arange) return b;
  if (arange && brange) {
    return a > b ? a : b;
  }
  return 0;
}

// Problem desc:
// Given 2 positive int values, return the larger value that is in the range
// 10..20 inclusive, or return 0 if neither is in that range.

// Data to test
// max1020(11, 19) → 19	19	✔
// max1020(19, 11) → 19	19	✔
// max1020(11, 9) → 11	11	✔
// max1020(9, 21) → 0	0	✔
// max1020(10, 21) → 10	10	✔
// max1020(21, 10) → 10	10	✔
// max1020(9, 11) → 11	11	✔
// max1020(23, 10) → 10	10	✔
// max1020(20, 10) → 20	20	✔
// max1020(7, 20) → 20	20	✔
// max1020(17, 16) → 17	17	✔
