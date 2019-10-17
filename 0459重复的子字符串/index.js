/**
 * @file repeated-substring-pattern
 * @author wuchangdong
 */

/**
 * @param {string} s
 * @return {boolean}
 */

var repeatedSubstringPattern = function (s) {
    let str = s + s;
    return str.slice(1, -1).indexOf(s) !== -1;
};
