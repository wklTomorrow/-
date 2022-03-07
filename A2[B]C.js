/**
 * 输入：A2[B]C
 * 输出：ABBC
 * 
 */


const getStr = str => {
    let result = str
    const stachStr = []
    let index = 0
    while (index < str.length) {
        if (/[0-9]/.test(str[index])) {
            stachStr.push(str[index])
        }
        if (str[index] === ']') {
            let i = index - 1
            let curStr = ''
            while (i >= 0) {
                if (str[i] !== '[') {
                    curStr = str[i] + curStr
                    i--
                } else {
                    const count = stachStr.pop()
                    let newStr = curStr.repeat(count)
                    result = result.replace(`${count}[${curStr}]`, newStr)
                    break;
                }
            }
        } 

        index ++
    }
    return result
}

const getAll = (str) => {
    let s = getStr(str)
    return s.indexOf('[') > -1 ? getStr(s) : s
}

console.log(getAll('A2[B2[D]]C'))