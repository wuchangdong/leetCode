/**
 * @file reverse-vowels-of-a-string
 * @author wuchangdong
 */

/**
 * @param {string} s
 * @return {string}
 */

var reverseVowels = function (s) {
    const arr = s.split('');
    let leftIndex = 0;
    let rightIndex = arr.length - 1;
    const hash = {
        'a': true,
        'e': true,
        'i': true,
        'o': true,
        'u': true,
        'A': true,
        'E': true,
        'I': true,
        'O': true,
        'U': true
    };
    while (leftIndex < rightIndex) {
        while (leftIndex < rightIndex && !hash[arr[leftIndex]]) {
            leftIndex++;
        }
        while (leftIndex < rightIndex && !hash[arr[rightIndex]]) {
            rightIndex--;
        }
        if (leftIndex < rightIndex) {
            const tmp = arr[leftIndex];
            arr[leftIndex] = arr[rightIndex];
            arr[rightIndex] = tmp;
        }
    }
    return arr.join('');
};
