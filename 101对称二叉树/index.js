/**
 * @file symmetric-tree
 * @author wuchangdong
 */

/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * @param {TreeNode} root
 * @return {boolean}
 */

function compareNode(node1, node2) {
    if (node1 === null && node2 === null) {
        return true;
    }
    if (node1 === null || node2 === null) {
        return false;
    }
    return node1.val === node2.val
    && compareNode(node1.left, node2.right)
    && compareNode(node1.right, node2.left);
}

var isSymmetric = function (root) {
    if (root === null) {
        return true;
    }
    return compareNode(root.left, root.right);
};
