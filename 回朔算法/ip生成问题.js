/**
 * 6. 给定一个只包含数字的字符串，复原它并返回所有可能的 IP 地址格式。
 * 0-255
 * input：
 *      s = "25525511135"
 *      
 * output：
 *      ["255.255.11.135","255.255.111.35"]
 * 
 */

const test = (str) => {
    const result = []

    function dns(list, s) {
        if (list.length === 4 && !s) {
            return result.push(list.slice())
        } else if (list.length > 4) {
            return
        }
        let curStr = ''
        for (let i = 0; i < s.length; i++) {
            curStr += s[i]
            if (curStr >= 0 && curStr <= 255) {
                list.push(curStr)
                dns(list, s.slice(i + 1))
                list.pop(curStr)
            }
            if (s[i] == 0 || i > 3) {
                return
            }
        }
    }

    dns([], str)
    return result
}
// test('25525511135')
console.log(test('25525511135'))