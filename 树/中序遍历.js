/**
 * 根在中，从左往右，一棵树的左子树永远在根前面，根永远在右子树前面
 */

 class TreeNode {
    constructor() {
        this.val = null
        this.left = null
        this.right = null
        const list = []
    }

    mid(node) {
        if (node.val) {
            this.mid(node.left)
            list.push(node.val)
            this.mid(node.right)
        }
    }
}