import utils from '../utils/index.js';

class StackQueue {
  stackA = [];
  stackB = [];

  enQueue(element) {
    this.stackA.push(element);
  }

  deQueue() {
    if (this.stackB.length === 0) {
      if (this.stackA.length === 0) {
        return null;
      }
      this.transfer();
    }
    return this.stackB.pop();
  }

  transfer() {
    while (this.stackA.length > 0) {
      this.stackB.push(this.stackA.pop());
    }
  }
}

export default function testFunc() {
  console.log(utils.getLine('5.7.2 使用栈实现队列 解题思路'));
  const stackQueue = new StackQueue();
  stackQueue.enQueue(1);
  stackQueue.enQueue(2);
  stackQueue.enQueue(3);
  console.log(stackQueue.deQueue());
  console.log(stackQueue.deQueue());
  stackQueue.enQueue(4);
  console.log(stackQueue.deQueue());
  console.log(stackQueue.deQueue());
}