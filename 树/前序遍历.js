/**
 * 根在前，从左往右，一棵树的根永远在左子树前面，左子树又永远在右子树前面
 */

class TreeNode {
    constructor() {
        this.val = null
        this.left = null
        this.right = null
        const list = []
    }

    pre(node) {
        if (node.val) {
            list.push(node.val)
            this.pre(node.left)
            this.pre(node.right)
        }
    }
}