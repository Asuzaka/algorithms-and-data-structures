// My solution which works locally but it gives me an error on leetcode, idk why but he keeps asking for ListNode and honestly i don't really understand the errors and requirements from Leetcode fully, probably cuz im noob? idk, but i won't keep trying for now
var addTwoNumbers = function (l1, l2) {
  let l1arr = "";
  let l2arr = "";
  for (let i = l1.length - 1; i > -1; i--) {
    l1arr += l1[i];
  }
  for (let j = l2.length - 1; j > -1; j--) {
    l2arr += l2[j];
  }
  let res = String(+l1arr + +l2arr);
  let arr = [];
  for (let a = res.length - 1; a > -1; a--) {
    arr[res.length - a - 1] = +res[a];
  }
  return arr;
};

// The same thing was happening with other solutions i solved around 5 problems and tried to upload it from local to leetcode but it didn't even accept the solutions, so for now i think i will stop trying to do something on leetcode on my own, and start to focus on what truly matter for now
