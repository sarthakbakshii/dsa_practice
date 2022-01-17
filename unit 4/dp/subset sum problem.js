/*
subset sum problem

similer to Knapsack

arr = [2,3,7,8,10]
sum = 11     and here to we have choice to take arr[i] or Notification
*/

arr = [2,3,7,8,10]
sum = 11
let dp = []

for (let i = 0 ; i < arr.length ; i++){
    dp[i] = new Array(sum).fill(-1)
}
console.log(dp)