/**
 * 你是一个专业的小偷，计划偷窃沿街的房屋。每间房内都藏有一定的现金，
 * 影响你偷窃的唯一制约因素就是相邻的房屋装有相互连通的防盗系统，
 * 如果两间相邻的房屋在同一晚上被小偷闯入，系统会自动报警。
 * 给定一个代表每个房屋存放金额的非负整数数组，计算你在不触动警报装置的情况下，能够偷窃到的最高金额。
 * 
 * 输入: [2, 7, 9, 3, 1]
 * 输出: 12
 * 解释： 偷 1，3，1
 * dp[i] 表示 第 i 个点能获得的金币
 * dp[i][1] 表示偷
 * dp[i][0] 表示不偷
 * i：偷，dp[i] = dp[i - 1][0] + nums[i]
 * i：不偷，dp[i] = Math.max(dp[i - 1][0], dp[i - 1][1])
 */

const getMax = nums => {
    const dp = Array.from({
        length: nums.length
    }, () => [0, 0])
    dp[0][0] = 0
    dp[0][1] = nums[0]
    for (let i = 1; i < nums; i++) {
        dp[i][0] = Math.max(dp[i - 1][0], dp[i - 1][1])
        dp[i][1] = dp[i - 1][0] + nums[i]
    }
    return Math.max(dp[nums.length - 1][0], dp[nums.length - 1][1])
}