/**
 * @file remove-linked-list-elements
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
 * @param {number} val
 * @return {ListNode}
 */

var removeElements = function (head, val) {
    if (!head) {
        return null;
    }
    const newHead = new ListNode();
    newHead.next = head;
    let prev = newHead;
    let cur = head;
    while (cur) {
        if (cur.val === val) {
            prev.next = cur.next;
            cur = cur.next;
        }
        else {
            prev = prev.next;
            cur = cur.next;
        }
    }
    return newHead.next;
};
