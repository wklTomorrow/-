/**
 * 类似归并排序
 */

const mid = (arr1, arr2) => {
    const result = []
    while (arr1.length && arr2.length) {
        if (arr1[0] > arr2[0]) {
            result.push(arr2.shift())
        } else {
            result.push(arr1.shift())
        }
    }
    while (arr1.length) {
        result.push(arr1.shift())
    }
    while (arr2.length) {
        result.push(arr2.shift())
    }
    if (result.length % 2) {
        return (result[(result.length - 1) / 2] + result[(result.length - 1) / 2 + 1]) / 2
    } else {
        return result[result.length - 1 / 2]
    }
}