/**
 * @file factorial-trailing-zeroes
 * @author wuchangdong
 */

/**
 * @param {number} n
 * @return {number}
 */

var trailingZeroes = function (n) {
    let count = 0;
    while (n >= 5) {
        const num = Math.floor(n / 5);
        count += num;
        n = num;
    }
    return count;
};
