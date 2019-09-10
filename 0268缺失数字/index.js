/**
 * @file missing-number
 * @author wuchangdong
 */

/**
 * @param {number[]} nums
 * @return {number}
 */

var missingNumber = function (nums) {
    let missNum = nums.length;
    for (let i = 0; i < nums.length; i++) {
        missNum ^= i ^ nums[i];
    }
    return missNum;
};
