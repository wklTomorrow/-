/**
 * 插入排序的一种改良
 * 给顶一个分割比例
 * 一段一段的进行比较
 */
const sort = arr => {
    let mid = Math.floor(arr.length / 2)
    while (mid > 0) {
        for (let i = mid; i < arr.length; i++) {
            let temp = arr[i]
            let j = i - mid
            for (; j >= 0 && arr[j] > temp; j -= mid) {
                arr[j + mid] = arr[j]
            }
            arr[j + mid] = temp
        }
        mid = Math.floor(mid / 2)
    }
    return arr
}


let arr = [2, 9, 6, 7, 4, 3, 1, 7]
console.log(sort(arr))