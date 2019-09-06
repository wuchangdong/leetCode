/**
 * @file valid-anagram
 * @author wuchangdong
 */

// 字母异位词: 两个单词中出现的字母与个数都相同

/**
 * @param {string} s
 * @param {string} t
 * @return {boolean}
 */

var isAnagram = function (s, t) {
    if (s.length !== t.length) {
        return false;
    }
    const map = {};
    for (let i = 0; i < s.length; i++) {
        map[s[i]] = map[s[i]] === undefined ? 1 : map[s[i]] + 1;
        map[t[i]] = map[t[i]] === undefined ? -1 : map[t[i]] - 1;
    }
    for (let key in map) {
        if (map[key] !== 0) {
            return false;
        }
    }
    return true;
};
