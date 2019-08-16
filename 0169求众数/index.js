/**
 * @file majority-element
 * @author wuchangdong
 */

/**
 * @param {number[]} nums
 * @return {number}
 */

var majorityElement = function (nums) {
    const num = Math.floor(nums.length / 2);
    const map = {};
    for (let i = 0; i < nums.length; i++) {
        const item = nums[i];
        if (map[item] === undefined) {
            map[item] = 0;
        }
        map[item] = map[item] + 1;
        if (map[item] > num) {
            return item;
        }
    }
};
