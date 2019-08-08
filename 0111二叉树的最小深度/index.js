/**
 * @file minimum-depth-of-binary-tree
 * @author wuchangdong
 */


 // 最小深度是从根节点到最近叶子节点的最短路径上的节点数量。 叶子节点指的是左右两个子节点都为null;

 /**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * @param {TreeNode} root
 * @return {number}
 */

var minDepth = function (root) {
    if (!root) {
        return 0;
    }
    if (root.left === null) {
        return minDepth(root.right) + 1;
    }
    if (root.right === null) {
        return minDepth(root.left) + 1;
    }
    return Math.min(minDepth(root.left), minDepth(root.right)) + 1;
}