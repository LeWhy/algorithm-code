import utils from '../utils/index.js';

/**
 * 计数排序
 * @param {Array<number>} 待排列数组
 */
function countSort(array) {
  // 寻找出最小值
  var min = array.reduce((a, b) => a < b ? a : b);
  // Java中这里还需要找出最大值，然后根据差值去创建对应长度的数组
  // 但在JavaScript中并不需要如此
  // 创建数组并进行计数统计
  var countArray = [];
  for (var i = 0; i < array.length; i++) {
    typeof countArray[array[i] - min] === 'number' ?
      countArray[array[i] - min]++ :
      countArray[array[i] - min] = 1;
  }
  // 统计数组变形，每个角标对应的值为前面角标值的合
  for (var j = 1; j < countArray.length; j++) {
    // 由于JavaScript的数组并不会给默认值所以需要判断一下角标对应的值是不是合法的
    if (typeof countArray[j] !== 'number') {
      countArray[j] = 0;
    }
    if (typeof countArray[j-1] !== 'number') {
      countArray[j - 1] = 0;
    }
    countArray[j] += countArray[j - 1];
  }
  // 倒序输出数组
  var sortedArray = [];
  for (var k = array.length - 1; k >= 0; k--) {
    sortedArray[countArray[array[k] - min] - 1] = array[k];
    countArray[array[k] - min]--;
  }
  return sortedArray;
}

export default function testFunc() {
  console.log(utils.getLine('4.5.3 计数排序优化'));
  var array = [95, 94, 91, 98, 99, 90, 99, 93, 91, 92];
  console.log('排序前：', array.toString());
  var newArray = countSort(array);
  console.log('排序后：', newArray.toString());
}