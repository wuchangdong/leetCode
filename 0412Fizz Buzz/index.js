/**
 * @file fizz-buzz
 * @author wuchangdong
 */

/**
 * @param {number} n
 * @return {string[]}
 */

var fizzBuzz = function (n) {
    return Array.apply(null, {
        length: n
    }).map((item, index) => {
        index++;
        const mob3 = index % 3;
        const mob5 = index % 5;
        if (mob3 === 0 && mob5 === 0) {
            return 'FizzBuzz';
        }
        if (mob3 === 0) {
            return 'Fizz';
        }
        if (mob5 === 0) {
            return 'Buzz';
        }
        return String(index);
    });
};
