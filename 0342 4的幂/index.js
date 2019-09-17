/**
 * @file power-of-four
 * @author wuchangdong
 */

/**
 * @param {number} num
 * @return {boolean}
 */

var isPowerOfFour = function (num) {
    if (num < 1) {
        return false;
    }
    // 判断是否是2的幂
    if ((num & (num - 1)) === 0) {
        // 每次右移两位 最后判断是否等于1
        while (num > 1) {
            num >>= 2;
        }
        return num === 1;
    }
    return false;
};
