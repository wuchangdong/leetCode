/**
 * @file convert-sorted-array-to-binary-search-tree
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
 * @param {number[]} nums
 * @return {TreeNode}
 */

var sortedArrayToBST = function (nums) {
    return divideConquer(nums, 0, nums.length - 1);
};
// 分治
function divideConquer(nums, start, end) {
    if (start > end) {
        return null;
    }
    const mid = (start + end) >> 1;
    const node = new TreeNode(nums[mid]);
    if (mid !== start) {
        node.left = divideConquer(nums, start, mid - 1);
    }
    node.right = divideConquer(nums, mid + 1, end);
    return node;
}
