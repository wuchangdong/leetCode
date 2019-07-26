/**
 * @file palindrome-number
 * @author wuchangdong
 */

/**
 * @param {number} x
 * @return {boolean}
 */

var isPalindrome = function (x) {
    if (x < 0 || (x % 10 === 0 && x !== 0)) {
        return false;
    }
    return String(x) === String(x).split('').reverse().join('');
};

var isPalindrome = function (x) {
    if (x < 0 || (x % 10 === 0 && x !== 0)) {
        return false;
    }
    let revertedNumber = 0;
    while (x > revertedNumber) {
        revertedNumber = revertedNumber * 10 + x % 10;
        x = parseInt(x / 10, 10);
    }
    return x === revertedNumber || x === parseInt(revertedNumber / 10, 10);
};

var isPalindrome = function (x) {
    const y = String(x);
    for (let i = 0; i < y.length / 2; i++) {
        if (y[i] !== y[y.length - 1 - i]) {
            return false;
        }
    }
    return true;
};


