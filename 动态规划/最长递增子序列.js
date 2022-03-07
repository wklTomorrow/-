/**
 * 最长子序列
 * dp[i] = Math.max(dp[i], dp[i - 1]) num[i] > num[j]
 */

const getMax = num => {
    const dp = Array.from({
        length: num.length
    }, () => 1)
    for (let i = 1; i < num.length; i++) {
        for (let j = 0; j < i; j++) {
            if (num[i] > num[j]) {
                dp[i] = Math.max(dp[i], dp[j] + 1)
            }
        }
    }
    return Math.max(...dp)
}