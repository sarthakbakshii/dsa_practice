/*
Height of trees 
==================================================================
https://oj.masaischool.com/contest/2808/problem/04
Password : 29130
==================================================================
Description

You are given n trees and their heights. Your task is to write a 
program that calculates the maximum number of trees whose height 
is in increasing order. They need not be in continuous manner.

For instance, 
if heights of 9 trees are 10, 22, 9, 33, 21, 50, 41, 60, 80. 
The maximum number of trees whose height is in increasing 
order is 6 : (10, 22, 33, 50, 60, 80).

(9,21, 41, 60, 80) is also in increasing manner but you need 
to find the maximum number of trees whose height is increasing. 
So, the answer is 6
==================================================================
Input Format

First line contains n
Next line contains n space separated integers 
which representing heights of n trees.
==================================================================
Constraints

n <= 1000
==================================================================
Output Format

Output the max number of trees whose height is in increasing order
==================================================================
Sample Input 1 

9
10 22 9 33 21 50 41 60 80
==================================================================
Sample Output 1

6
==================================================================*/

function runProgram(input) {
    
    let a = input.split("\n");
    let n = + a[0];
    let arrayOfHeights = a[1].split(" ").map(Number);
    
    let dp= []   // dp array of same size as arrayOfHeights
    let maxValue = -1
    
    // Initialize dp array as 1
    for( i = 0; i<n; i++)  dp[i] = 1
    
    // Longest Increasing Subsequence condition
    for(let i=0;i<n;i++) {
              for(let j=i+1;j<n;j++) {
                if(arrayOfHeights[j]>arrayOfHeights[i]) {
                    dp[j]= Math.max(dp[j],dp[i]+1);
                    
                    if(maxValue < dp[j] ) maxValue = dp[j]  // Find Max Of Dp array
                }
            }
        }
    
    //we can find te max out of dp array in saprate for loop too,
    // but why to add 1 more for loop if we can do it for givien above
    
    console.log(maxValue)
        
  
}