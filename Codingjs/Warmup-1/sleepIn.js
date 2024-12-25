function sleepIn(weekday, vacation) {
  if (vacation == true) {
    return true;
  } else if (vacation == false && weekday == false) {
    return true;
  } else {
    return false;
  }
}

// Problem desc:
// The parameter weekday is true if it is a weekday,
//  and the parameter vacation is true if we are on vacation.
// We sleep in if it is not a weekday or we're on vacation.
//  Return true if we sleep in.

// Data to test
// sleepIn(true, true) → true	true	✔
// sleepIn(true, false) → false	false	✔
// sleepIn(false, true) → true	true	✔
// sleepIn(false, false) → true	true	✔
