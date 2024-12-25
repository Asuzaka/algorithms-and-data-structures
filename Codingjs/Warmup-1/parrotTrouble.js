function parrotTrouble(talking, hour) {
  if (talking == true && (hour < 7 || hour > 20)) {
    return true;
  } else {
    return false;
  }
}

// Problem desc:
// We have a loud talking parrot. The "hour" parameter is the current hour time in the range 0..23.
//  We are in trouble if the parrot is talking and the hour is before 7 or after 20.
//  Return true if we are in trouble.

// Data to test
// parrotTrouble(true, 6) → true	true	✔
// parrotTrouble(true, 7) → false	false	✔
// parrotTrouble(false, 6) → false	false	✔
// parrotTrouble(true, 21) → true	true	✔
// parrotTrouble(false, 21) → false	false	✔
// parrotTrouble(true, 23) → true	true	✔
// parrotTrouble(false, 23) → false	false	✔
// parrotTrouble(true, 20) → false	false	✔
// parrotTrouble(false, 12) → false	false	✔
