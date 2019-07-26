/**
 * @file longest-common-prefix
 * @author wuchangdong
 */

/**
 * @param {string[]} strs
 * @return {string}
 */

var longestCommonPrefix = function (strs) {
    if (!strs.length) {
        return '';
    }
    let minLen = strs[0].length;
    let flag;
    let first;
    let str = '';
    strs.forEach(item => {
        if (minLen > item.length) {
            minLen = item.length;
        }
    });
    for (let i = 0; i < minLen; i++) {
        first = strs[0][i];
        flag = strs.every(item => {
            if (item[i] === first) {
                return true;
            }
            return false;
        });
        if (flag) {
            str += first;
        }
        else {
            break;
        }
    }
    return str;
};
var longestCommonPrefix = function (strs) {
    if (!strs.length) {
        return '';
    }
    if (strs.length === 1) {
        return strs[0];
    }
    let minStrLength = strs[0].length;
    strs.forEach(item => {
        if (item.length < minStrLength) {
            minStrLength = item.length;
        }
    });
    let str = '';
    let strItem;
    let strNextItem;
    for (let i = 0; i < minStrLength; i++) {
        for (let j = 0; j < strs.length - 1; j++) {
            strItem = strs[j][i];
            strNextItem = strs[j + 1][i];
            if (strItem !== strNextItem) {
                return str;
            }
        }
        str += strItem;
    }
    return str;
};