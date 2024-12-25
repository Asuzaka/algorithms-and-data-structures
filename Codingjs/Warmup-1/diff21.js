function diff21(n) {
  if (n >= 21) {
    return (n - 21) * 2;
  } else {
    return 21 - n;
  }
}

// Problem desc:
// Given an int n, return the absolute difference between n and 21,
//  except return double the absolute difference if n is over 21.

// Data to test
// diff21(19) → 2	2	✔
// diff21(10) → 11	11	✔
// diff21(21) → 0	0	✔
// diff21(22) → 2	2	✔
// diff21(25) → 8	8	✔
// diff21(30) → 18	18	✔
// diff21(0) → 21	21	✔
// diff21(1) → 20	20	✔
// diff21(2) → 19	19	✔
// diff21(-1) → 22	22	✔
// diff21(-2) → 23	23	✔
// diff21(50) → 58	58	✔
