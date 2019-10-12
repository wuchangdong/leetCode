/**
 * @file remove-duplicates-from-sorted-array-ii
 * @author wuchangdong
 */

/**
 * @param {number[]} nums
 * @return {number}
 */

var removeDuplicates = function (nums) {
    let count = 0;
    let cur = -Infinity;
    for (let i = nums.length - 1; i >= 0; i--) {
        if (nums[i] !== cur) {
            cur = nums[i];
            count = 1;
        }
        else if (count === 1 && nums[i] === cur) {
            count++;
        }
        else {
            nums.splice(i, 1);
            count = 0;
        }
    }
    return nums.length;
};