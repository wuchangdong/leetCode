/**
 * @file isomorphic-strings
 * @author wuchangdong
 */

/**
 * @param {string} s
 * @param {string} t
 * @return {boolean}
 */

var isIsomorphic = function (s, t) {
    if (s.length !== t.length) {
        return false;
    }
    const sMap = {};
    const tMap = {};
    for (let i = 0; i < s.length; i++) {
        if (sMap[s[i]] === undefined) {
            if (tMap[t[i]] !== undefined) {
                return false;
            }
            sMap[s[i]] = t[i];
            tMap[t[i]] = s[i];
        }
        else if (sMap[s[i]] !== t[i]) {
            return false;
        }
    }
    return true;
};
