import utils from '../utils/index.js';

/**
 * 其原理就是每一次抢红包，其范围都限制在
 * [0.01 - (人均红包数额) * 2]
 * @param {number} totalAmount 总金额（以分为单位）
 * @param {number} totalPeopleNum 总人数
 */
function divideRedPackage(totalAmount, totalPeopleNum) {
  var amountList = [];
  var restAmount = totalAmount;
  var restPeopleNum = totalPeopleNum;
  for (var i = 0; i < totalPeopleNum - 1; i++) {
    var amount = parseInt(Math.random() * ((restAmount / restPeopleNum) * 2 - 1)) + 1;
    restAmount -= amount;
    restPeopleNum--;
    amountList.push(amount);
  }
  amountList.push(restAmount);
  return amountList;
}

export default function testFunc() {
  console.log(utils.getLine('6.5.2 实现红包算法'));
  var amountList = divideRedPackage(1000, 10);
  console.log("各个红包金额（ 分 为单位）", amountList);
}