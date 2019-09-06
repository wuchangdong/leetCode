/**
 * @file binary-tree-paths
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
 * @return {string[]}
 */

var binaryTreePaths = function (root) {
    if (!root) {
        return [];
    }
    function backTrace(root, path, paths) {
        if (!root.left && !root.right) {
            path.push(root.val);
            paths.push(path);
        }
        else {
            if (root.left) {
                backTrace(root.left, path.concat(root.val), paths);
            }
            if (root.right) {
                backTrace(root.right, path.concat(root.val), paths);
            }
        }
    }
    const paths = [];
    backTrace(root, [], paths);
    return paths.map(item => item.join('->'));
};
