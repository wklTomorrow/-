/**
 * 
 * 输入：m = 3, n = 7
 * 输出：28
 * 示例 2：
 * 输入：m = 3, n = 2
 * 输出：3
 * 不同路径问题
 * dp[i][j] = dp[i - 1][j] + dp[i][j - 1]
 */

const getPaths = (m, n) => {
    const arr = Array.from(m, () => Array.from(n, () => 0))
    for (let i = 0; i < m; i++) {
        for (let j = 0; i < n; j++) {
            if (i == 0 || j == 0) {
                arr[i][j] = 1
            } else {
                arr[i][j] = arr[i - 1][j] + arr[i][j - 1]
            }
        }
    }
    return arr[i - 1][j - 1]
}