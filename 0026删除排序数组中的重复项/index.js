/**
 * @file remove-duplicates-from-sorted-array
 * @author wuchangdong
 */

/**
 * @param {number[]} nums
 * @return {number}
 */

// 双指针法
var removeDuplicates = function (nums) {
    if (nums.length === 0) {
        return 0;
    }
    let i = 0;
    for (let j = 1; j < nums.length; j++) {
        if (nums[i] !== nums[j]) {
            i++;
            nums[i] = nums[j];
        }
    }
    return i + 1;
};

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