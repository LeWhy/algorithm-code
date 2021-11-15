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
 * 快速排序 非递归
 * @param {Array<number>} array 待处理数组
 * @param {number} startIndex   起始角标
 * @param {number} endIndex     结束角标
 */
function quickSort(array, startIndex, endIndex) {
  // 创建一个数组来模拟递归的函数栈
  var quickSortStack = [];
  // 将起止角标以键值对形式入栈
  var rootParam = {
    "startIndex": startIndex,
    "endIndex": endIndex,
  };
  quickSortStack.push(rootParam);

  // 循环运行模拟函数栈，制止栈空
  while(quickSortStack.length > 0) {
    countWhile++;
    // 从栈顶输出起始角标
    var param = quickSortStack.pop();
    // 获得基准元素角标
    var pivotIndex = partition(array, param['startIndex'], param['endIndex']);
    // 根据基准将左边起始角标放入
    if (param['startIndex'] < pivotIndex - 1) {
      var leftParam = {
        "startIndex": param['startIndex'],
        "endIndex": pivotIndex - 1,
      };
      quickSortStack.push(leftParam);
    }
    // 根据基准将左边数组放入
    if (param['endIndex'] > pivotIndex + 1) {
      var rightParam = {
        "startIndex": pivotIndex + 1,
        "endIndex": param['endIndex'],
      };
      quickSortStack.push(rightParam);
    }
  }
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
  console.log(utils.getLine('4.3.5 快速排序 非递归实现'));
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
