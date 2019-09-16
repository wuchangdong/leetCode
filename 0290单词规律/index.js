/**
 * @file word-pattern
 * @author wuchangdong
 */

/**
 * @param {string} pattern
 * @param {string} str
 * @return {boolean}
 */

var wordPattern = function (pattern, str) {
    const arr = str.split(' ');
    if (pattern.length !== arr.length) {
        return false;
    }
    let patternMap = {};
    let strMap = {};
    for (let i = 0; i < pattern.length; i++) {
        if (patternMap[pattern[i]] === undefined) {
            if (strMap[arr[i]] !== undefined) {
                return false;
            }
            patternMap[pattern[i]] = arr[i];
            strMap[arr[i]] = pattern[i];
        }
        else if (patternMap[pattern[i]] !== arr[i]) {
            return false;
        }
    }
    return true;
};
