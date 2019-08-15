/**
 * @file two-sum-ii-input-array-is-sorted
 * @author wuchangdong
 */

/**
 * @param {number[]} numbers
 * @param {number} target
 * @return {number[]}
 */

var twoSum = function (numbers, target) {
    let low = 0;
    let high = numbers.length - 1;
    while (low < high) {
        const sum = numbers[low] + numbers[high];
        if (sum === target) {
            return [low + 1, high + 1];
        }
        if (sum > target) {
            high--;
        }
        if (sum < target) {
            low++;
        }
    }
};
