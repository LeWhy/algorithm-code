import utils from '../utils/index.js';

function findNearestNumber(numbers) {
  // 从后向前查找逆序区域，找到逆序区域的第一位，数字置换的边界
  var index = findTransferPoint(numbers);
  // 如果置换边界是0，说明数字已经全逆序，已是组合排列里最大值，则没有下一个数
  if (index === 0) return null;
  // 将逆序区域的前一位和逆序区域中刚刚比它大的数字进行位置交换
  var numbersCopy = JSON.parse(JSON.stringify(numbers));
  exchangeHead(numbersCopy, index);
  // 把原来的逆序区转为顺序区
  reverse(numbersCopy, index);
  return numbersCopy;
}

function findTransferPoint(numbers) {
  for (var i = numbers.length - 1; i > 0; i--) {
    if (numbers[i] > numbers[i - 1]) {
      return i;
    }
  }
  return 0;
}

function exchangeHead(numbers, index) {
  var head = numbers[index - 1];
  for (var i = numbers.length; i > 0; i--) {
    if (numbers[i] > head) {
      numbers[index - 1] = numbers[i];
      numbers[i] = head;
      break;
    } 
  }
  return numbers;
}

function reverse(numbers, index) {
  for (var i = index, j = numbers.length - 1; i < j; i++, j--) {
    var temp = numbers[i];
    numbers[i] = numbers[j];
    numbers[j] = temp;
  }
  return numbers;
}

// 输出数字
function outputNumbers(numbers) {
  var str = '';
  for (var i = 0; i < numbers.length; i++) {
    str += numbers[i];
  }
  console.log(str);
}

// 其解法也被称为：字典序算法
export default function testFunc() {
  console.log(utils.getLine('5.8.2 寻找全排列的下一个数 解题思路'));
  var numbers = [1, 3, 2, 4, 5];
  for (var i = 0; i < 10; i++) {
    numbers = findNearestNumber(numbers);
    outputNumbers(numbers);
  }
}