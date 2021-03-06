/*
 * @Author: jiaxinying
 * @Date: 2021-01-20 17:06:49
 * @Last Modified by: jiaxinying
 * @Last Modified time: 2021-01-20 17:10:19
 * 设置页面基准
 */
// 设置基准大小
const baseSize = 32
// 设置rem 函数
function setRem () {
  // 当前页面宽度相对于750 款的缩放比例，可根据自己需要修改
  const scale = document.documentElement.clientWidth / 750
  // 设置页面根节点字体大小
  document.documentElement.style.fontSize = baseSize * Math.min(scale, 2) + 'px'

}

// 初始化
setRem()

// 改变窗口大小时重新设置rem
window.onresize = function () {
  setRem()
}
