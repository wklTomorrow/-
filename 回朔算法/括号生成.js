/**
 * https://leetcode-cn.com/problems/generate-parentheses/
 * 输入：n = 3
 * 输出：["((()))","(()())","(())()","()(())","()()()"]
 */

const combine = num => {
    const generate = ['(', ')']
    const result = []
    function dfs(left, right, str) {
        // 左括号必须大于右括号
        if (left < right) {
            return
        }
        if (left > num || right > num) {
            return
        }
        if (left + right === 2 * num) {
            return result.push(str)
        }
        for (let i = 0; i < 2; i++) {
            if (i === 0) {
                dfs(left + 1, right, str + generate[i])
            } else {
                dfs(left, right + 1, str + generate[i])
            }
        }
    }
    // 左括号先进
    dfs(1, 0, '(')
    return result
}

console.log(combine(3))