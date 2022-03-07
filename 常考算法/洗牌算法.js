/**
 * 当前匹配到的数字，下次就不应该继续在重复里面
 */

const arr = [1,2,3,4,5,6,7]

const random = arr => {
    for (let i = arr.length - 1; i >= 0; i --) {
        const ran = Math.floor(i * Math.random());
        [arr[i], arr[ran]] = [arr[ran], arr[i]]
    }
    return arr
}