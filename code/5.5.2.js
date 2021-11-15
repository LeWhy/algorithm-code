import utils from '../utils/index.js';

function isPowerOfTwo(num) {
  return (num & (num - 1)) === 0;
}

export default function testFunc() {
  console.log(utils.getLine('5.5.2 是否为2的整数次幂'));
  console.log('2',isPowerOfTwo(2));
  console.log('16',isPowerOfTwo(16));
  console.log('64',isPowerOfTwo(64));
  console.log('100',isPowerOfTwo(100));
}