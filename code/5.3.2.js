import utils from '../utils/index.js';

class MinStack {
  mainStack = [];
  minStack = [];

  push(number) {
    this.mainStack.push(number);
    // 如果辅助栈为空，或辅助栈的栈顶大于等于新元素，则将元素压入栈中
    if (this.minStack.length === 0 || this.minStack[this.minStack.length - 1] >= number) {
      this.minStack.push(number);
    }
    // 书中公式并未考虑当辅助栈都取完，主栈还有元素的情况
    // 所以这边注释地方对其添加入的元素进行全入辅助栈操作
    // if (this.minStack.length !== 0 && this.minStack[this.minStack.length - 1] < number) {
    //   for(var i = 0;i < this.minStack.length;i++) {
    //     if (this.minStack[i] < number) {
    //       this.minStack.splice(i,0,number);
    //     }
    //   }
    // }
  }

  pop(number) {
    // 如果出栈元素和辅助栈顶元素一样则辅助栈一起出
    var popValue = this.mainStack.pop();
    if(this.minStack[this.minStack.length - 1] === popValue) {
      this.minStack.pop();
    }
    // 如果push中使用了对全栈进行最小值排列，则需要遍历辅助栈将元素给剔除
    // for(var i = 0;i < this.minStack.length;i++) {
    //   if (this.minStack[i] === popValue) {
    //     this.minStack.splice(i,1);
    //   }
    // }
    return popValue;
  }

  getMin() {
    if (this.minStack.length === 0) {
      throw 'stack is empty';
    }
    return this.minStack[this.minStack.length - 1];
  }
}

export default function testFunc() {
  console.log(utils.getLine('5.3.2 最小栈的实现 解题思路'));
  var stack = new MinStack();
  stack.push(4);
  stack.push(9);
  stack.push(7);
  stack.push(3);
  stack.push(8);
  stack.push(5);
  console.log(stack.getMin());
  stack.pop();
  stack.pop();
  stack.pop();
  console.log(stack.getMin());
}
