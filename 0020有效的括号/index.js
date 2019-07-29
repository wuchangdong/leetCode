/**
 * @file valid-parentheses
 * @author wuchangdong
 */

/**
 * @param {string}
 * @return {boolean}
 */

var isValid = function (s) {
    const map = {
        '(': ')',
        '{': '}',
        '[': ']'
    };
    let arr = [];
    for (let i = 0; i < s.length; i++) {
        // 判断当前是不是 key
        if (map[s[i]] !== undefined) {
            arr.push(s[i]);
        }
        else {
            // 判断栈顶元素是不是与 s[i] 匹配 之后出栈
            if (map[arr.pop()] !== s[i]) {
                return false;
            }
        }
    }
    if (arr.length === 0) {
        return true;
    }
    return false;
};