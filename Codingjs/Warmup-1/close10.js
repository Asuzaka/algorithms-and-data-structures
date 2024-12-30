function close10(a, b) {
  let x = 0;
  let y = 0;
  if (a < 10) x = 10 - a;
  if (b < 10) y = 10 - b;
  if (a > 10) x = a - 10;
  if (b > 10) y = b - 10;
  let c = x > y;
  let g = x == y;
  if (g) return 0;
  if (c) return b;
  return a;
}

// Problem desc:
// Given 2 int values, return whichever value is nearest to the value 10, or
// return 0 in the event of a tie. Note that Math.abs(n) returns the absolute
//  value of a number.

// Data to test
// close10(8, 13) → 8	8	✔
// close10(13, 8) → 8	8	✔
// close10(13, 7) → 0	0	✔
// close10(7, 13) → 0	0	✔
// close10(9, 13) → 9	9	✔
// close10(13, 8) → 8	8	✔
// close10(10, 12) → 10	10	✔
// close10(11, 10) → 10	10	✔
// close10(5, 21) → 5	5	✔
// close10(0, 20) → 0	0	✔
// close10(0, 20) → 0	0	✔
// close10(10, 10) → 0	0	✔
