/**
 * 
 */

// 递归
const dpMax = root => {
    if (!root) return 0
    return Math.max(dpMax(left), dpMax(right)) + 1
}

// 广度优先

const getMax = root => {
    if (!root) return 0
    let queue = [root],
        res = 0
    while(queue.length) {
        let tem = []
        for (let i = 0; i < queue.length; i++) {
            if (queue[i].left) {
                tem.push(queue[i].left)
            }
            if (queue[i].right) {
                tem.push(queue[i].right)
            }
        }
        queue = [...tem]
        res ++
    }
    return res
}