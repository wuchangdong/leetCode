/**
 * @file roman-to-integer
 * @author wuchangdong
 */

/**
 * @param {string} s
 * @return {number}
 */
var romanToInt = function (s) {
    const map = {
        'I': 1,
        'V': 5,
        'X': 10,
        'L': 50,
        'C': 100,
        'D': 500,
        'M': 1000
    };
    let num = 0;
    let symbol = 1;
    for (let i = 0; i < s.length; i++) {
        symbol = 1;
        if (i < s.length - 1) {
            if (map[s[i + 1]] > map[s[i]]) {
                symbol = -1;
            }
        }
        num += symbol * map[s[i]];
    }
    return num;
};
