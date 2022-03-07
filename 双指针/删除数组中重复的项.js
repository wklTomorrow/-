/**
 * https://leetcode-cn.com/problems/remove-duplicates-from-sorted-array/
 * 输入：nums = [0,0,1,1,1,2,2,3,3,4]
 * 输出：5, nums = [0,1,2,3,4]
 * 解释：函数应该返回新的长度 5 ， 并且原数组 nums 的前五个元素被修改为 0, 1, 2, 3, 4 。不需要考虑数组中超出新长度后面的元素。
 */

const deleteNum = arr => {
    let count = 0
    for (let i = 1; i < arr.length; i++) {
        if (arr[i] !== arr[i - 1]) {
            arr[++ count] = arr[i]
        }
    }
    return count + 1
}