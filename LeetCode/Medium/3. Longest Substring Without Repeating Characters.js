// Status Passed 5ms
var lengthOfLongestSubstring = function (s) {
  if (s.length === 0) return 0; // Handle empty string case

  let map = new Map();
  let start = 0;
  let length = 0;

  for (let i = 0; i < s.length; i++) {
    if (map.has(s[i])) {
      start = Math.max(start, map.get(s[i]) + 1);
    }
    map.set(s[i], i);
    length = Math.max(length, i - start + 1);
  }

  return length;
};

let s = "aab";

let ans = lengthOfLongestSubstring(s);

console.log(ans);
