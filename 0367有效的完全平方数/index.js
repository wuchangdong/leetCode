/**
 * @file valid-perfect-square
 * @author wuchangdong
 */

/**
 * @param {number} num
 * @return {boolean}
 */

var isPerfectSquare = function (num) {
    let low = 1;
    let high = num;
    while (low <= high) {
        let mid = Math.floor((low + high) / 2);
        const squareNum = mid * mid;
        if (squareNum === num) {
            return true;
        }
        if (squareNum > num) {
            high = mid - 1;
        }
        else {
            low = low + 1;
        }
    }
    return false;
};
