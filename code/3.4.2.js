import utils from '../utils/index.js';

/**
 * 最大堆的二叉堆队列实现类
 */
class PriorityQueue {
  // 存储二叉堆数组
  array;
  // 二叉堆长度
  size;

  constructor() {
    // 书上用的语言是Java，数组需要初始化长度
    // 而JavaScript的数组无需初始化长度，直接声明为空数组即可
    this.array = [];
    this.size = 0;
  }

  /**
   * 入队列
   * @param {number} key 入队元素
   */
   enQueue(key) {
    // Java语言下需要判断数组长度，而JavaScript无需
    // if (this.size >= this.array.length) {
    //   resize();
    // }
    this.array[this.size++] = key;
    this.upAdjust();
  }

  /**
   * 出队列
   */
  deQueue() {
    if(this.size <= 0) {
      return 'the queue is empty';
    }
    //获取堆顶元素
    var head = this.array[0];
    this.array[0] = this.array[--this.size];
    this.downAdjust();
    return head;
  }

  /**
   * 上浮调整
   */
  upAdjust() {
    var childIndex = this.size - 1;
    var parentIndex = parseInt((childIndex - 1)/2);
    // temp保存要插入叶子节点值，到最后赋值
    var temp = this.array[childIndex];
    while( childIndex > 0 && temp > this.array[parentIndex] ) {
      this.array[childIndex] = this.array[parentIndex];
      childIndex = parentIndex;
      parentIndex = parseInt(parentIndex / 2);
    }
    this.array[childIndex] = temp;
  }

  /**
   * 下沉调整
   */
  downAdjust() {
    var parentIndex = 0;
    var temp = this.array[parentIndex];
    var childIndex = 1;
    while ( childIndex < this.size ) {
      // 如果有右孩，且右孩大于左孩的值，则定位右孩
      if (childIndex + 1 < this.size && this.array[childIndex + 1] > this.array[childIndex]) {
        childIndex++;
      }
      // 如果父的值大于任何一个孩的值，直接退出
      if(temp >= this.array[childIndex]) break;
      // 赋值
      this.array[parentIndex] = this.array[childIndex];
      parentIndex = childIndex;
      childIndex = 2 * childIndex + 1;
    }
    this.array[parentIndex] = temp;
  }

  /**
   * 扩容
   * @description 在JavaScript语言下，数组无长度限制所以无需进行扩容
   */
   resize() {
    // 无需扩容，Java的小伙伴请看书中代码
  }

  /**
   * 输出当前队列
   */
  printQueue() {
    return this.array.toString();
  }
}

export default function testFunc() {
  console.log(utils.getLine('3.4.2 优先队列的实现'));
  var priorityQueue = new PriorityQueue();
  priorityQueue.enQueue(3);
  priorityQueue.enQueue(5);
  priorityQueue.enQueue(10);
  priorityQueue.enQueue(2);
  priorityQueue.enQueue(7);
  console.log("当前队列：", priorityQueue.printQueue());
  console.log("出队元素：", priorityQueue.deQueue());
  console.log("当前队列：", priorityQueue.printQueue());
  console.log("出队元素：", priorityQueue.deQueue());
  console.log("当前队列：", priorityQueue.printQueue());
}
