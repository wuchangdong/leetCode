/**
 * @file best-time-to-buy-and-sell-stock-ii
 * @author wuchangdong
 */

/**
 * @param {number[]} prices
 * @return {number}
 */

var maxProfit = function (prices) {
    if (prices.length <= 1) {
        return 0;
    }
    let max = 0;
    let cur = prices[0];
    for (let i = 0; i < prices.length; i++) {
        const item = prices[i];
        if (item < cur) {
            cur = item;
        }
        else {
            max += item - cur;
            cur = item;
        }
    }
    return max;
};