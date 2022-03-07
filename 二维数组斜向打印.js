/**
 * [
 *      [1,2,3],
 *      [4,5,6]
 *      [7,8,9]
 * ]
 */

const arr = [
    [1,2,3],
    [4,5,6],
    [7,8,9]
]

const print = arr => {
    let result = []
    // 左上角
    for (let k = 0; k < arr[0].length; k++) {
        for (let i = 0; i <= k; i++) {
            result.push(arr[i][k - i])
        }
    }
    // 右下角
    for (let k = 1; k < arr.length; k++) {
        for (let i = k, j = arr[0].length - 1; i < arr.length && j >= 0; j --,i++) {
            result.push(arr[i][j])
        }
    }
    console.log(result)
}

print(arr)
