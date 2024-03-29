/**
 * @file third-maximum-number
 * @author wuchangdong
 */

/**
 * @param {number[]} nums
 * @return {number}
 */

var thirdMax = function (nums) {
    let max1 = -Infinity;
    let max2 = -Infinity;
    let max3 = -Infinity;
    for (let i = 0; i < nums.length; i++) {
        const item = nums[i];
        if (item >= max1) {
            if (item > max1) {
                max3 = max2;
                max2 = max1;
                max1 = item;
            }
        }
        else if (item >= max2) {
            if (item > max2) {
                max3 = max2;
                max2 = item;
            }
        }
        else if (item > max3) {
            max3 = item;
        }
    }
    return max3 === -Infinity ? max1 : max3;
};
