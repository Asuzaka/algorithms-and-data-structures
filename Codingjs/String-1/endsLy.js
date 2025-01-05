function endsLy(str) {
  if (str[str.length - 2] + str[str.length - 1] == "ly") return true;
  else return false;
}

// Problem desc:
// Given a string, return true if it ends in "ly".

// Data to test
// endsLy('oddly') → true	true	✔
// endsLy('y') → false	false	✔
// endsLy('oddl') → false	false	✔
// endsLy('olydd') → false	false	✔
// endsLy('ly') → true	true	✔
// endsLy('') → false	false	✔
// endsLy('falsely') → true	true	✔
// endsLy('evenly') → true	true	✔
