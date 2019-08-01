/**
 * @file add-binary
 * @author wuchangdong
 */

/**
 * @param {string} a
 * @param {string} b
 * @return {string}
 */

var addBinary = function (a, b) {
    a = a.split('').reverse();
    b = b.split('').reverse();
    const maxLength = a.length > b.length ? a.length : b.length;
    let add = 0;
    let arr = [];
    for (let i = 0; i < maxLength; i++) {
        const sum = parseInt(a[i] || 0, 10) + parseInt(b[i] || 0, 10) + add;
        if (sum >= 2) {
            arr.push(sum - 2);
            add = 1;
        }
        else {
            arr.push(sum);
            add = 0;
        }
    }
    if (add) {
        arr.push(1);
    }
    return arr.reverse().join('');
};