function endOther(a: string, b: string): boolean {
  let s: string = a.length < b.length ? a.toLowerCase() : b.toLowerCase();
  let l: string = s == a ? b.toLowerCase() : a.toLowerCase();

  return l.endsWith(s);
}

// Problem desc:
// Given two strings, return true if either of the strings appears at the very
//  end of the other string, ignoring upper/lower case differences (in other
//  words, the computation should not be "case sensitive"). Note:
//  str.toLowerCase() returns the lowercase version of a string.

// Data to test
// Test → Expected	Yours	Result
// endOther('Hiabc', 'abc') → true	true	✔
// endOther('AbC', 'HiaBc') → true	true	✔
// endOther('abc', 'abXabc') → true	true	✔
// endOther('Hiabc', 'abcd') → false	false	✔
// endOther('Hiabc', 'bc') → true	true	✔
// endOther('Hiabcx', 'bc') → false	false	✔
// endOther('abc', 'abc') → true	true	✔
// endOther('xyz', '12xyz') → true	true	✔
// endOther('yz', '12xz') → false	false	✔
// endOther('Z', '12xz') → true	true	✔
// endOther('12', '12') → true	true	✔
// endOther('abcXYZ', 'abcDEF') → false	false	✔
// endOther('ab', 'ab12') → false	false	✔
// endOther('ab', '12ab') → true	true	✔
