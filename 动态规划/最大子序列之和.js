/**
 * 最长子序列之和
 * dp[i] 表示i 的和的最大值
 * dp[i] = Math.max(dp[i - 1] + num[i], num[i])
 */

const getMax = nums => {
    const dps = Array.from({
        length: nums.length
    }, x => 0)
    for (let i = 0; i < nums.length; i++) {
        dps[i] = Math.max(dps[i - 1] + nums[i], nums[i])
    }
    return Math.max(...dps)
}