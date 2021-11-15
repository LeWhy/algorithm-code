import utils from '../utils/index.js';

/**
 * 桶排序
 * @param {Array<number>} 待排列数组
 */
function bucketSort(array) {
  // 获取最大值和最小值
  var min = array[0];
  var max = array[0];
  for (var i = 0; i < array.length; i++) {
    if (array[i] > max) {
      max = array[i];
    }
    if (array[i] < min) {
      min = array[i];
    }
  }
  // 获取差值
  var d = max - min;
  // 初始化桶
  var bucketNum = array.length;
  var bucketList = [];
  for (i = 0; i < bucketNum; i++) {
    // 数组多长就初始化多少的桶子
    bucketList.push([]);
  }
  // 遍历数组将对应元素放入桶中
  for (i = 0; i < array.length; i++){
    // 其间距为：区间跨度 = (最大值-最小值) / (桶的数量 - 1)
    // 所以 (数值 - 最小值) / (最大值-最小值) * (桶的数量 - 1) 就是获得值所在区间的桶角标
    var num = parseInt((array[i] - min) * (bucketNum - 1) / d);
    bucketList[num].push(array[i]);
  }
  // 对每个桶进行排序
  for (i = 0; i < bucketList.length; i++){
    // JavaScript自带sort方法，默认从小到大排序
    // 想从大到小就输入函数：function(a, b){ return b - a; }
    bucketList[i].sort();
  }
  // 将所有数组拼接
  var sortedArray = bucketList.reduce((a, b) => a.concat(b));
  return sortedArray;
}

export default function testFunc() {
  console.log(utils.getLine('4.5.4 桶排序'));
  var array = [95, 94, 91, 98, 99, 90, 99, 93, 91, 92];
  console.log('排序前：', array.toString());
  var newArray = bucketSort(array);
  console.log('排序后：', newArray.toString());
}