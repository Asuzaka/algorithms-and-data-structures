function stringBits(str) {
  let res = "";
  for (let i = 0; i < str.length; i++) {
    res += str[i];
    i++;
  }
  return res;
}

// Problem desc:
// Given a string, return a new string made of every other char starting with
// the first, so "Hello" yields "Hlo".

// Data test
// stringBits('Hello') → Hlo	Hlo	✔
// stringBits('Hi') → H	H	✔
// stringBits('Heeololeo') → Hello	Hello	✔
// stringBits('HiHiHi') → HHH	HHH	✔
// stringBits('') →		✔
// stringBits('Greetings') → Getns	Getns	✔
// stringBits('Chocolate') → Cooae	Cooae	✔
// stringBits('pi') → p	p	✔
// stringBits('Hello Kitten') → HloKte	HloKte	✔
// stringBits('hxaxpxpxy') → happy	happy	✔
