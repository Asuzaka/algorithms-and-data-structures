function conCat(a, b) {
  return `${a[a.length - 1] == b[0] ? (a = a[0] + a[1]) : a}${b}`;
}

// Problem desc:
// Given two strings, append them together (known as "concatenation") and
//  return the result. However, if the concatenation creates a double-char, then
// omit one of the chars, so "abc" and "cat" yields "abcat".

// Data to test
// conCat('abc', 'cat') → abcat	abcat	✔
// conCat('dog', 'cat') → dogcat	dogcat	✔
// conCat('abc', '') → abc	abc	✔
// conCat('', 'cat') → cat	cat	✔
// conCat('pig', 'g') → pig	pig	✔
// conCat('pig', 'doggy') → pigdoggy	pigdoggy	✔
