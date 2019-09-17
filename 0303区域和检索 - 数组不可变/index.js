/**
 * @file range-sum-query-immutable
 * @author wuchangdong
 */

/**
 * @param {number[]} nums
 */

var NumArray = function (nums) {
    let sum = new Array(nums.length + 1);
    for (let i = 0; i < nums.length; i++) {
        sum[i + 1] = sum[i] + nums[i];
    }
    this.sum = sum;
};

/**
 * @param {number} i
 * @param {number} j
 * @return {number}
 */

NumArray.prototype.sumRange = function (i, j) {
    return this.sum[j + 1] - this.sum[i];
};

/**
 * Your NumArray object will be instantiated and called as such:
 * var obj = new NumArray(nums)
 * var param_1 = obj.sumRange(i,j)
 */
