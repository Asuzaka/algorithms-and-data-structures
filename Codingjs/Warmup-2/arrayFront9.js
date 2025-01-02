function arrayFront9(nums) {
  for (let i = 0; i < 4; i++) {
    if (nums[i] == 9) return true;
  }
  return false;
}

// Problem desc:
// Given an array of ints, return true if one of the first 4 elements in the array
//  is a 9. The array length may be less than 4.

// Data to test
// arrayFront9([1,2,9,3,4]) → true	true	✔
// arrayFront9([1,2,3,4,9]) → false	false	✔
// arrayFront9([1,2,3,4,5]) → false	false	✔
// arrayFront9([9,2,3]) → true	true	✔
// arrayFront9([1,9,9]) → true	true	✔
// arrayFront9([1,2,3]) → false	false	✔
// arrayFront9([1,9]) → true	true	✔
// arrayFront9([5,5]) → false	false	✔
// arrayFront9([2]) → false	false	✔
// arrayFront9([9]) → true	true	✔
// arrayFront9([]) → false	false	✔
// arrayFront9([3,9,2,3,3]) → true	true	✔
