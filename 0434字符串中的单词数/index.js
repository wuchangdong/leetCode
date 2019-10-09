/**
 * @file number-of-segments-in-a-string
 * @author wuchangdong
 */

/**
 * @param {string} s
 * @return {number}
 */

var countSegments = function (s) {
    let count = 0;
    let flag = true;
    for (let i = 0; i < s.length; i++) {
        if (s[i] === ' ') {
            flag = true;
        }
        else if (flag) {
            flag = false;
            count++;
        }
    }
    return count;
};