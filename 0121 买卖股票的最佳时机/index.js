/**
 * @file best-time-to-buy-and-sell-stock
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
    let min = prices[0];
    let max = 0;
    for (let i = 1; i < prices.length; i++) {
        max = Math.max(max, prices[i] - min);
        min = Math.min(min, prices[i]);
    }
    return max;
};
