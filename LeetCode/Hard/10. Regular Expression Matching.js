// Status PASSED 4ms

var isMatch = function (s, p) {
  let m = s.length,
    n = p.length;
  let prev = Array(n + 1).fill(false);
  let curr = Array(n + 1).fill(false);

  prev[0] = true;

  for (let j = 1; j <= n; j++) {
    if (p[j - 1] === "*") {
      prev[j] = prev[j - 2];
    }
  }

  for (let i = 1; i <= m; i++) {
    curr[0] = false;
    for (let j = 1; j <= n; j++) {
      if (p[j - 1] === s[i - 1] || p[j - 1] === ".") {
        curr[j] = prev[j - 1];
      } else if (p[j - 1] === "*") {
        curr[j] =
          curr[j - 2] ||
          (prev[j] && (s[i - 1] === p[j - 2] || p[j - 2] === "."));
      } else {
        curr[j] = false;
      }
    }

    [prev, curr] = [curr, prev];
  }

  return prev[n];
};

let s = "aaa";
let p = "ab*a*c*a";

let res = isMatch(s, p);
