function sumDouble(a, b) {
  if (a == b) {
    return (a + b) * 2;
  } else {
    return a + b;
  }
}

// Problem desc:
// Given two int values,
// return their sum. Unless the two values are the same,
// then return double their sum.

// Data to test
// sumDouble(1, 2) → 3	3	✔
// sumDouble(3, 2) → 5	5	✔
// sumDouble(2, 2) → 8	8	✔
// sumDouble(-1, 0) → -1	-1	✔
// sumDouble(3, 3) → 12	12	✔
// sumDouble(0, 0) → 0	0	✔
// sumDouble(0, 1) → 1	1	✔
// sumDouble(3, 4) → 7	7	✔
