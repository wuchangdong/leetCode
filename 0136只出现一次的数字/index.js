/**
 * @file single-number
 * @author wuchangdong
 */

/**
 * @param {number[]} nums
 * @return {number}
 */

var singleNumber = function (nums) {
    let num = 0;
    for (let i = 0; i < nums.length; i++) {
        num = nums ^ nums[i]; // 1 ^ 1 = 0  0 ^ 1 = 1
    }
    return num;
};
