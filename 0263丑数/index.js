/**
 * @file ugly-number
 * @author wuchangdong
 */

/**
 * @param {number} num
 * @return {boolean}
 */

var isUgly = function (num) {
    if (num < 1) {
        return false;
    }
    while (num % 5) {
        num /= 5;
    }
    while (num % 3) {
        num /= 3;
    }
    while (num % 2) {
        num >>= 1;
    }
    return num === 1;
};
