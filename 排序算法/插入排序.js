/**
 * 扑克牌形势
 */

const sort = arr => {
    for (let i = 1; i < arr.length; i++) {
        let j = i - 1
        while (j >= 0 && arr[j] > arr[j + 1]) {
            ;[arr[j], arr[j + 1]] = [arr[j + 1], arr[j]]
            j --
        }
    }
    return arr
}


let arr = [2, 9, 6, 7, 4, 3, 1, 7]
console.log(sort(arr))