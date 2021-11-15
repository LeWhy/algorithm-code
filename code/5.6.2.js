import utils from '../utils/index.js';

/**
 * 使用桶排列来确定最大差值
 * @param {Array<number>} array 
 */
function getMaxSortedDistance(array) {
  // 找出最大值和最小值差值
  var min = array[0];
  var max = array[0];
  for (var i = 1; i < array.length; i++) {
    if (array[i] < min) min = array[i];
    if (array[i] > max) max = array[i];
  }
  var d = max - min;
  // 如果差值为0，则所有元素相等
  if (d === 0) return d;
  // 初始化桶
  var bucketNum = array.length;
  var bucketList = [];
  for (i = 0; i < bucketNum; i++) {
    // 无需排序，只需保留最大值和最小值
    bucketList.push({ min: null, max: null });
  }
  // 遍历元素
  for (i = 0; i < array.length; i++) {
    // 由于 区间为：(最大值 - 最小值) / (桶数量 - 1)
    // 所以每个数对应桶子角标就为：((数值 - 最小值)/(最大值 - 最小值)) * (桶数量 - 1) 的值取整
    var num = parseInt(((array[i] - min) / d) * (bucketNum - 1));
    // 判断最小值
    if (
      bucketList[num].min === null ||
      bucketList[num].min > array[i]
    ) {
      bucketList[num].min = array[i];
    }
    // 判断最大值
    if (
      bucketList[num].max === null ||
      bucketList[num].max < array[i]
    ) {
      bucketList[num].max = array[i];
    }
  }
  // 遍历所有桶子的最小值和最大值，求出差值
  var diff = 0;
  var leftMax = bucketList[0].max;
  for (i = 1; i < bucketList.length; i++) {
    if (bucketList[i].min === null) {
      continue;
    }
    if (bucketList[i].min - leftMax > diff) {
      diff = bucketList[i].min - leftMax;
    }
    leftMax = bucketList[i].max;
  }
  return diff;
}

export default function testFunc() {
  console.log(utils.getLine('5.6.2 无序数组排序后的最大领差 解题思路'));
  var array = [2, 6, 3, 4, 5, 10, 9];
  console.log(getMaxSortedDistance(array));
}