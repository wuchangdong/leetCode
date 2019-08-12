/**
 * @file valid-palindrome
 * @author wuchangdong
 */

/**
 * @param {string} s
 * @return {boolean}
 */

var isPalindrome = function (s) {
    if (s === '') {
        return true;
    }
    s = s.replace(/[^A-Za-z0-9]/g, '').toLowerCase();
    return s === s.split('').reverse().join('');
};