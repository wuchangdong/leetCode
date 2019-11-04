/**
 * @file construct-the-rectangle
 * @author wuchangdong
 */

/**
 * @param {number} area
 * @return {number[]}
 */

var constructRectangle = function (area) {
    const sqrt = Math.ceil(Math.sqrt(area));
    let width = sqrt;
    let length = sqrt;
    while (width * length !== area) {
        if (width * length < area) {
            width++;
        }
        else {
            length--;
        }
    }
    return [width, length];
};
