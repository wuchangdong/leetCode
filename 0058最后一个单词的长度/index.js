/**
 * @file length-of-last-word
 * @author wuchangdong
 */

/**
 * @param {string} s
 * @return {number}
 */

var lengthOfLastWord = function (s) {
    const arr = s.split(' ');
    let index = arr.length;
    while (index--) {
        const item = arr[index];
        if (item) {
            return item.length;
        }
    }
    return 0;
};

var lengthOfLastWord = function (s) {
    s = s.trim();
    if (s === '') {
        return 0;
    }
    return s.lastIndexOf(' ') === -1 ? s.length : s.length - 1 - s.lastIndexOf(' ');
};