/**
 * @file /merge-two-sorted-lists
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
 * @param {ListNode} l1
 * @param {ListNode} l2
 * @return {ListNode}
 */

// 递归
var mergeTwoLists = function (l1, l2) {
    if (!l1) {
        return l2;
    }
    else if (!l2) {
        return l1;
    }
    if (l1.val < l2.val) {
        l1.next = mergeTwoLists(l1.next, l2);
        return l1;
    }
    else {
        l2.next = mergeTwoLists(l2.next, l1);
        return l2;
    }
};

// 迭代
var mergeTwoLists = function (l1, l2) {
    if (!l1) {
        return l2;
    }
    else if (!l2) {
        return l1;
    }

    let newList = new ListNode(-1);
    let prev = newList;
    while (l1 !== null && l2 !== null) {
        if (l1.val < l2.val) {
            prev.next = l1;
            l1 = l1.next;
        }
        else {
            prev.next = l2;
            l2 = l2.next;
        }
        prev = prev.next;
    }
    prev.next = l1 === null ? l2 : l1;
    return newList.next;
};