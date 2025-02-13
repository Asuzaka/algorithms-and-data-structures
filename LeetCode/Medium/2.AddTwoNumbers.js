// Status: Passed 7ms

class ListNode {
  constructor(val, next = null) {
    this.val = val;
    this.next = next;
  }
}

var addTwoNumbers = function (l1, l2) {
  let output = new ListNode(0);
  let current = output;
  let carry = 0;

  while (l1 || l2 || carry) {
    let sum = (l1 ? l1.val : 0) + (l2 ? l2.val : 0) + carry;
    carry = Math.floor(sum / 10);
    current.next = new ListNode(sum % 10);
    current = current.next;
    console.log(1);
    if (l1) l1 = l1.next;
    if (l2) l2 = l2.next;
  }

  return output.next;
};

let l1 = new ListNode(2, new ListNode(4, new ListNode(3)));
let l2 = new ListNode(5, new ListNode(6, new ListNode(4)));

// let l1 = new ListNode(0);
// let l2 = new ListNode(7, new ListNode(3));

let result = addTwoNumbers(l1, l2);
