import utils from '../utils/index.js';

class Node {
  value;
  next;

  constructor(value) {
    this.value = value;
  }
}

/**
 * 判断是否有环
 * @param {Node} head 第一个链表元素
 * @returns 是否有环
 */
function isCycle(head) {
  var p1 = head;
  var p2 = head;
  while(p2 !== null && p2.next !== null) {
    p1 = p1.next;
    p2 = p2.next.next;
    if (p1 === p2) {
      return true;
    }
  }
  return false;
}


export default function testFunc() {
  console.log(utils.getLine('5.2.2 判断链表是否有环 解题思路'));
  var node1 = new Node(5);
  var node2 = new Node(3);
  var node3 = new Node(7);
  var node4 = new Node(2);
  var node5 = new Node(6);
  node1.next = node2;
  node2.next = node3;
  node3.next = node4;
  node4.next = node5;
  node5.next = node2;

  console.log(isCycle(node1));
}