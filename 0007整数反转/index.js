/**
 * @file reverse-integer
 * @author wuchangdong
 */

/**
 * @param {number} x
 * @return {number}
 */

var reverse = function (x) {
    var symbol = 1;
    if (x < 0) {
        symbol = -1;
    }
    x = symbol * x;
    let arr = [];
    let remainder;
    while (x) {
        remainder = x % 10;
        arr.push(remainder);
        x = (x - remainder) / 10;
    }
    var sum = 0;
    while (arr.length) {
        sum = sum * 10 + arr.shift();
    }
    if (sum > Math.pow(2, 31)) {
        return 0;
    }
    return sum * symbol;
};

var reverse = function (x) {
    var symbol = 1;
    if (x < 0) {
        symbol = -1;
    }

    x = x * symbol;

    x = parseFloat(x.toString().split('').reverse().join(''));

    if (x > Math.pow(2, 31)) {
        return 0;
    }

    return x * symbol;

};