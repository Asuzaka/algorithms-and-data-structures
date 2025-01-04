function helloName(name) {
  return `Hello ${name}!`;
}

// Problem desc:
// Given a string name, e.g. "Bob", return a greeting of the form "Hello Bob!".

// Data to test
// helloName('Bob') → Hello Bob!	Hello Bob!	✔
// helloName('Alice') → Hello Alice!	Hello Alice!	✔
// helloName('X') → Hello X!	Hello X!	✔
// helloName('Dolly') → Hello Dolly!	Hello Dolly!	✔
// helloName('Alpha') → Hello Alpha!	Hello Alpha!	✔
// helloName('Omega') → Hello Omega!	Hello Omega!	✔
// helloName('Goodbye') → Hello Goodbye!	Hello Goodbye!	✔
// helloName('ho ho ho') → Hello ho ho ho!	Hello ho ho ho!	✔
// helloName('xyz!') → Hello xyz!!	Hello xyz!!	✔
// helloName('Hello!') → Hello Hello!!	Hello Hello!!	✔
