/**
 * https://leetcode-cn.com/problems/linked-list-cycle/
 * 判断一个链表是否有环
 */
const getStack = head => {
    const map = {}
    while (head && head.next) {
        if (map[head]) {
            return false
        }
        map[head] = head
        head = head.next
    }
    return true
}