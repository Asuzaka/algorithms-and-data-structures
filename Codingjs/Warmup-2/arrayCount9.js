function arrayCount9(nums) {
  let c = 0;
  for (let i = 0; i < nums.length; i++) {
    if (nums[i] == 9) c++;
  }
  return c;
}

// Problem desc:
// Given an array of ints, return the number of 9's in the array.

// Data to test
// arrayCount9([1,2,9]) → 1	1	✔
// arrayCount9([1,9,9]) → 2	2	✔
// arrayCount9([1,9,9,3,9]) → 3	3	✔
// arrayCount9([1,2,3]) → 0	0	✔
// arrayCount9([]) → 0	0	✔
// arrayCount9([4,2,4,3,1]) → 0	0	✔
// arrayCount9([9,2,4,3,1]) → 1	1	✔
