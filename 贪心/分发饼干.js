/**
 * 输入: g = [1,2], s = [1,2,3]
 * 输出: 2
 * 解释: 
 * 你有两个孩子和三块小饼干，2个孩子的胃口值分别是1,2。
 * 你拥有的饼干数量和尺寸都足以让所有孩子满足。
 * 所以你应该输出2.
 * 链接：https://leetcode-cn.com/problems/assign-cookies
 */

const findChild = (g, s) => {
    g = g.sort((a, b) => a - b)
    s = s.sort((a, b) => a - b)
    let gIndex = 0, sIndex = 0, count = 0
    while(g.length && s.length) {
        while (g[gIndex] > s[sIndex] &&  sIndex < s.length) {
            sIndex ++
        }
        if (sIndex < s.length) {
            count ++
            gIndex ++
            sIndex ++
        }
    }
    return count
}