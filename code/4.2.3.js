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
 * 鸡尾酒排序
 * @description 其原理是：进行左右摇摆排序，如第一轮左到右，二轮右到左，第三轮左到右，以此类推
 * @param {Array<number>} array 待排列数组
 */
function cocktailSort(array) {
  var tmp = 0;
  var count = 0;
  for(var i = 0;i < parseInt(array.length / 2);i++) {
    count++;
    var isSorted = true;
    // 奇数轮 从左向右比较
    for(var j = i;j < array.length - i - 1;j++) {
      count++;
      if (array[j] > array[j+1]) {
        tmp = array[j];
        array[j] = array[j+1];
        array[j+1] = tmp;
        isSorted = false;
      }
    }
    if (isSorted) break;
    // 偶数轮之前充值isSorted
    isSorted = true;
    // 偶数轮，从右向左比较
    for(var k = array.length - i - 1;k > i;k--) {
      count++;
      if(array[k] < array[k-1]) {
        tmp = array[k];
        array[k] = array[k-1];
        array[k-1] = tmp;
        isSorted = false;
      }
    }
    if (isSorted) break;
  }
  console.log('鸡尾酒排序 循环次数：', count);
}


export default function testFunc() {
  console.log(utils.getLine('4.2.3 鸡尾酒排序'));
  var bubble = [2,3,4,5,6,7,8,1];
  console.log('排序前：',bubble.toString());
  bubbleSort(bubble);
  console.log('排序后：',bubble.toString());
  console.log('');
  var cocktail = [2,3,4,5,6,7,8,1];
  console.log('排序前：',cocktail.toString());
  cocktailSort(cocktail);
  console.log('排序后：',cocktail.toString());
}