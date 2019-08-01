/**
 * @file maximum-subarray
 * @author wuchangdong
 */

/**
 * @param {number[]} nums
 * @return {number}
 */

var maxSubArray = function (nums) {
    let sum = 0;
    let res = nums[0];
    for (let i = 0; i < nums.length; i++) {
        if (sum > 0) {
            sum += nums[i];
        }
        else {
            sum = nums[i];
        }
        res = Math.max(sum, res);
    }
    return res;
};

// 以后尝试下分治