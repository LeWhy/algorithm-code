import utils from '../utils/index.js';

// 广度优先遍历
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
 * 二叉树层序遍历
 * @description 借助队列对二叉树进行广度优先遍历
 * @param {object} node 二叉树的节点
 */
function levelOrderTraversal(node) {
  var queue = [];
  queue.push(node);
  while(queue.length > 0) {
    var node = queue.shift();
    console.log(node.data);
    if (node.leftChild) queue.push(node.leftChild);
    if (node.rightChild) queue.push(node.rightChild);
  }
}


export default function testFunc() {
  console.log(utils.getLine('3.2.3 广度优先遍历'));
  var array = [3,2,9,null,null,10,null,null,8,null,4];
  var treeNode = createBinaryTree(array);
  console.log('node:', treeNode);
  console.log("层序遍历：");
  levelOrderTraversal(treeNode);
}
