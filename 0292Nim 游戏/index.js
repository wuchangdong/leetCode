/**
 * @file nim-game
 * @author wuchangdong
 */

/**
 * @param {number} n
 * @return {boolean}
 */

// 给谁留下四个 谁就会输
var canWinNim = function (n) {
    return !!(n % 4);
};
