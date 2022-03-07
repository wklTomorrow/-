/**
 * https://leetcode-cn.com/problems/minimum-path-sum/
 * 
 * 输入：grid = [[1,3,1],[1,5,1],[4,2,1]]
 * [
 *      [1,3,1],
 *      [1,5,1],
 *      [4,2,1]
 * ]
 * 输出：7
 * 解释：因为路径 1→3→1→1→1 的总和最小。
 * 
 * dp[i][j] 表示在 i，j 最小值
 * dp[i][j] = Math.min(dp[i - 1][j] + nums[i][j], dp[i][j - 1] + nums[i][j])
 */

const getMin = nums => {
    const dp = [];
    const col = nums.length - 1
    const row = nums[0].length - 1
    for (let i = 0; i <= col; i++) {
        for (let j = 0; j <= row; j++) {
            if (i == 0 || j == 0) {
                let minY = i - 1 >= 0 ? i - 1 : 0
                let minX = j - 1 >= 0 ? j - 1 : 0
                dp[i][j] = j === 0 ? nums[i][j] + nums[i][minY] : nums[i][j] + nums[minX][y]
            } else {
                dp[i][j] = Math.min(dp[i - 1][j] + nums[i][j], dp[i][j - 1] + nums[i][j])
            }
        }
    }
    return dp[col][row]
}