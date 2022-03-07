/**
 * https://leetcode-cn.com/problems/top-k-frequent-words/
 * 输入: ["the", "day", "is", "sunny", "the", "the", "the", "sunny", "is", "is"], k = 4
 * 输出: ["the", "is", "sunny", "day"]
 * 解析: "the", "is", "sunny" 和 "day" 是出现次数最多的四个单词，
 * 出现次数依次为 4, 3, 2 和 1 次。
 */
const getK = (arr, k) => {
    const map = {}
    arr.forEach((item => {
        if (map[item]) {
            map[item] = map[item] + 1
        } else {
            map[item] = 1
        }
    }))
    return Object.values(map).sort((a, b) => a - b).slice(0, k)
}