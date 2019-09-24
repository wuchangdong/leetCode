/**
 * @file ransom-note
 * @author wuchangdong
 */

/**
 * @param {string} ransomNote
 * @param {string} magazine
 * @return {boolean}
 */

var canConstruct = function (ransomNote, magazine) {
    const map = {};
    for (let i = 0; i < magazine.length; i++) {
        if (map[magazine[i]] === undefined) {
            map[magazine[i]] = 1;
        }
        else {
            map[magazine[i]]++;
        }
    }
    for (let i = 0; i < ransomNote.length; i++) {
        if (map[ransomNote[i]] === undefined || map[ransomNote[i]] === 0) {
            return false;
        }
        else {
            map[ransomNote[i]]--;
        }
    }
    return true;
};