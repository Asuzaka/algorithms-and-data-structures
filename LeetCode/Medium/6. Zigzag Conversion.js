// Status Passed

// Status : INCORRENT: SAVED REASON : ZIGZAG UP AND DOWN : NEEDED : ONLY UP AND RESET
var convert1 = function (s, numRows) {
  if (numRows === 1 || s.length <= numRows) return s;
  let array = [];
  let up = true;
  let lenght = 0;
  let X = numRows;

  for (let i = 0; i < X; i++) {
    array[i] = [];
  }
  // or
  // array = new Array(X).fill([])

  for (let i = 0; i < s.length; ) {
    if (numRows - 1 == X - 1 || numRows - 1 === 0) {
      for (let k = 0; k < X; k++) {
        array[k][lenght] = s[i];
        i++;
      }
      lenght++;
      if (numRows - 1 == X - 1) {
        numRows--;
        up = false;
      }
      if (numRows - 1 == 0) {
        numRows++;
        up = true;
      }
    } else {
      array[numRows - 1][lenght] = s[i];
      lenght++;
      i++;
      if (up) numRows++;
      if (!up) numRows--;
    }
  }
  return array.flat(1).join("");
};

// Passed 6ms

var convert = function (s, numRows) {
  if (numRows === 1 || s.length <= numRows) return s;

  let array = new Array(numRows).fill("");
  let currentRow = 0;
  let goingDown = false;

  for (let i = 0; i < s.length; i++) {
    array[currentRow] += s[i];

    if (currentRow === 0 || currentRow === numRows - 1) {
      goingDown = !goingDown;
    }

    currentRow += goingDown ? 1 : -1;
  }
  return array.join("");
};

let s = "PAYPALISHIRING";
let numRows = 4;

// let array = [
//   [P, 0, A, 0, H, 0, N],
//   [A, P, L, S, I, I, G],
//   [Y, 0, I, 0, R, 0, 0],
// ];

// let array2 = [
//   [P, 0, 0, I, 0, N],
//   [A, 0, L, S, I, G],
//   [Y, A, 0, H, R, 0],
//   [P, 0, 0, I, 0, 0],
// ];

let res = convert(s, numRows);
console.log(res);
