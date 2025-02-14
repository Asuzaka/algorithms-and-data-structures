// Status PASSED 60ms

// PASSED 75ms
var reverse1 = function (x) {
  let num = String(x);
  let ans = "";
  let negative = false;

  let limit = 2147483647;
  let minLimit = limit * -1;

  function byOne(length) {
    if (ans > limit) return 0;
    if (num[length] === "-") {
      negative = true;
      return;
    }
    if (length < 0) return;

    ans += num[length];
    byOne(length - 1);
  }

  byOne(num.length - 1);

  let finalNumber = negative ? -Number(ans) : Number(ans);

  if (finalNumber < minLimit || finalNumber > limit) return 0;

  return finalNumber;
};

// PASSED 68ms
var reverse2 = function (x) {
  let num = Math.abs(x).toString().split("").reverse().join("");
  let reversed = Number(num) * Math.sign(x);

  if (reversed < -(2 ** 31) || reversed > 2 ** 31 - 1) return 0;

  return reversed;
};

// PASSED 60ms
var reverse = function (x) {
  let rev = 0;
  let limit = 2 ** 31;

  while (x !== 0) {
    let digit = x % 10;
    x = (x / 10) | 0;

    if (rev > (limit - 1) / 10 || rev < -limit / 10) return 0;

    rev = rev * 10 + digit;
  }

  return rev;
};

let x = 1534236469;

let res = reverse(x);
console.log(res);
