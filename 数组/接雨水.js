/**
 * 比如当前的答案,我们需要去判断它的左右的最大值,然后减去当前柱子的高度
 */

const getRain = arr => {
    const left = Array.from({
        length: arr.length
    }, () => 0)
    const right = Array.from({
        length: arr.length
    }, () => 0)
    let max = 0
    let res = 0
    for (let i = 0; i < arr.length; i++) {
        left[i] = max = Math.max(max, arr[i])
    }
    max = 0
    for (let i = arr.length - 1; i >= 0;i --) {
        right[i] = max = Math.max(max, arr[i])
    }
    for (let i = 0; i < arr.length; i++) {
        res += Math.min(left[i], right[i]) - arr[i]
    }
    return res
}