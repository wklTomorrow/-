/**
 * https://leetcode-cn.com/problems/subsets/
 * 输入：nums = [1,2,3]
 * 输出：[[],[1],[2],[1,2],[3],[1,3],[2,3],[1,2,3]]
 */

const combine = arr => {
    const res = []
    function dfs(index, list) {
        if (index === arr.length) {
            return res.push(list.slice())
        }
        list.push(arr[index])
        dfs(index + 1, list)
        list.pop()
        // 不选择当前元素继续查找
        dfs(index + 1, list)
    }
    dfs(0, [])
    return res
}
console.log(combine([1,2,3]))