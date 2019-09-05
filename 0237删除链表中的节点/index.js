/**
 * @file delete-node-in-a-linked-list
 * @author wuchangdong
 */

/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */
/**
 * @param {ListNode} node
 * @return {void} Do not return anything, modify node in-place instead.
 */

var deleteNode = function (node) {
    node.val = node.next.val;
    let next = node.next;
    node.next = next.next;
    next.next = null;
};

