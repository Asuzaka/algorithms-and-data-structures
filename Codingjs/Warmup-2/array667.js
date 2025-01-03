function array667(nums) {
  let c = 0;
  for (let i = 0; i < nums.length; i++) {
    if (nums[i] == 6 && (nums[i + 1] == 6 || nums[i + 1] == 7)) {
      c++;
    }
  }
  return c;
}

// Problem desc:
// Given an array of ints, return the number of times that two 6's are next to
//  each other in the array. Also count instances where the second "6" is
//  actually a 7.

// Data to test
// array667([6,6,2]) → 1	1	✔
// array667([6,6,2,6]) → 1	1	✔
// array667([6,7,2,6]) → 1	1	✔
// array667([6,6,2,7,6,7]) → 2	2	✔
// array667([1,6,3]) → 0	0	✔
// array667([6,1]) → 0	0	✔
// array667([]) → 0	0	✔
// array667([3,6,7,6]) → 1	1	✔
// array667([3,6,6,7]) → 2	2	✔
// array667([6,3,6,6]) → 1	1	✔
// array667([6,7,6,6]) → 2	2	✔
// array667([1,2,3,5,6]) → 0	0	✔
// array667([1,2,3,6,6]) → 1	1	✔
