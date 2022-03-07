/**
 * 选取一个中间位置，大于的在右侧，小于的在左侧
 */

const sort = arr => {
    if (arr.length < 2) return arr
    const mid = Math.floor(arr.length / 2)
    const left = []
    const right = []
    for (let i = 0; i < arr.length; i ++) {
        if (i === mid) continue
        if (arr[i] > arr[mid]) {
            right.push(arr[i])
        } else {
            left.push(arr[i])
        }
    }
    return sort(left).concat(arr[mid], ...sort(right))
}


let arr = [2, 9, 6, 7, 4, 3, 1, 7]
console.log(sort(arr))