/**
 * @file climbing-stairs
 * @author wuchangdong
 */

/**
 * @param {number} n
 * @return {number}
 */

var climbStairs = function (n) {
    if (n === 1) {
        return 1;
    }
    else if (n === 2) {
        return 2;
    }
    let arr = new Array(n);
    arr[0] = 1;
    arr[1] = 2;
    for (let i = 2; i < n; i++) {
        arr[i] = arr[i - 1] + arr[i - 2];
    }
    return arr[n - 1];
};

var climbStairs = function (n) {
    if (n === 1) {
        return 1;
    }
    else if (n === 2) {
        return 2;
    }
    let a = 1;
    let b = 2;
    let index = 2;
    while (index++ < n) {
        let sum = a + b;
        a = b;
        b = sum;
    }
    return b;
};
