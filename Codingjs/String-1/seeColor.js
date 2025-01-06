function seeColor(str) {
  if (str[0] + str[1] + str[2] == "red") return "red";
  else if (str[0] + str[1] + str[2] + str[3] == "blue") return "blue";
  else return "";
}

// Problem desc:
// Given a string, if the string begins with "red" or "blue" return that color
//  string, otherwise return the empty string

// Data to test
// seeColor('redxx') → red	red	✔
// seeColor('xxred') →		✔
// seeColor('blueTimes') → blue	blue	✔
// seeColor('NoColor') →		✔
// seeColor('red') → red	red	✔
// seeColor('re') →		✔
// seeColor('blu') →		✔
// seeColor('blue') → blue	blue	✔
// seeColor('a') →		✔
// seeColor('') →		✔
// seeColor('xyzred') →		✔
