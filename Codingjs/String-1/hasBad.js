function hasBad(str) {
  if (str[0] + str[1] + str[2] == "bad") return true;
  else if (str[1] + str[2] + str[3] == "bad") return true;
  else return false;
}

// Problem desc:
// Given a string, return true if "bad" appears starting at index 0 or 1 in the
// string, such as with "badxxx" or "xbadxx" but not "xxbadxx". The string
// may be any length, including 0.

// Data to test
// hasBad('badxx') → true	true	✔
// hasBad('xbadxx') → true	true	✔
// hasBad('xxbadxx') → false	false	✔
// hasBad('code') → false	false	✔
// hasBad('bad') → true	true	✔
// hasBad('ba') → false	false	✔
// hasBad('xba') → false	false	✔
// hasBad('xbad') → true	true	✔
// hasBad('') → false	false	✔
// hasBad('badyy') → true	true	✔
