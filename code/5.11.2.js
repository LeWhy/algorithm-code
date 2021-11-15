import utils from '../utils/index.js';

/**
 * 普通版
 * @param {number} w 工人数量
 * @param {number} n 可选金矿数量
 * @param {Array<number>} p 金矿开采所需工人数量
 * @param {Array<number>} g 金矿储备
 */
function getBestGoldMining(w, n, p, g) {
  if (w === 0 || n === 0) {
    return 0;
  }
  if (w < p[n - 1]) {
    return getBestGoldMining(w, n - 1, p, g);
  }
  return Math.max(
    getBestGoldMining(w, n - 1, p, g),
    getBestGoldMining(w - p[n - 1], n - 1, p, g) + g[n - 1]
  )
}

/**
 * 时间复杂度优化版
 * @param {number} w 工人数量
 * @param {Array<number>} p 金矿开采所需工人数量
 * @param {Array<number>} g 金矿储备
 */
function getBestGoldMiningV2(w, p, g) {
  var resultTable = [[]];
  // 建立二维表格
  for (var i = 1; i <= g.length; i++) {
    // 初始化元素数组
    if (!resultTable[i]) {
      resultTable[i] = [];
    }
    for (var j = 1; j <= w; j++) {
      if (j < p[i - 1]) {
        // 判0是因为js数组申明时候不会给予默认值
        resultTable[i][j] = resultTable[i - 1][j] || 0;
      } else {
        resultTable[i][j] = Math.max(
          (resultTable[i - 1][j] || 0),
          (resultTable[i - 1][j - p[i - 1]]  || 0) + g[i - 1]
        )
      }
    }
  }
  return resultTable[g.length][w];
}

/**
 * 时间复杂度 + 空间复杂度优化版
 * @param {number} w 工人数量
 * @param {Array<number>} p 金矿开采所需工人数量
 * @param {Array<number>} g 金矿储备
 */
function getBestGoldMiningV3(w, p, g) {
  var resultTable = [[]];
  // 建立二维表格
  for (var i = 1; i <= g.length; i++) {
    // 初始化元素数组
    if (!resultTable[i]) {
      resultTable[i] = [];
    }
    for (var j = w; j >= 1; j--) {
      if (j >= p[i - 1]) {
        resultTable[j] = Math.max(
          (resultTable[j] || 0),
          (resultTable[j - p[i - 1]]  || 0) + g[i - 1],
        )
      }
    }
  }
  return resultTable[w];
}

export default function testFunc() {
  console.log(utils.getLine('5.11.2 求解金矿问题 解题思路'));
  var w = 10;
  var p = [5, 5, 3, 4, 3];
  var g = [400, 500, 200, 300 ,350];
  console.log("最佳收益v1:", getBestGoldMining(w, g.length, p, g));
  console.log("最佳收益v2:", getBestGoldMiningV2(w, p, g));
  console.log("最佳收益v3:", getBestGoldMiningV3(w, p, g));
}