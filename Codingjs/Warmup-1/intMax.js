function intMax(a, b, c) {
  if (a > b && a > c) return a;
  else if (b > a && b > c) return b;
  else if (c > a && c > b) return c;
}

// Problem desc
// Given three int values, a b c, return the largest.

// Data to test
// intMax(1, 2, 3) → 3	3	✔
// intMax(1, 3, 2) → 3	3	✔
// intMax(3, 2, 1) → 3	3	✔
// intMax(9, 3, 3) → 9	9	✔
// intMax(3, 9, 3) → 9	9	✔
// intMax(3, 3, 9) → 9	9	✔
// intMax(8, 2, 3) → 8	8	✔
// intMax(-3, -1, -2) → -1	-1	✔
// intMax(6, 2, 5) → 6	6	✔
// intMax(5, 6, 2) → 6	6	✔
// intMax(5, 2, 6) → 6	6	✔
