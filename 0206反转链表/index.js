/**
 * @file reverse-linked-list
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
 * @param {ListNode} head
 * @return {ListNode}
 */

 // 迭代
var reverseList = function (head) {
    if (!head) {
        return null;
    }

    let preNode = null; // 当前节点的前一个节点
    let curNode = head; // 当前要翻转的节点
    while (curNode) {
        let nextNode = curNode.next; // 当前节点的后一个节点
        curNode.next = preNode; // 对当前节点进⾏行行翻转
        preNode = curNode; // 向后滑动
        curNode = nextNode; // 向后滑动
    }
    // preNode指向翻转前链表的最后⼀一个节点
    return preNode;
};


// 递归
var reverseList = function (head) {
    if (!head) {
        return null;
    }
    if (head.next === null) {
        return head;
    }

    let newHead = reverseList(head.next);
    head.next.next = head;
    head.next = null;
    return newHead;
};
