/**
 * 判断有效的括号
 */

const getNum = str => {
    const maps = {
        '(': ')',
        '{': '}',
        '[': ']'
    }
    const stack = []
    for (let i = 0; i < str.length; i++) {
        if (str[i]) {
            stack.push(maps[str[i]])
        } else {
            if (str[i] === stack.pop()) {
                continue
            } else {
                return false
            }
        }
    }
    return stack.length === 0
}