/**
 * @file intersection-of-two-arrays
 * @author wuchangdong
 */

/**
 * @param {number[]} nums1
 * @param {number[]} nums2
 * @return {number[]}
 */

var intersection = function (nums1, nums2) {
    const map = {};
    let arr = [];
    for (let i = 0; i < nums1.length; i++) {
        map[nums1[i]] = true;
    }
    for (let i = 0; i < nums2.length; i++) {
        if (map[nums2[i]]) {
            arr.push(nums2[i]);
            map[nums2[i]] = false;
        }
    }
    return arr;
};
