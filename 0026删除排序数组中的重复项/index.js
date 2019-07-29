/**
 * @file remove-duplicates-from-sorted-array
 * @author wuchangdong
 */

/**
 * @param {number[]} nums
 * @return {number}
 */
var removeDuplicates = function (nums) {
    for (let i = nums.length - 1; i >= 0; i--) {
        if (i === 0) {
            return nums.length;
        }
        if (nums[i] === nums[i - 1]) {
            nums.splice(i, 1);
        }
    }
};