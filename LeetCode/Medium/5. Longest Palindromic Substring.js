// Status Passed 26ms

var longestPalindrome = function (s) {
  let maxLength = 0;
  let longest = "";

  for (let i = 0; i < s.length; i++) {
    let oddPalindrome = expandAroundCenter(s, i, i);
    if (oddPalindrome.length > maxLength) {
      maxLength = oddPalindrome.length;
      longest = oddPalindrome;
    }

    let evenPalindrome = expandAroundCenter(s, i, i + 1);
    if (evenPalindrome.length > maxLength) {
      maxLength = evenPalindrome.length;
      longest = evenPalindrome;
    }
  }

  return longest;
};

function expandAroundCenter(s, left, right) {
  while (left >= 0 && right < s.length && s[left] === s[right]) {
    left--;
    right++;
  }
  return s.substring(left + 1, right);
}

let s = "bbassadddb";

let ans = longestPalindrome(s);
console.log(ans);
