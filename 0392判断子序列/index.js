/**
 * @file is-subsequence
 * @author wuchangdong
 */

/**
 * @param {string} s
 * @param {string} t
 * @return {boolean}
 */

var isSubsequence = function (s, t) {
    let index = 0;
    for (let i = 0; i < s.length; i++) {
        index = t.indexOf(s[i], index);
        if (index === -1) {
            return false;
        }
        index++;
    }
    return true;
};
