// first -> second -> first

class Node {
    constructor(node) {
        this.node = node
        this.next = null
    }
}

function create(arr = ['first', 'second', 'third']) {
    let head = new Node(null)
    arr.forEach(l => {
        let l = new Node(l)
        if (head.next) {
            let z = head.next
            while (z.next) {
                z = z.next
            }
            z.next = l
            l.next = head.next
        } else {
            head.next = l
            l.next = l
        }
    })
}