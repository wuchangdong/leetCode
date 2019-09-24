/**
 * @file find-the-difference
 * @author wuchangdong
 */

/**
 * @param {string} s
 * @param {string} t
 * @return {character}
 */

var findTheDifference = function (s, t) {
    let code = 0;
    //  a ^ b ^ b = a ^ 0 = a
    // 通过位运算消除相同元素
    for (let i = 0; i < s.length; i++) {
        code ^= s.charCodeAt(i);
        code ^= t.charCodeAt(i);
    }
    code ^= t.charCodeAt(t.length - 1);
    return String.fromCharCode(code);
};
