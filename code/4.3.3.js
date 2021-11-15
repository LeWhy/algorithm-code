import utils from '../utils/index.js';

/**
 * 冒泡排序 bubble sort
 * @param {Array<number>} 待排列数组
 */
function bubbleSort(array) {
  var count = 0;
  var countWhile = 0
  for (var i = 0; i < array.length - 1; i++) {
    countWhile++;
    for (var j = 0; j < array.length - i - 1; j++) {
      countWhile++;
      var tmp = 0
      if (array[j] > array[j + 1]) {
        count++;
        tmp = array[j];
        array[j] = array[j+1];
        array[j+1] = tmp;
      }
    }
  }
  console.log('冒泡排序 循环次数：', countWhile++);
  console.log('冒泡排序 交换次数：', count);
}


// 用于统计进入循环判断的次数
var count = 0;
var countWhile = 0;
/**
 * 快速排序
 * @param {Array<number>} array 待处理数组
 * @param {number} startIndex   起始角标
 * @param {number} endIndex     结束角标
 */
function quickSort(array, startIndex, endIndex) {
  // 当startIndex大于endIndex的时候，递归方法结束
  if (startIndex >= endIndex) {
    return;
  }
  // 获得基准元素位置
  var pivotIndex = partition(array, startIndex, endIndex);
  // 更具基准元素，分成两部分进行递归
  quickSort(array, startIndex, pivotIndex - 1);
  quickSort(array, pivotIndex + 1, endIndex);
}
/**
 * 分治（双边循环法）
 * @param {Array<number>} array 待处理数组
 * @param {number} startIndex   起始角标
 * @param {number} endIndex     结束角标
 */
function partition(array, startIndex, endIndex) {
  // 基准元素可以选择第一个也可以随机选取
  var pivot = array[startIndex];
  var left = startIndex;
  var right = endIndex;

  while (left !== right) {
    countWhile++;
    // 从右边开始轮询，当值比基准值小时候停住
    while (left < right && array[right] > pivot) {
      countWhile++;
      right--;
    }
    // 当右边停住，开始从左边开始轮询，当值比基准值大时候停住
    while (left < right && array[left] <= pivot) {
      countWhile++;
      left++;
    }
    // 当两端值满足上述条件，进行交换
    if (left < right) {
      count++;
      var p = array[left];
      array[left] = array[right];
      array[right] = p
    }
  }

  // 最后将基准值和轮询中央值进行交互
  array[startIndex] = array[left];
  array[left] = pivot;
  // 返回最后基准值的角标
  return left;
}

export default function testFunc() {
  console.log(utils.getLine('4.3.3 快速排序 双边循环'));
  var array = [4, 4, 6, 5, 3, 2, 8, 1];
  console.log('排序前：', array.toString());
  bubbleSort(array);
  console.log('排序后：', array.toString());
  console.log('');
  array = [4, 4, 6, 5, 3, 2, 8, 1];
  console.log('排序前：', array.toString());
  quickSort(array, 0, array.length - 1);
  console.log('快速排序 循环次数：', countWhile++);
  console.log('快速排序 交换次数：', count);
  console.log('排序后：', array.toString());
}