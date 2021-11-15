import utils from '../utils/index.js';

/**
 * 冒泡排序 bubble sort
 * @param {Array<number>} 待排列数组
 */
function bubbleSort(array) {
  for(var i =0;i < array.length - 1;i++) {
    for(var j =0;j < array.length - i - 1;j++) {
      var tmp = 0
      if (array[j] > array[j + 1]) {
        tmp = array[j];
        array[j] = array[j+1];
        array[j+1] = tmp;
      }
    }
  }
}

export default function testFunc() {
  console.log(utils.getLine('4.2.1 冒泡排序'));
  var array = [5,8,6,3,9,2,1,7];
  console.log('排序前：',array.toString());
  bubbleSort(array);
  console.log('排序后：',array.toString());
}