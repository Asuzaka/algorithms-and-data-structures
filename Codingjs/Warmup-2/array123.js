function array123(nums) {
  for (let i = 0; i < nums.length - 2; i++) {
    if (nums[i] == 1 && nums[i + 1] == 2 && nums[i + i] == 3) {
      return true;
    }
  }
  return false;
}

// Problem desc:
// Given an array of ints, return true if the sequence of numbers 1, 2, 3 appears in the array somewhere.

// Not data to test
