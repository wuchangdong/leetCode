/**
 * @file intersection-of-two-linked-lists
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
 * @param {ListNode} headA
 * @param {ListNode} headB
 * @return {ListNode}
 */

var getIntersectionNode = function (headA, headB) {
    let depthA = getDepth(headA);
    let depthB = getDepth(headB);
    while (depthA > depthB) {
        headA = headA.next;
        depthA--;
    }
    while (depthA < depthB) {
        headB = headB.next;
        depthB--;
    }
    while (headA) {
        if (headA === headB) {
            return headA;
        }
        headA = headA.next;
        headB = headB.next;
    }
    return null;
};

function getDepth(listNode) {
    let depth = 0;
    while (listNode) {
        depth++;
        listNode = listNode.next;
    }
    return depth;
}