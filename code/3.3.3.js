import utils from '../utils/index.js';

// 二叉堆-最小堆
/** 
 * 上浮操作 
 * @description 方法仅针对最后一个对象进行上浮
 * @param {Array<number>} array 待调整的堆
*/
function upAdjust(array) {
  var childIndex = array.length - 1;
  var parentIndex = parseInt((childIndex - 1)/2);

  var temp = array[childIndex];
  while( childIndex > 0 && temp < array[parentIndex] ) {
    array[childIndex] = array[parentIndex];
    childIndex = parentIndex;
    parentIndex = parseInt((parentIndex - 1) / 2);
  }
  array[childIndex] = temp;
}

/**
 * 下沉
 * @description 对父节点进行下沉调整
 * @param {Array<number>} array 待调整堆 
 * @param {number} parentIndex 待下沉的父节点 
 * @param {number} length 堆有效大小 
 */
function downAdjust(array, parentIndex, length) {
  var temp = array[parentIndex];
  var childIndex = 2 * parentIndex + 1;

  while(childIndex < length) {
    // 如果有右孩，且右孩小于左孩，则定位到右孩
    if ( childIndex + 1 < length && array[childIndex+1] < array[childIndex] ) {
      childIndex++;
    }
    // 如果父节点小于任何一个孩子，则跳出
    if (temp <= array[childIndex]) break;

    array[parentIndex] = array[childIndex];
    parentIndex = childIndex;
    childIndex = 2 * childIndex + 1;
  }
  array[parentIndex] = temp;
}
/**
 * 构建堆
 * @description 从最后一个子树节点进行下沉调整遍历
 * @param {Array<number>} array 待调整堆
 */
function buildHeap(array) {
  for(var i = parseInt((array.length - 2)/2); i>=0; i--) {
    downAdjust(array, i, array.length);
  }
}

export default function testFunc() {
  console.log(utils.getLine('3.3.3 二叉堆的代码实现'));
  const arrUp = [1,3,2,6,5,7,8,9,10,0];
  console.log("上浮前：",arrUp.toString());
  upAdjust(arrUp);
  console.log("上浮后：",arrUp.toString());
  console.log('')
  const arrDown = [7,1,3,10,5,2,8,9,6];
  console.log("下沉前：",arrDown.toString());
  buildHeap(arrDown);
  console.log("下沉后：",arrDown.toString());
}
