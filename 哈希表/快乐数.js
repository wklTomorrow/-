/**
 * https://leetcode-cn.com/problems/happy-number/
 * 输入：n = 19
 * 输出：true
 * 解释：
 * 12 + 92 = 82
 * 82 + 22 = 68
 * 62 + 82 = 100
 * 12 + 02 + 02 = 1
 */

const isHappy = str => {
    const map = {}
    while (str !== 1) {
        if (map[str]) {
            return false
        }
        map[str] = str
        str = str.split('').reduce((a, b) => a ** 2 + b ** 2)
    }
    return true
}