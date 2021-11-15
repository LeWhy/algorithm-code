import utils from '../utils/index.js';

/**
 * 使用欧几里得算法（辗转相除法）
 * @param {number} a 
 * @param {number} b 
 * @returns 最大公约数
 */
function getGreatestCommonDivisorV2(a, b) {
  var big = a > b ? a : b;
  var small = a > b ? b : a;

  if (big % small === 0) {
    return small;
  }

  return getGreatestCommonDivisorV2(big % small, small);
}

/**
 * 更相相减法
 * @param {number} a 
 * @param {number} b 
 * @returns 最大公约数
 */
function getGreatestCommonDivisorV3(a, b) {
  if (a === b) {
    return a;
  }
  var big = a > b ? a : b;
  var small = a > b ? b : a;
  return getGreatestCommonDivisorV3(big - small, small);
}

/**
 * 整合了 辗转相除法 和 更相相减法 的求最公约数公式
 * @param {number} a 
 * @param {number} b 
 */
function gcd(a, b) {
  if (a === b) {
    return a;
  }
  if ((a & 1) === 0 && (b & 1) === 0) {
    return gcd(a >> 1, b >> 1) << 1;
  } else if ((a & 1) !== 0 && (b & 1) === 0) {
    return gcd(a, b >> 1)
  } else if ((a & 1) === 0 && (b & 1) !== 0) {
    return gcd(a >> 1, b)
  } else {
    var big, small;
    a > b ? (big = a, small = b):(big = b, small = a);
    return gcd(big - small, small);
  }

}

export default function testFunc() {
  console.log(utils.getLine('5.4.2 求最大公约数 解题思路'));
  console.log('辗转相除法');
  console.log(getGreatestCommonDivisorV2(25, 5));
  console.log(getGreatestCommonDivisorV2(100, 80));
  console.log(getGreatestCommonDivisorV2(27, 14));
  console.log('更相相减法');
  console.log(getGreatestCommonDivisorV3(25, 5));
  console.log(getGreatestCommonDivisorV3(100, 80));
  console.log(getGreatestCommonDivisorV3(27, 14));
  console.log('整合 辗转相除法 和 更相相减法')
  console.log(gcd(25, 5));
  console.log(gcd(100, 80));
  console.log(gcd(27, 14));
}
