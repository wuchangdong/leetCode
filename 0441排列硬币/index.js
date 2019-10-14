/**
 * @file arranging-coins
 * @author wuchangdong
 */

/**
 * @param {number} n
 * @return {number}
 */


// (1 + i) * i / 2 = n;
var arrangeCoins = function (n) {
    let max = Math.floor(Math.sqrt(2 * n));
    if (max * (max + 1) > 2 * n) {
        max = max - 1;
    }
    return max;
};