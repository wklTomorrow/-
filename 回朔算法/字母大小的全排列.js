/**
 * https://leetcode-cn.com/problems/letter-case-permutation/
 * 示例：
 * 输入：S = "a1b2"
 * 输出：["a1b2", "a1B2", "A1b2", "A1B2"]
 * 
 * 输入：S = "3z4"
 * 输出：["3z4", "3Z4"]
 * 
 * 输入：S = "12345"
 * 输出：["12345"]
 */

const combine = str => {
    const result = []
    function dfs(cur, num) {
        if (cur.length === str.length) {
            return result.push(cur)
        }
        if (/[a-zA-Z]/.test(str[num])) {
            const upper = str[num].toUpperCase()
            const lower = str[num].toLowerCase()
            dfs(cur + upper, num + 1)
            dfs(cur + lower, num + 1)
        } else {
            dfs(cur + str[num], num + 1)
        }
    }
    dfs('', 0)
}