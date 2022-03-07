/**
 * 选择排序
 * 从第一个开始选择最小的放在第一位
 */
const sort = arr => {
    for (let i = 0; i < arr.length; i++) {
        let tem = i
        for (let j = i + 1; j < arr.length; j++) {
            if (arr[i] > arr[j]) {
                tem = j
            }
        }
        if (i !== tem) {
            ;[arr[i], arr[tem]] = [arr[tem], arr[i]]
        }
    }
}

let arr = [2, 9, 6, 7, 4, 3, 1, 7]
console.log(sort(arr))