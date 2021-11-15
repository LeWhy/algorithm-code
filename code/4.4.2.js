import utils from '../utils/index.js';

/**
 * 下沉调整
 * @param {Array<number>} array 待处理数组
 * @param {number} parentIndex   起始角标
 * @param {number} length     结束角标
 */
function downAdjust(array, parentIndex, length) {
  // temp 保存父节点值，用于最后赋值
  var temp = array[parentIndex];
  var childIndex = 2 * parentIndex + 1;
  while(childIndex < length) {
    // 如果有右孩且右孩大于左孩，则定位到右孩
    if(childIndex + 1 < length && array[childIndex + 1] > array[childIndex]) {
      childIndex++;
    }
    // 如果父节点大等于于任何孩值，则跳出
    if (temp >= array[childIndex]) break;
    // 进行单向赋值
    array[parentIndex] = array[childIndex];
    parentIndex = childIndex;
    childIndex = 2 * childIndex + 1;
  }
  array[parentIndex]= temp;
}

/**
 * 堆排序（升序）
 * @param {Array<number>} array 
 */
function heapSort(array) {
  console.log('排列前数组：', array.toString());
  // 构建最大堆
  for(var i = (array.length - 2)/2;i >= 0;i--) {
    downAdjust(array, i, array.length);
  }
  console.log('获取最大堆：', array.toString());
  // 循环删除尾部，并重新堆最大堆进行调整
  for(var i = array.length - 1;i > 0;i--) {
    // 最后一个与第一个互换
    var temp = array[i];
    array[i] = array[0];
    array[0] = temp;
    // 之后进行下沉调整
    downAdjust(array, 0, i);
  }
  console.log('排列后的数组：', array.toString());
}

export default function testFunc() {
  console.log(utils.getLine('4.4.2 栈排序的代码实现'));
  var array = [1,3,2,6,5,7,8,9,10,0];
  heapSort(array);
}
