function monkeyTrouble(aSmile, bSmile) {
  if (aSmile == true && bSmile == true) {
    return true;
  } else if (aSmile == false && bSmile == false) {
    return true;
  } else {
    return false;
  }
}

// Problem desc:
// We have two monkeys, a and b,
//  and the parameters aSmile and bSmile indicate if each is smiling.
//  We are in trouble if they are both smiling or if neither of them is smiling.
//  Return true if we are in trouble.

// Data to test
// monkeyTrouble(true, true) → true	true	✔
// monkeyTrouble(false, false) → true	true	✔
// monkeyTrouble(true, false) → false	false	✔
// monkeyTrouble(false, true) → false	false	✔
