/**
 * @file palindrome-linked-list
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
 * @return {boolean}
 */

var isPalindrome = function (head) {
    const values = [];
    while (head) {
        values.push(head.val);
        head = head.next;
    }
    let index1 = 0;
    let index2 = values.length - 1;
    while (index1 < index2) {
        if (values[index1] !== values[index2]) {
            return false;
        }
        index1++;
        index2--;
    }
    return true;
};
