import utils from '../utils/index.js';

/**
 * 其基本逻辑是把数拆分成多个部分进行计算
 * 其实es2019特性方案已经提供了新类型bigint用于js中大整型计算
 * @param {string} bigNumberA 
 * @param {string} bigNumberB 
 */
function bigNumberSum(bigNumberA, bigNumberB) {
  var sum = [];
  var length = bigNumberA.length > bigNumberB.length ? bigNumberA.length : bigNumberB.length;
  var aArray = bigNumberA.split('').reverse();
  var bArray = bigNumberB.split('').reverse();
  for (var i = 0; i < length; i++) {
    var indexSum = sum[i] || 0;
    aArray[i] && (indexSum += Number(aArray[i]));
    bArray[i] && (indexSum += Number(bArray[i]));
    if (indexSum >= 10) {
      indexSum -= 10;
      sum[i + 1] = 1;
    }
    sum[i] = indexSum;
  }
  // 由于js的数组声明时候无需声明长度，即动态的
  // 所以对比书本中无需考虑清楚0的问题，只需要反过来即可
  return sum.reverse().join('');
}

export default function testFunc() {
  console.log(utils.getLine('5.10.2 如何实现大整数相加 解题思路'));
  console.log(bigNumberSum("426709752318", "95481253129"));
}