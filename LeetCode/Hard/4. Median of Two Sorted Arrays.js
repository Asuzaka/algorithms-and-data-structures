// Status Passed 9ms

// Status Passed 9ms
var findMedianSortedArrays1 = function (nums1, nums2) {
  let a = [...nums1, ...nums2].sort((a, b) => a - b);
  if (a.length % 2 != 0) {
    return a[(a.length - 1) / 2];
  } else {
    return (a[a.length / 2] + a[a.length / 2 - 1]) / 2;
  }
};

// Status Passed 7ms
var findMedianSortedArrays = function (nums1, nums2) {
  let merged = [];
  let i = 0,
    j = 0;

  while (i < nums1.length && j < nums2.length) {
    if (nums1[i] < nums2[j]) {
      merged.push(nums1[i++]);
    } else {
      merged.push(nums2[j++]);
    }
  }

  while (i < nums1.length) merged.push(nums1[i++]);
  while (j < nums2.length) merged.push(nums2[j++]);

  let len = merged.length;
  return len % 2 === 0
    ? (merged[len / 2] + merged[len / 2 - 1]) / 2
    : merged[Math.floor(len / 2)];
};

let nums1 = [1, 2];
let nums2 = [3, 4];

findMedianSortedArrays(nums1, nums2);
