import utils from '../utils/index.js';

/**
 * 冒泡排序 bubble sort
 * @param {Array<number>} 待排列数组
 */
function bubbleSort(array) {
  var count = 0;
  for(var i =0;i < array.length - 1;i++) {
    count++;
    for(var j =0;j < array.length - i - 1;j++) {
      count++;
      var tmp = 0
      if (array[j] > array[j + 1]) {
        tmp = array[j];
        array[j] = array[j+1];
        array[j+1] = tmp;
      }
    }
  }
  console.log('冒泡排序 循环次数：', count);
}

/**
 * 冒泡排序 优化
 * @param {Array<number>} 待排列数组
 */
function bubbleSortOpt(array) {
  var count = 0;
  for(var i =0;i < array.length - 1;i++) {
    count++;
    var isSorted = true;
    for(var j =0;j < array.length - i - 1;j++) {
      count++;
      var tmp = 0
      if (array[j] > array[j + 1]) {
        tmp = array[j];
        array[j] = array[j+1];
        array[j+1] = tmp;
        isSorted = false;
      }
    }
    // 这里判断的是：如果后续都不发生排列改变，其数组已经是有序数列，直接断开连接
    if (isSorted) break;
  }
  console.log('优化第一版 循环次数：', count);
}

/**
 * 冒泡排序 优化第二版
 * @param {Array<number>} 待排列数组
 */
 function bubbleSortOptPlus(array) {
  var count = 0;
  // 记录最后一次交换位置
  var lastExchangeIndex = 0;
  //无序数列的边界，每次比较只需要比到这里为止
  var sortBorder = array.length - 1;

  for(var i =0;i < array.length - 1;i++) {
    count++;
    var isSorted = true;
    // sortBorder 这里直接使用最后一个无序数列的角标，直接判断到这即可
    // 因为后续都是有序的，比较是无意义的
    for(var j =0;j < sortBorder;j++) {
      count++;
      var tmp = 0
      if (array[j] > array[j + 1]) {
        tmp = array[j];
        array[j] = array[j+1];
        array[j+1] = tmp;
        isSorted = false;
        // 更新为最后一次交换元素的位置
        lastExchangeIndex = j;
      }
    }
    sortBorder = lastExchangeIndex;
    if (isSorted) break;
  }
  console.log('优化第二版 循环次数：', count);
}

export default function testFunc() {
  console.log(utils.getLine('4.2.2 冒泡排序的优化'));
  var normal = [1,2,3,4,6,5,7,8];
  console.log('普通排序前：',normal.toString());
  bubbleSort(normal);
  console.log('普通排序后：',normal.toString());
  console.log('');
  var opt = [1,2,3,4,6,5,7,8];
  console.log('优化排序前：',opt.toString());
  bubbleSortOpt(opt);
  console.log('优化排序后：',opt.toString());
  console.log('');
  var plus = [1,2,3,4,6,5,7,8];
  console.log('超级优化排序前：',plus.toString());
  bubbleSortOptPlus(plus);
  console.log('超级优化排序后：',plus.toString());
}