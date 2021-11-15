import utils from '../utils/index.js';

function removeKDigits(number, k) {
  var numberNew = number + '';
  for (var i = 0; i < k; i++) {
    var hasCut = false;
    // 从左向右遍历，遇到左侧数字比右侧大时候，进行删除
    for (var j = 0; j < numberNew.length; j++) {
      // js字符串可以直接比对，无需转换成数字
      if (numberNew[j] > numberNew[j + 1]) {
        numberNew = numberNew.substr(0, j) + numberNew.substr(j + 1, numberNew.length);
        hasCut = true;
        break;
      }
    }
    if (!hasCut) {
      numberNew = numberNew.substr(0, numberNew.length - 1);
    }
    // 清除左侧数字的0
    numberNew = removeZero(numberNew);
  }

  if (numberNew.length === 0) return '0';
  return numberNew;
}

function removeZero(number) {
  var numberStr = number;
  for (var i = 0; i < numberStr.length - 1; i++) {
    if (numberStr[0] !== '0') {
      break;
    }
    numberStr = numberStr.substr(1, numberStr.length);
  }
  return numberStr;
}

function removeKDigitsV2(number, k) {
  var numberNew = number + '';
  var stack = [];
  var top = 0;
  for (var i = 0; i < numberNew.length; i++) {
    var num = numberNew[i];
    // 遍历栈顶数字，当大于遍历到的数字时候，出栈
    while (top > 0 && stack[top - 1] > num && k > 0) {
      top -= 1;
      k -= 1
    }
    // 入栈
    stack[top++] = num;
  }
  // 去0
  while (stack.length > 0 && stack[0] === '0') {
    stack.shift();
  }
  return stack.length > 0 ? stack.join('') : '0';
}

export default function testFunc() {
  console.log(utils.getLine('5.9.2 删除K个数字后的最小值 解题思路'));
  console.log('方法1')
  console.log(removeKDigits("1593212", 3));
  console.log(removeKDigits("30200", 1));
  console.log(removeKDigits("10", 2));
  console.log(removeKDigits("541270936", 3));
  console.log('方法2')
  console.log(removeKDigitsV2("1593212", 3));
  console.log(removeKDigitsV2("30200", 1));
  console.log(removeKDigitsV2("10", 2));
  console.log(removeKDigitsV2("541270936", 3));
}