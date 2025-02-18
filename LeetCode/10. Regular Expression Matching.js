// Status On Hold, Stuck

// var isMatch = function (s, p) {
//   if (s.length > p.length) return false;
//   let previous;
//   let count2 = 0;
//   for (let i = 0; i < p.length; i++) {
//     let move = 0;
//     if (s[count2] == p[i]) {
//       previous = s[count2];
//       move++;
//     }
//     if (p[i] == ".") {
//       move++;
//     }
//     if(p[i])
//   }
// };

// var isMatch = function (s, p) {
//   if (s.length > p.length) return false;
//   let pC = null;
//   let c2 = 0;
//   for (let i = 0; i < p.length; i++) {
//     console.log(c2, p[i], s[c2], pC);
//     if (!s[c2]) return false;

//     if (p[i] == "*") {
//       if (p[i - 1] == s[c2]) {
//         pC = s[c2];
//         c2++;
//       } else if (s[c2] == pC || pC == ".") {
//         c2++;
//       }
//     } else if (p[i] == ".") {
//       pC = ".";
//       c2++;
//     } else if (s[c2] == p[i]) {
//       pC = s[c2];
//       c2++;
//     }
//     if (!(p[i] == "." || p[i] == "*")) {
//       pC = p[i];
//     }
//   }
//   let check = s.length == c2 ? true : false;
//   return check;
// };

let s = "aaa";
let p = "ab*a*c*a";

let res = isMatch(s, p);

console.log(res);
