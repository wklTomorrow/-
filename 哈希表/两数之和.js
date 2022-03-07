/**
 * https://leetcode-cn.com/problems/two-sum/
 * 输入：nums = [3,2,4], target = 6
 * 输出：[1,2]
 */
const getSum = (arr, target) => {
    const map = {}
    const list = []
    arr.forEach((item, index) => {
        const value = target - item
        if (map[value]) {
            list.push([index, map[value]])
        } else {
            map[value] = index
        }
    })
    return list
}