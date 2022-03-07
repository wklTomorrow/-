/**
 * 判断回文串
 * 双指针
 */

const testStr = str => {
    let left = 0, right = str.length
    while(left < right) {
        if (arr[left] !== arr[right]) {
            return false
        }
        left ++
        right --
    }
}