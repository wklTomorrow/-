/**
 * https://leetcode-cn.com/problems/best-time-to-buy-and-sell-stock/
 * dp[i] 表示第i天的利润
 * dp[i] = Math.max(dp[i - 1], prices[i] - minPrice)
 */

const getPrice = prices => {
    let max = 0, minPrice = prices[0]
    for (let i = 0; i < prices.length; i++) {
        minPrice = Math.min(minPrice, prices[i])
        max = Math.max(max, prices[i] - minPrice)
    }
    return max
}