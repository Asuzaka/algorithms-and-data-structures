function repeatFront(str: string, n: number): string {
  let repeat: string[] = [];
  for (let i: number = 0; i < n; i++) {
    repeat[i] = str[i];
  }
  let result: string = "";
  for (let i: number = 0; i < n; i++) {
    result += repeat.join("");
    repeat.pop();
  }
  return result;
}

// Problem desc:
// Given a string and an int n, return a string made of the first n characters of
//  the string, followed by the first n-1 characters of the string, and so on. You
//  may assume that n is between 0 and the length of the string,
//  inclusive (i.e. n >= 0 and n <= str.length()).

// Data to test
// Test → Expected	Yours	Result
// repeatFront('Chocolate', 4) → ChocChoChC	ChocChoChC	✔
// repeatFront('Chocolate', 3) → ChoChC	ChoChC	✔
// repeatFront('Ice Cream', 2) → IcI	IcI	✔
// repeatFront('Ice Cream', 1) → I	I	✔
// repeatFront('Ice Cream', 0) →		✔
// repeatFront('xyz', 3) → xyzxyx	xyzxyx	✔
// repeatFront('', 0) →		✔
// repeatFront('Java', 4) → JavaJavJaJ	JavaJavJaJ	✔
// repeatFront('Java', 1) → J	J	✔
