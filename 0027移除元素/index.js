/**
 * @file remove-element
 * @author wuchangdong
 */

/**
 * @param {number[]} nums
 * @param {number} val
 * @return {number}
 */
// 双指针方法
var removeElement = function (nums, val) {
    let i = 0;
    let n = nums.length;
    while (i < n) {
        if (nums[i] === val) {
            nums[i] = nums[n - 1];
            n--;
        }
        else {
            i++;
        }
    }
    return i;
};

var removeElement = function (nums, val) {
    let i = 0;
    for (const num of nums) {
        if (num !== val) {
            nums[i] = num;
            i++;
        }
    }
    return i;
};