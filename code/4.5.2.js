import utils from '../utils/index.js';

/**
 * 计数排序
 * @param {Array<number>} array 
 */
function countSort(array) {
  // java中由于数组使用需要声明长度，而JavaScript不用，所以此此步骤省略
  // var max = array.reduce(function(a, b){
  //   return a > b ? a : b;
  // });
  var countArray = [];
  for(var i = 0;i < array.length;i++) {
    // 由于JavaScript的数组没有类型所以要做类型判断
    if (typeof countArray[array[i]] === 'number') {
      countArray[array[i]]++;
    } else {
      countArray[array[i]] = 1;
    }
  }
  // 进行转换
  var sortArray = [];
  for(var j = 0;j < countArray.length;j++) {
    // 由于JavaScript的数组没有类型所以要做类型判断
    var count = typeof countArray[j] === 'number' ? countArray[j]:0;
    for(var k = 0;k < count; k++) {
      sortArray.push(j);
    }
  }
  return sortArray;
}

export default function testFunc() {
  console.log(utils.getLine('4.5.2 计数排序'));
  var array = [4,4,6,5,3,2,8,1,7,5,6,0,10];
  console.log('排序前：', array.toString());
  var newArray = countSort(array);
  console.log('排序后：', newArray.toString());
}