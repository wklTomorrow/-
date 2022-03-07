/**
 * https://leetcode-cn.com/problems/container-with-most-water/
 * 输入：[1,8,6,2,5,4,8,3,7]
 * 输出：49 
 * 解释：图中垂直线代表输入数组 [1,8,6,2,5,4,8,3,7]。在此情况下，容器能够容纳水（表示为蓝色部分）的最大值为 49。
 */

const arr = [1,8,6,2,5,4,8,3,7]

const getMax = arr => {
    let left = 0
    let right = arr.length - 1
    let max = 0
    while (left < right) {
        if (arr[left] > arr[right]) {
            max = Math.max((right - left) * arr[right], max)
            right --
        } else {
            max = Math.max((right - left) * arr[left], max)
            left ++
        }
    }
    return max
}

console.log(getMax(arr))