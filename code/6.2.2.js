import utils from '../utils/index.js';

class BitMap {
  words;
  size;

  constructor(size) {
    this.size = size;
    this.words = [];
  }

  /**
  * 判断Bitmap某一位的状态
  * @param {number} bitIndex 位图的第bitIndex位
  */
  getBit(bitIndex) {
    if (bitIndex < 0 || bitIndex > this.size - 1) {
      throw "超过Bitmap有效范围";
    }
    var wordIndex = this.getWordIndex(bitIndex);
    return (this.words[wordIndex] & (1 << bitIndex)) != 0;
  }

  /**
   * 把Bitmap某一位设置为true
   * @param {number} bitIndex 位图的第bitIndex位
   */
  setBit(bitIndex) {
    if (bitIndex < 0 || bitIndex > this.size - 1) {
      throw " 超过Bitmap有效范围";
    }
    var wordIndex = this.getWordIndex(bitIndex);
    this.words[wordIndex] |= (1 << bitIndex);
  }
    
  /**
   * 定位Bitmap某一位所对应的word
   * @param {number} bitIndex 位图的第bitIndex位
   */
  getWordIndex(bitIndex) {
    return bitIndex >> 6;
  }
}

export default function testFunc() {
  console.log(utils.getLine('6.2.2 BitMap巧用'));
  var bitMap = new BitMap(128);
  bitMap.setBit(126);
  bitMap.setBit(75);
  console.log(bitMap.getBit(126));
  console.log(bitMap.getBit(78));
}