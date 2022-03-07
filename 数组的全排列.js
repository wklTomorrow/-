/**
 * 数组的全排列
 * 1,2,3,4
 * 返回：
 * [1,2,3,4],[1,2,4,3]...
 */

const combine = arr => {
    const res = []
    function dfs(list, arr) {
        if (arr.length === 0) {
            return res.push(list.slice())
        }
        for (let i = 0; i < arr.length; i++) {
            list.push(arr[i])
            const cur = arr.slice()
            cur.splice(i, 1)
            dfs(list, cur)
            list.pop()
        }
    }
    dfs([], arr)
    return res
}

console.log(combine([1,2,3,4]))