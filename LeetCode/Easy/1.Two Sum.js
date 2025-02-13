// Status: Passed

// Solution 1 Passed 119ms
var twoSum1 = function (nums, target) {
  let ans = [];
  for (let i = 0; i < nums.length; i++) {
    for (let j = 0; j < nums.length; j++) {
      if (nums[i] + nums[j] === target && i != j) {
        ans.push(i, j);
        i = nums.length;
        j = i;
      }
    }
  }
  return ans;
};

// Solution 2 Passed 78ms
var twoSum2 = function (nums, target) {
  for (let i = 0; i < nums.length; i++) {
    console.log(i);
    let prob = target - nums[i];
    let a = undefined;
    if (prob == nums[i]) {
      a = nums.indexOf(prob, i + 1);
      if (a >= 0) {
        return [i, a];
      }
    } else {
      a = nums.indexOf(prob);
    }
    if (a >= 0) {
      return i > a ? [a, i] : [i, a];
    }
  }
  return [];
};

// Soluiton 3 Passed 1ms

var twoSum = function (nums, target) {
  let map = new Map();

  for (let i = 0; i < nums.length; i++) {
    let prob = target - nums[i];

    if (map.has(prob)) {
      return [map.get(prob), i];
    }

    map.set(nums[i], i);
  }

  return [];
};

let nums = [2, 5, 5, 11];
let target = 10;

let answer = twoSum(nums, target);
