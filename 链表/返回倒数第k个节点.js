/**
 * 1 -> 2 -> 3 -> 4 -> 5
 * 第一种，遍历下数组的长度，重新遍历长度后输出
 * 第二种，双指针
 */

const getK = (head, k) => {
    let first = head
    let second = head
    while (k > 0) {
        second = second.next
        k --
    }

    while(second) {
        first = first.next
        second = second.next
    }

    return first
}