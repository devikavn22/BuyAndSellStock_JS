/**
 * @param {number[]} prices
 * @return {number}
 */
var maxProfit = function (prices) {
    let left = 0; //Buy  
    let maxProfit = 0;

    for (let right = 1; right < prices.length; right++) {  //right=1; Sell    L<R makes profit
        if (prices[left] < prices[right]) {
            let profit = prices[right] - prices[left];
            maxProfit = Math.max(maxProfit, profit);
        } else {
            left = right;
        }
    }
    return maxProfit;
};

console.log(maxProfit([7, 1, 5, 3, 6, 4])); // 5


/* 
Two-Pointer Approach:

1. The left pointer tracks the day to buy (the lowest price seen so far).
2. The right pointer moves through the array and checks if the current price 
at right results in a higher profit when bought at left and sold at right.
3. If a new lower price is found (i.e., prices[right] < prices[left]), the left pointer 
is updated to right, since we want to buy at the lowest price possible.
4. The profit is calculated as prices[right] - prices[left] when prices[right] > prices[left], 
and the maximum profit is updated accordingly.

Iteration:

The right pointer starts from the second element (index 1) and moves 
forward to check the profit for each day after the left pointer.
For each step, we either update the max_profit or adjust the left 
pointer to ensure the lowest buy price is selected. 


Time Complexity:

O(n): The algorithm runs in linear time because we traverse the prices array exactly once. 
The right pointer moves through the entire array,and the left pointer only shifts 
forward when needed, but no element is revisited or checked multiple times. 
This makes the algorithm very efficient, especially for larger input sizes (n being the length of the prices array).

Space Complexity:

O(1): The space complexity is constant because we are only using 
a few variables (left, right, and maxProfit), regardless of the input size. 
No additional data structures are used that scale with the input size.

*/
