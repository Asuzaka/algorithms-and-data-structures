function stringMatch(a, b) {
  let c = 0;
  const len = a.length > b.length ? b.length : a.length;

  for (let i = 0; i < len - 1; i++) {
    if (a[i] + a[i + 1] == b[i] + b[i + 1]) {
      c++;
    }
  }

  return c;
}

// Problem desc:
// Given 2 strings, a and b, return the number of the positions where they
// contain the same length 2 substring. So "xxcaazz" and "xxbaaz" yields 3,
// since the "xx" "xx", "aa", and "az" substrings appear in the same place in both strings.

// Data to test
// stringMatch('xxcaazz', 'xxbaaz') → 3	3	✔
// stringMatch('abc', 'abc') → 2	2	✔
// stringMatch('abc', 'axc') → 0	0	✔
// stringMatch('hello', 'he') → 1	1	✔
// stringMatch('he', 'hello') → 1	1	✔
// stringMatch('', 'hello') → 0	0	✔
// stringMatch('aabbccdd', 'abbbxxd') → 1	1	✔
// stringMatch('aaxxaaxx', 'iaxxai') → 3	3	✔
// stringMatch('iaxxai', 'aaxxaaxx') → 3	3	✔
