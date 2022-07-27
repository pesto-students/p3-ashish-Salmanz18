//todo: Best time to buy and sell stock
//You are given an array prices where prices[i] is the price of a given stock on the ith day.
//You want to maximize your profit by choosing a single day to buy one stock and
//choosing a different day in the future to sell that stock.Return the maximum profit you
//can achieve from this transaction. If you cannot achieve any profit, return 0.

//*Pseudocode
/* -Create a variable to store the maximum price
    -create another variable to track the minimum prices and set it to the first value in the array
    -loop through the prices array starting from index 1 as your selling price to get the profit, 
    -you minus the minPrice from the sellPrice
    -If the profit is greater than the max profit, 
    -replace the value of MaxProfit with the profit value in other to calculate the profit for other values, 
    -check to see if the current value which is the sellingPrice is less than the minPrice value. 
    -If it is, set the current value which is the selling price to the minPrice.
    -return maxProfit
*/

function maxProfit(prices) {
    let maxProfit = 0;
    let minPrice = prices[0];

    for (let sell = 1; sell < prices.length; sell++) {
        let sellPrice = prices[sell];
        let profit = sellPrice - minPrice;

        maxProfit = Math.max(maxProfit, profit);

        if (sellPrice < minPrice) minPrice = sellPrice;
    }
    return maxProfit;
}
