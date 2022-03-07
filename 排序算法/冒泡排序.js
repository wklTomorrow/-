/**
 * 一次次的比较
 */
const sort = arr => {
    for (let i = 0; i < arr.length; i++) {
        for (let j = i + 1; j < arr.length; j++) {
            if (arr[i] > arr[j]) {
                ;[arr[i], arr[j]] = [arr[j], arr[i]]
            }
        }
    }
    return arr
}

let arr = [2, 9, 6, 7, 4, 3, 1, 7]
console.log(sort(arr))