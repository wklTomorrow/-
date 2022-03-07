/**
 * 
 * 9999 + 1
 * 10000
 */

const add = num => {
    const sum = 0
    for (let i = num.length - 1; i >= 0; i --) {
        const value = sum + num[i]
        const cur = value % 10
        num[i] = cur
        if (value > 9) {
            sum = 1
        } else {
            sum = 0
        }
    }
    // 头部加一
    if (sum) {
        num.splice(0, 0, 1)
    }
    return num
}