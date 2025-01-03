function noTriples(nums) {
  for (let i = 0; i < nums.length; i++) {
    if (nums[i] == nums[i + 1] && nums[i] == nums[i + 2]) return false;
  }
  return true;
}

// Problem desc:
// Given an array of ints, we'll say that a triple is a value appearing 3 times in
// a row in the array. Return true if the array does not contain any triples.

// Data to test
// noTriples([1,1,2,2,1]) → true	true	✔
// noTriples([1,1,2,2,2,1]) → false	false	✔
// noTriples([1,1,2,2,2,1]) → false	false	✔
// noTriples([1,2,1]) → true	true	✔
// noTriples([1,1,1]) → false	false	✔
// noTriples([1,1]) → true	true	✔
// noTriples([1]) → true	true	✔
// noTriples([1]) → true	true	✔
// noTriples([]) → true	true	✔
