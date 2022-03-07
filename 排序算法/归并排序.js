/**
 * 归并排序，
 * 两个堆依次拿出较大值
 */

function mergeSort(left, right) {
    const arr = []
    while (left.length && right.length) {
        if (left[0] > right[0]) {
            arr.push(right.shift())
        } else {
            arr.push(left.shift())
        }
    }
    while (left.length) {
        arr.push(left.shift())
    }
    while (right.length) {
        arr.push(right.shift())
    }
    return arr
}

const sort = arr => {
    if (arr.length  < 2) return arr
    const mid = Math.floor(arr.length / 2)
    const left = arr.slice(0, mid)
    const right = arr.slice(mid)
    return mergeSort(sort(left), sort(right))
}

let arr = [2, 9, 6, 7, 4, 3, 1, 7]
console.log(sort(arr))