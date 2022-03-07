/**
 * https://leetcode-cn.com/problems/merge-intervals/
 * 
 * 输入：intervals = [[1,3],[2,6],[8,10],[15,18]]
 * 输出：[[1,6],[8,10],[15,18]]
 * 解释：区间 [1,3] 和 [2,6] 重叠, 将它们合并为 [1,6].
 */
const merge = arr => {
    const res = []
    arr = arr.sort((a, b) => a[0] - b[0])
    const left = arr[0][0]
    const right = arr[0][1]
    for (let i = 1; i < arr.length; i++) {
        if (arr[i][0] > right) {
            res.push([left, right])
            left = arr[i][0]
            right = arr[i][1]
        } else {
            right = Math.max(right, arr[i][1])
        }
    }
    res.push([left, right])
    return res
}