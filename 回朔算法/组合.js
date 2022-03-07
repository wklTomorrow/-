/**
 * https://leetcode-cn.com/problems/combinations/
 * 输入：n = 4, k = 2
 * 输出：[
  [2,4],
  [3,4],
  [2,3],
  [1,2],
  [1,3],
  [1,4],]
 */
const combine = (n, k) => {
    const res = []
    function dfs(start, arr) {
        if (arr.length === k) {
            return res.push(arr.slice())
        }
        for (let i = start; i < k; i++) {
            arr.push(i)
            dfs(i + 1, arr)
            arr.pop()
        }
    }
    dfs(1, [])

    return res
}