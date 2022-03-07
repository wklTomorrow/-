/**
 * 经典动态规划
 * dp[i] = dp[i - 1] + dp[i - 2]
 */
const getNum = n => {
    const dp = Array.from({
        length: n
    }, () => 0)
    for (let i = 3; i <= n; i++) {
        dp[i] = dp[i - 1] + dp[i - 2]
    }
    return dp[n]
}