/**
 * @file minimum-moves-to-equal-array-elements
 * @author wuchangdong
 */

/**
 * @param {number[]} nums
 * @return {number}
 */


// 对n - 1个数 + 1  就是对剩余那个数减一 都减到最小数就能得到需要多少步
var minMoves = function (nums) {
    let sum = 0;
    let min = Infinity;
    for (let i = 0; i < nums.length; i++) {
        sum += nums[i];
        min = Math.min(min, nums[i]);
    }
    return sum - min * nums.length;
};

// 动态规划
var minMoves = function (nums) {
    nums = nums.sort((a, b) => a - b);

    let moves = 0;
    for (let i = 1; i < nums.length; i++) {
        const diff = moves + nums[i] - nums[i - 1];
        nums[i] += moves;
        moves += diff;
    }
    return moves;
};
