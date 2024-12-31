function stringTimes(str, n) {
  let a = "";
  for (let i = 0; i < n; i++) {
    a += str;
  }
  return a;
}

// Problem desc:
// Given a string and a non-negative int n, return a larger string that is n
//  copies of the original string.

// Data to test
// stringTimes('Hi', 2) → HiHi	HiHi	✔
// stringTimes('Hi', 3) → HiHiHi	HiHiHi	✔
// stringTimes('Hi', 1) → Hi	Hi	✔
// stringTimes('Hi', 0) →		✔
// stringTimes('Hi', 5) → HiHiHiHiHi	HiHiHiHiHi	✔
// stringTimes('Oh Boy!', 2) → Oh Boy!Oh Boy!	Oh Boy!Oh Boy!	✔
// stringTimes('x', 4) → xxxx	xxxx	✔
// stringTimes('', 4) →		✔
// stringTimes('code', 2) → codecode	codecode	✔
// stringTimes('code', 3) → codecodecode	codecodecode	✔
