/**
 * 判断0，1，2次数
 * 
 */
const getNum = arr => {
    const map = []
    for (let i = 0; i < arr.length; i++) {
        map[arr[i]] ++
    }
    let index = 0
    for (let i = 0; i < map.length; i++) {
        let j = 0
        while(j < map[i]) {
            j ++
            arr[index++] = i
        }
    }
}