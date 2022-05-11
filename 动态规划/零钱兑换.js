/**
 * 输入：coins = [1, 2, 5], amount = 11
 * 输出：3 
 * 解释：11 = 5 + 5 + 1
 */
/**
 * dp[120] = Math.min(dp[119] + 1, dp[118] + 1, dp[115] + 1)
 */

const coinsExchange = (coins, amount) => {
    const dp = Array.from({
        length: amount + 1
    }, () => Infinity)
    dp[0] = 0
    for (let i = 0; i <= amount; i++) {
        for (let cur of coins) {
            if (i - cur >= 0) {
                dp[i] = Math.min(dp[i], 1 + dp[i - cur])
            }
        }
    }
    return dp[amount]
}

console.log(coinsExchange([1,2,5], 11))