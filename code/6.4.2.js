import utils from '../utils/index.js';

var MAZE = [
  [0, 0, 0, 0, 0, 0, 0],
  [0, 0, 0, 1, 0, 0, 0],
  [0, 0, 0, 1, 0, 0, 0],
  [0, 0, 0, 1, 0, 0, 0],
  [0, 0, 0, 0, 0, 0, 0],
]

class Grid {
  x;
  y;
  f = 0;
  g = 0;
  h = 0;
  parent;

  constructor(x, y) {
    this.x = x;
    this.y = y;
  }

  initGrid(parent, end) {
    this.parent = parent;
    if (parent) {
      this.g = parent.g + 1;
    } else {
      this.g = 1;
    }
    this.h = Math.abs(this.x - end.x) + Math.abs(this.y - end.y);
    this.f = this.g + this.h;
  }
}

function findMinGirdIndex(openList) {
  var tempGridIndex = 0;
  for (var i = 1; i < openList.length; i++) {
    if (openList[i].f < openList[tempGridIndex].f) {
      tempGridIndex = i;
    }
  }
  return tempGridIndex;
}

function containGrid(grids, x, y) {
  for (var i = 0; i < grids.length; i++) {
    if (grids[i].x === x && grids[i].y === y) {
      return true;
    }
  }
  return false;
}

function isValidGrid(x, y, openList, closeList) {
  // 是否超出边界
  if (
    x < 0 || x >= MAZE.length ||
    y < 0 || y >= MAZE[0].length
  ) {
    return false;
  }
  // 是否是障碍物
  if (MAZE[x][y] === 1) {
    return false;
  }
  // 是否在openList中
  if (containGrid(openList, x, y)) {
    return false;
  }
  // 是否在closeList中
  if (containGrid(closeList, x, y)) {
    return false;
  }
  return true;
}

function findNeighbors(grid, openList, closeList) {
  var gridList = [];
  // 找四个方向
  if (isValidGrid(grid.x, grid.y - 1, openList, closeList)) {
    gridList.push(new Grid(grid.x, grid.y - 1));
  }
  if (isValidGrid(grid.x, grid.y + 1, openList, closeList)) {
    gridList.push(new Grid(grid.x, grid.y + 1));
  }
  if (isValidGrid(grid.x - 1, grid.y, openList, closeList)) {
    gridList.push(new Grid(grid.x - 1, grid.y));
  }
  if (isValidGrid(grid.x + 1, grid.y, openList, closeList)) {
    gridList.push(new Grid(grid.x + 1, grid.y));
  }
  return gridList;
}

function aStarSearch(start, end) {
  var openList = [];
  var closeList = [];
  // 起点加入openList
  openList.push(start);
  // 主循环，每一轮检查一个当前方格节点
  while (openList.length > 0) {
    // 在openList中寻找f最小的节点，将其作为当前方格节点
    var index = findMinGirdIndex(openList);
    // 将当前方格从openList中移除
    var currentGrid = openList.splice(index, 1)[0];
    // 放入closeList中
    closeList.push(currentGrid);
    // 寻找所有邻近节点
    var neighbors = findNeighbors(currentGrid, openList, closeList);
    for (var i = 0; i < neighbors.length; i++) {
      var grid = neighbors[i];
      if (!openList.includes(grid)) {
        grid.initGrid(currentGrid, end);
        openList.push(grid);
      }
    }
    // 如果终点在openlist中，则直接返回重点各自
    for (i = 0; i < neighbors.length; i++) {
      var grid = neighbors[i];
      if ((grid.x === end.x) && (grid.y === end.y)) {
        return grid;
      }
    }
  }
  //openList用尽，仍然找不到终点，说明终点不可到达，返回空
  return null;
}

export default function testFunc() {
  console.log(utils.getLine('6.4.2 A星寻路算法'));
  var startGrid = new Grid(2, 1);
  var endGrid = new Grid(2, 5);
  var resultGrid = aStarSearch(startGrid, endGrid);
  // 回溯路径
  var path = [];
  while (resultGrid) {
    path.push(new Grid(resultGrid.x, resultGrid.y));
    resultGrid = resultGrid.parent;
  }
  // 输出路径
  for (var i = 0; i < MAZE.length; i++) {
    var str = '';
    for (var j = 0; j < MAZE[i].length; j++) {
      if (containGrid(path, i, j)) {
        str += '*,';
      } else {
        str += MAZE[i][j] + ',';
      }
    }
    console.log(str);
  }
}