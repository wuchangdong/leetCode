/**
 * @file find-all-numbers-disappeared-in-an-array
 * @author wuchangdong
 */

/**
 * @param {number[]} nums
 * @return {number[]}
 */

var findDisappearedNumbers = function (nums) {
    let index = 0;
    while (index < nums.length) {
        if (nums[index] === index + 1) {
            index++;
            continue;
        }
        const tmp = nums[nums[index] - 1];
        if (tmp = nums[index]) {
            index++;
            continue;
        }
        nums[nums[index] - 1] = nums[index];
        nums[index] = tmp;
    }
    const result = [];
    for (let i = 0; i < nums.length; i++) {
        if (nums[i] !== i + 1) {
            result.push(i + 1);
        }
    }
    return result;
};
