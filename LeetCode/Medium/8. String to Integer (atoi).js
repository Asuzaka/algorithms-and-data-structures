// Status Passed 1ms

// Passed 5ms
function Option1() {
  var myAtoi = function (s) {
    let ans = "";
    let stop = false;

    s = s.trimStart();

    let { index, val, negative } = isNegative(s);

    for (let i = index; i < val.length; i++) {
      let ses = val[i].charCodeAt(0);
      if (ses >= 48 && ses <= 57) {
        ans += val[i];
      } else {
        break;
      }
    }

    let readyAsn = negative ? Number(ans) * -1 : Number(ans);
    return clampTo32BitInteger(readyAsn);
  };

  function isNegative(val) {
    let negative = false;
    let index = 0;
    if (val[0] == "-") {
      negative = true;
      index = 1;
    }
    if (val[0] == "+") {
      index = 1;
    }
    return { index, val, negative };
  }

  function clampTo32BitInteger(num) {
    const INT_MIN = -(2 ** 31); // -2147483648
    const INT_MAX = 2 ** 31 - 1; // 2147483647

    return Math.max(INT_MIN, Math.min(INT_MAX, num));
  }
}

// Passed 1ms
var myAtoi = function (s) {
  let index = 0,
    sign = 1,
    result = 0;
  const INT_MIN = -(2 ** 31),
    INT_MAX = 2 ** 31 - 1;

  while (index < s.length && s[index] === " ") index++;

  if (s[index] === "-" || s[index] === "+") {
    sign = s[index] === "-" ? -1 : 1;
    index++;
  }

  while (index < s.length && s[index] >= "0" && s[index] <= "9") {
    result = result * 10 + (s[index].charCodeAt(0) - 48);
    if (sign * result <= INT_MIN) return INT_MIN;
    if (sign * result >= INT_MAX) return INT_MAX;
    index++;
  }

  return sign * result;
};

let s = "   -042";
let res = myAtoi(s);

console.log(res);
