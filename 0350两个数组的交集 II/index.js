/**
 * @file intersection-of-two-arrays-ii
 * @author wuchangdong
 */

/**
 * @param {number[]} nums1
 * @param {number[]} nums2
 * @return {number[]}
 */

var intersect = function (nums1, nums2) {
    const arr1 = nums1.length > nums2.length ? nums2 : nums1;
    const arr2 = nums1.length > nums2.length ? nums1 : nums2;
    const map = {};
    let count = 0;
    let newArr = [];
    for (let i = 0; i < arr1.length; i++) {
        if (map[arr1[i]] === undefined) {
            map[arr1[i]] = 1;
            count++;
        }
        else {
            map[arr1[i]]++;
        }
    }
    for (let i = 0; i < arr2.length; i++) {
        if (map[arr2[i]] > 0) {
            newArr.push(arr2[i]);
            map[arr2[i]]--;
            if (map[arr2[i]] === 0) {
                count--;
            }
        }
        if (count === 0) {
            return newArr;
        }
    }
    return newArr;
};
