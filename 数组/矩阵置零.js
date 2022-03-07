/**
 * 
 * [
 *      1,1,1
 *      1,0,1
 *      1,1,1
 * ]
 * [
 *      1,0,1
 *      0,0,0
 *      1,0,1
 * ]
 */

const setZero = arr => {
    const xMap = {}
    const yMap = {}
    for (let i = 0; i < arr.length; i++) {
        for (let j = 0; j < arr[0].length; j++) {
            if (arr[i][j] === 0) {
                xMap[x] = true
                yMap[y] = true
            }
        }
    }
    for (let i = 0; i < arr.length; i++) {
        for (let j = 0; j < arr[0].length; j++) {
            if (xMap[i]) {
                arr[i][j] = 0
            }
            if (yMapp[j]) {
                arr[i][j] = 0
            }
        }
    }
    return arr
}