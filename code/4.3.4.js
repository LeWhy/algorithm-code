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
 * 分治（单边循环法）
 * @param {Array<number>} array 待处理数组
 * @param {number} startIndex   起始角标
 * @param {number} endIndex     结束角标
 */
function partition(array, startIndex, endIndex) {
  // 基准元素可以选择第一个也可以随机选取
  var pivot = array[startIndex];
  var mark = startIndex;

  for (var i = startIndex + 1; i <= endIndex; i++) {
    countWhile++;
    if (array[i] < pivot) {
      count++;
      // 当值小于标准值，则mark进1后与其i对应角标的值互换
      mark++;
      var tmp = array[i];
      array[i] = array[mark];
      array[mark] = tmp;
    }
  }
  // 标准值与mark标记值互换
  array[startIndex] = array[mark];
  array[mark] = pivot;
  // 返回标准值左边
  return mark;
}


export default function testFunc() {
  console.log(utils.getLine('4.3.4 快速排序 单边循环'));
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

