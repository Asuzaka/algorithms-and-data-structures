function withoutString(base: string, remove: string) {
  let w: string = "";
  for (let i: number = 0; i < base.length; i++) {
    if (
      base[i].toLowerCase() === remove.charAt(0).toLowerCase() &&
      base.slice(i, i + remove.length).toLowerCase() == remove.toLowerCase()
    ) {
      i += remove.length - 1;
    } else w += base[i];
  }
  return w;
}

// Problem desc:
// Given two strings, base and remove, return a version of the base string
//  where all instances of the remove string have been removed (not case sensitive).
// You may assume that the remove string is length 1 or more. Remove only non-overlapping instances,
//  so with "xxx" removing "xx" leaves "x".
``;
// Data to test
// withoutString('Hello there', 'llo') → He there	He there	✔
// withoutString('Hello there', 'e') → Hllo thr	Hllo thr	✔
// withoutString('Hello there', 'x') → Hello there	Hello there	✔
// withoutString('This is a FISH', 'IS') → Th a FH	Th a FH	✖
// withoutString('THIS is a FISH', 'is') → TH a FH	TH a FH	✖
// withoutString('THIS is a FISH', 'iS') → TH a FH	TH a FH	✖
// withoutString('abxxxxab', 'xx') → abab	abab	✔
// withoutString('abxxxab', 'xx') → abxab	abxab	✔
// withoutString('abxxxab', 'x') → abab	abab	✔
// withoutString('xxx', 'x') →		✔
// withoutString('xxx', 'xx') → x	x	✔
// withoutString('xyzzy', 'Y') → xzz	xzz	✔
// withoutString('', 'x') →		✔
// withoutString('abcabc', 'b') → acac	acac	✔
// withoutString('AA22bb', '2') → AAbb	AAbb	✔
// withoutString('1111', '1') →		✔
// withoutString('1111', '11') →		✔
// withoutString('MkjtMkx', 'Mk') → jtx	jtx	✔
// withoutString('Hi HoHo', 'Ho') → Hi	Hi	✔
