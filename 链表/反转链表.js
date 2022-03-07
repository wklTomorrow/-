/**
 * 1 -> 2 -> 3 -> 4 -> 5
 * 2 -> 3 -> 4 -> 5 -> 1 -> null
 * 5 -> 4 -> 3 -> 2 -> 1
 */

const reverse = head => {
    let cur = head
    let pre = null
    while (cur) {
        let next = cur.next
        next.next = pre
        pre = next
        cur = cur.next
    }
    return pre
}

const reverse1 = head => {
    const reverse = (pre, cur) => {
        if (cur === null) return pre
        let next = cur.next
        cur.next = pre
        return reverse(cur, next)
    }

    return reverse(null, head)
}
