/**
 * 1 -> 3 -> 5
 * 2 -> 4 -> 6
 */

const merge = (left, right) => {
    if (left.next === null) return left
    if (right.next === null) return right
    if (left.value < right.value) {
        left.next = merge(left.next, right)
        return left
    } else {
        right.next = merge(left, right.next)
        return right
    }
}