/**
 * @file assign-cookies
 * @author wuchangdong
 */

/**
 * @param {number[]} g
 * @param {number[]} s
 * @return {number}
 */

var findContentChildren = function (g, s) {
    g = g.sort((a, b) => a - b);
    s = s.sort((a, b) => a - b);
    let count = 0;
    let startIndex = 0;
    for (let i = 0; i < g.length; i++) {
        while (startIndex < s.length) {
            if (s[startIndex++] >= g[i]) {
                count++;
                break;
            }
        }
    }
    return count;
};
