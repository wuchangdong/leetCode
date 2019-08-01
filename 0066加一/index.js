/**
 * @file plus-one
 * @author wuchangdong
 */

/**
 * @param {number[]} digits
 * @return {number[]}
 */

// 主要考虑 [9] 变成 [1, 0] 和 js精度缺失问题
var plusOne = function (digits) {
    let arr = [];
    let add = 1;
    for (let i = digits.length - 1; i >= 0; i--) {
        if (digits[i] + add === 10) {
            add = 1;
            arr.unshift(0);
        }
        else {
            arr.unshift(digits[i] + add);
            add = 0;
        }
    }
    if (add) {
        arr.unshift(1);
    }
    return arr;
};