/**
 * https://leetcode-cn.com/problems/search-in-rotated-sorted-array/
 * 如果数组是有序的话，那么利用二分法
 * 回顾一下二分: 单调性,有固定范围的区间。
 * 现在问题是,对于一顿区间是有序的,我们如何去做呢
 * 思路
 * 通过 判断 nums[left] <= nums[mid]
 * 如果左侧区间单调, 判断判断这个target是不是在左侧
 * 不在的话，left = mid + 1
 * 在的话， right = mid - 1 
 * 同理对于左侧不单调的区间,我们需要在右侧做判断
 * nums = [4,5,6,7,0,1,2], target = 0
 */

const arr = [4,5,6,7,0,1,2]

const search = (arr, target) => {
    let left = 0
    let right = arr.length - 1
    while (left < right) {
        let mid = Math.floor((left + right) / 2)
        if (arr[mid] === target) {
            return mid
        }
        if (arr[left] < arr[mid]) {
            if (target > arr[left] && target <= arr[right]) {
                right = mid - 1
            } else if (arr[left] === target) {
                return left
            }
            else {
                left = mid + 1
            }
        } else {
            if (target > arr[mid] && target <= arr[right]) {
                left = mid + 1
            } else if (arr[right] === target) {
                return right
            }
            else {
                right = mid - 1
            }
        }
    }
    return -1
}

console.log(search(arr, 0))
