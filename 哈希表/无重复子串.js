/**
 * https://leetcode-cn.com/problems/longest-substring-without-repeating-characters/
 * 输入: s = "abcabcbb"
 * 输出: 3 
 * 解释: 因为无重复字符的最长子串是 "abc"，所以其长度为 3。
 */
const getStrLen = str => {
    const map = {}
    const max = 0
    for (let i = 0; i < str.length; i++) {
        if (map[str[i]]) {
            max = Math.max(i - map[str[i]] + 1, max)
        }
        map[str[i]] = i
    }
    return max
}