/**
 * @file binary-tree-level-order-traversal-ii
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
 * @return {number[][]}
 */

var levelOrderBottom = function (root) {
    if (!root) {
        return [];
    }
    const res = [];
    let lastLevelNodes = [];
    let lastLevelNodeValues;
    let curLevelNodes;
    while (lastLevelNodes.length) {
        lastLevelNodeValues = [];
        curLevelNodes = [];
        for (let i = 0; i < lastLevelNodes.length; i++) {
            const node = lastLevelNodes[i];
            node.left && curLevelNodes.push(node.left);
            node.right && curLevelNodes.push(node.right);
            lastLevelNodeValues.push(node.val);
        }
        lastLevelNodes = curLevelNodes;
        res.unshift(lastLevelNodeValues);
    }
    return res;
};
