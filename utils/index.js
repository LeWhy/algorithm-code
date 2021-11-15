/**
 * 获取标题分割线
 * @param {string} title 标题
 * @returns 分割线字符串
 */
function getLine(title) {
  return '--------------------'+title+'--------------------';
};

/**
 * 输出章节代码结构
 * @param {object} code 代码运行块的集合
 * @param {string} key 章节号
 */
function consoleSection(code, key) {
  Object.keys(code).forEach(k => {
    if (key) {
      if(k.indexOf(key) === 0) code[k]?.();
    } else {
      code[k]?.();
    }
  });
}

export default {
  getLine,
  consoleSection,
}
