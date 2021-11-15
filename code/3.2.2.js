import utils from '../utils/index.js';

// 深度优先遍历
/**
 * 构建二叉树
 * @description 将数组转换成二叉树
 * @param {Array<number>} arary 输入的列表
 */
function createBinaryTree(arary) {
  var node = null;
  if (!arary || arary.length === 0) {
    return node;
  }
  // 取出第一个
  var data = arary.shift();
  if (data !== null && data !== undefined) {
    node = { data };
    node.leftChild = createBinaryTree(arary);
    node.rightChild = createBinaryTree(arary);
  }
  return node;
}

/**
 * 前序遍历
 * @description 二叉数的前序遍历
 * @param {object} node 二叉树节点
 */
function preOrderTraveral(node) {
  if (node === null || node === undefined) {
    return;
  }
  console.log(node.data);
  preOrderTraveral(node.leftChild);
  preOrderTraveral(node.rightChild);
}

/**
 * 中序遍历
 * @description 二叉数的中序遍历
 * @param {object} node 二叉树节点
 */
 function inOrderTraveral(node) {
  if (node === null || node === undefined) {
    return;
  }
  inOrderTraveral(node.leftChild);
  console.log(node.data);
  inOrderTraveral(node.rightChild);
}

/**
 * 后序遍历
 * @description 二叉数的后序遍历
 * @param {object} node 二叉树节点
 */
 function postOrderTraveral(node) {
  if (node === null || node === undefined) {
    return;
  }
  postOrderTraveral(node.leftChild);
  postOrderTraveral(node.rightChild);
  console.log(node.data);
}

export default function testFunc() {
  console.log(utils.getLine('3.2.2 深度优先遍历'));
  var array = [3,2,9,null,null,10,null,null,8,null,4];
  var treeNode = createBinaryTree(array);
  console.log('node:', treeNode);
  console.log(" 前序遍历：");
  preOrderTraveral(treeNode);
  console.log(" 中序遍历：");
  inOrderTraveral(treeNode);
  console.log(" 后序遍历：");
  postOrderTraveral(treeNode);

}
