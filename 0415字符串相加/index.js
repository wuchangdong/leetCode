/**
 * @file add-strings
 * @author wuchangdong
 */

/**
 * @param {string} num1
 * @param {string} num2
 * @return {string}
 */

var addStrings = function (num1, num2) {
    // 进位
    let carry = 0;
    const maxLen = Math.max(num1.length, num2.length);
    num1 = num1.padStart(maxLen);
    num2 = num2.padStart(maxLen);
    let str = '';
    for (let i = maxLen - 1; i > -1; i--) {
        let sum = carry + (+num1[i]) + (+num2[i]);
        str = `${sum % 10}${str}`;
        carry = sum / 10 | 0;
    }
    if (carry > 0) {
        str = `${carry}${str}`;
    }
    return str;
};

