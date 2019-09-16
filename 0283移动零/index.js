/**
 * @file move-zeroes
 * @author wuchangdong
 */

/**
 * @param {number[]} nums
 * @return {void} Do not return anything, modify nums in-place instead.
 */

var moveZeroes = function (nums) {
    let count = 0;
    for (let i = nums.length - 1; i >= 0; i--) {
        if (nums[i] === 0) {
            count ++;
            nums.splice(i, 1);
        }
    }
    for (let i = 0; i < count; i++) {
        nums.push(0);
    }
    return nums;
};
