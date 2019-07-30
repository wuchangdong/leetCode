/**
 * @file search-insert-position
 * @author wuchangdong
 */

/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number}
 */
// 二分查找
var searchInsert = function (nums, target) {
    if (nums[0] > target) {
        return 0;
    }
    else if (nums[nums.length - 1] < target) {
        return nums.length;
    }
    let low = 0;
    let high = nums.length - 1;
    while (low <= high) {
        const mid = (low + high) >> 1; // 位运算 二进制数向右移一位 代替 （） / 2
        if (nums[mid] > target) {
            high = mid - 1;
        }
        else if (nums[mid] < target) {
            low = mid + 1;
        }
        else {
            return mid;
        }
    }
    return low;
};

var searchInsert = function (nums, target) {
    if (nums[0] > target) {
        return 0;
    }
    else if (nums[nums.length - 1] < target) {
        return nums.length;
    }
    for (let i = 0; i < nums.length; i++) {
        if (nums[i] === target) {
            return i;
        }
        else if (target > nums[i] && target < nums[i + 1]) {
            return i + 1;
        }
    }
};