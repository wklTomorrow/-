/**
 * https://leetcode-cn.com/problems/jump-game/
 * 输入：nums = [2,3,1,1,4]
 * 输出：true
 * 解释：可以先跳 1 步，从下标 0 到达下标 1, 然后再从下标 1 跳 3 步到达最后一个下标。
 * 只需要判断是不是可以到达最后一个位置
 * 我们维护一个变量,判断这个变量是不是大于n-1即可
 * 这里我们需要注意的就是 当枚举到第i个节点时,如果大于 最大value, 则失败
 * https://leetcode-cn.com/problems/jump-game/solution/55-jstan-xin-by-gu-du-de-xiao-ma-xia-h582/
 * 
 * ?????????
 */

const jump = arr => {
    let max = 0
    for (let i = 0; i < arr.length; i++) {
        if (i > max) {
            return false
        }
        max = Math.max(max, i + arr[i])
        if (max >= arr.length - 1) {
            return true
        }
    }
    return false
}

 const canJump = (nums) => {
    let value = 0, len = nums.length
    for (let i = 0; i < len; i++) {
      if (value < i) {
        break
      }
      value = Math.max(value, i + nums[i])
    }
    return value >= len - 1
}