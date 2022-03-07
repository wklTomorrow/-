/**
 * 
 * 
 * dp[i] 表示该点的值
 * 第一种，最大值
 * 第二种，前面的是负数，后面的也是负数
 */

const getMax = len => {
    const dp = Array.from({
        length: len
    }, () => 0)
    let min = [dp[0]], max = [dp[0]]
    for (let i = 1; i < len; i++) {
        min[i] = Math.min(dp[i], min[i - 1] * dp[i], max[i - 1] * dp[i])
        max[i] = Math.max(dp[i], max[i - 1] * dp[i], min[i - 1] * dp[i])
    }
    return Math.max(...max)
}