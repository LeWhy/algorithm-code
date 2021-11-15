import utils from '../utils/index.js';

/**
 * 寻找两个出现奇数次的整数
 * @param {Array<number>} array 目标数组
 */
function findLostNum(array) {
  var result = [0, 0];
  var xorResult = 0;
  for (var i = 0; i < array.length; i++) {
    xorResult ^= array[i];
  }
  // 如果结果为0，说明输入的数组不符合要求
  if (xorResult === 0) return null;
  // 确定两个整数的不懂位数
  var separator = 1;
  while (0 === (xorResult & separator)) {
    separator <<= 1;
  }
  // 第二次分组查找
  for (i = 0; i < array.length; i++) {
    if (0 === (array[i] & separator)) {
      result[0] ^= array[i];
    } else {
      result[1] ^= array[i];
    }
  }
  return result;
}

export default function testFunc() {
  console.log(utils.getLine('5.12.2 寻找缺失整数 拓展'));
  var array = [4, 1, 2, 2, 5, 1, 4, 3];
  var result = findLostNum(array);
  console.log(result);
}