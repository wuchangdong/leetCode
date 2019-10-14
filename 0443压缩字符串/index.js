/**
 * @file string-compression
 * @author wuchangdong
 */

/**
 * @param {character[]} chars
 * @return {number}
 */

var compress = function (chars) {
    let rightIndex = chars.length - 1;
    while (rightIndex > -1) {
        let leftIndex = rightIndex;
        const target = chars[rightIndex];
        for (let i = rightIndex; i > -1; i--) {
            if (chars[i] === target) {
                leftIndex--;
            }
            else {
                break;
            }
        }
        const num = rightIndex - leftIndex;
        const numsArr = () => num.toString().split('');
        num > 1 && chars.splice(leftIndex + 2, num - 1, ...numsArr());
        rightIndex = leftIndex;
    }
    return chars.length;
};
