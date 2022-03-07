/**
 * https://leetcode-cn.com/problems/letter-combinations-of-a-phone-number/
 * 输入：digits = "23"
 * 输出：["ad","ae","af","bd","be","bf","cd","ce","cf"]
 */

const getAll = digits => {
    const result = []
    const mapObj = {
        2: "abc",
        3: "def",
        4: "ghi",
        5: "jkl",
        6: "mno",
        7: "pqrs",
        8: "tuv",
        9: "wxyz",
    }
    function dfs(cur, i) {
        if (cur.length === digits.length) {
            return result.push(cur)
        }
        const list = mapObj[digits[i]]
        for (let val of list) {
            dfs(cur + val, i + 1)
        }
    }
    dfs('', 0)
}