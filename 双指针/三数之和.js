/**
 * https://leetcode-cn.com/problems/3sum/
 * 输入：nums = [-1,0,1,2,-1,-4]
 * 输出：[[-1,-1,2],[-1,0,1]]
 * 先进行排序然后从头开始，一次次往后进行遍历
 */
const num = [-1,0,1,2,-1,-4]
const getNum = arr => {
    arr = arr.sort((a, b) => a - b)
    const result = []
    let cur = 0
    
    while (cur < arr.length - 1) {
        let left = cur + 1
        let right = arr.length - 1
        while (right > left) {
            const sum = arr[cur] + arr[left] + arr[right]
            if (sum == 0) {
                result.push([arr[cur], arr[left], arr[right]])
            }
            if (sum <= 0) {
                if (arr[left] === arr[left + 1]) {
                    left = left + 2
                } else {
                    left = left + 1
                }
            } else {
                if (arr[right] === arr[right - 1]) {
                    right = right - 2
                } else {
                    right = right - 1
                }
            }
        }
        if (arr[cur] === arr[cur + 1]) {
            cur = cur + 2
        } else {
            cur = cur + 1
        }
    }
    return result
}

console.log(getNum(num))