/**
 * @file lowest-common-ancestor-of-a-binary-search-tree
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
 * @param {TreeNode} p
 * @param {TreeNode} q
 * @return {TreeNode}
 */

var lowestCommonAncestor = function (root, p, q) {
    p = p.val;
    q = q.val;
    if (p > q) {
        let tmp = p;
        q = p;
        p = tmp;
    }
    while (root) {
        if (root.val > q) {
            root = root.left;
        }
        else if (root.val < p) {
            root = root.right;
        }
        else {
            return root;
        }
    }
};
