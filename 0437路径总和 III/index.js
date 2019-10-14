/**
 * @file path-sum-iii
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
 * @param {number} sum
 * @return {number}
 */

var pathSum = function (root, sum) {
    function getNodes(node, nodeList) {
        nodeList.push(node);
        node.left && getNodes(node.left, nodeList);
        node.right && getNodes(node.right, nodeList);
    }

    const nodeList = [];
    root && getNodes(root, nodeList);

    let count = 0;

    function dfs(node, cur) {
        cur += node.val;
        cur === sum && count++;
        node.left && dfs(node.left, cur);
        node.right && dfs(node.right, cur);
    }

    for (let i = 0; i < nodeList.length; i++) {
        dfs(nodeList[i], 0);
    }

    return count;
};