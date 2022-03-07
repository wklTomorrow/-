/**
 * https://leetcode-cn.com/problems/combination-sum/
 * candidates = [2,3,5], target = 8
 * 输出: [[2,2,2,2],[2,3,3],[3,5]]
 */

const combine = (candidates, target) => {
    const res = []

    function dfs(arr, sum, index) {
        if (sum > target) {
            return
        }
        if (sum === target) {
            return res.push(arr.slice())
        }
        candidates.forEach((val, v) => {
            if (v >= index) {
                arr.push(val)
                dfs(arr, sum + val, v)
                arr.pop()
            }
        })
    }
    dfs([], 0, 0)
    return res
}

console.log(combine([2,3,5], 8))