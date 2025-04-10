function starOut(str: string): string {
  let r: string = "";
  for (let i: number = 0; i < str.length; i++) {
    if (str[i + 1] === "*" || str[i] === "*" || str[i - 1] === "*") {
    } else r += str[i];
  }
  return r;
}

// Problem desc:
// Return a version of the given string, where for every star (*) in the string
//  the star and the chars immediately to its left and right are gone. So
//  "ab*cd" yields "ad" and "ab**cd" also yields "ad".

// Data to test:
// Test → Expected	Yours	Result
// starOut('ab*cd') → ad	ad	✔
// starOut('ab**cd') → ad	ad	✔
// starOut('sm*eilly') → silly	silly	✔
// starOut('sm*eil*ly') → siy	siy	✔
// starOut('sm**eil*ly') → siy	siy	✔
// starOut('sm***eil*ly') → siy	siy	✔
// starOut('stringy*') → string	string	✔
// starOut('*stringy') → tringy	tringy	✔
// starOut('*str*in*gy') → ty	ty	✔
// starOut('abc') → abc	abc	✔
// starOut('a*bc') → c	c	✔
// starOut('ab') → ab	ab	✔
// starOut('a*b') →		✔
// starOut('a') → a	a	✔
// starOut('a*') →		✔
// starOut('*a') →		✔
// starOut('*') →		✔
// starOut('') →		✔
