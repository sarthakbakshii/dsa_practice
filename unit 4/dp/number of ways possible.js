/*
Different ways as a Sum 
==================================================================
https://oj.masaischool.com/contest/2808/problem/01
Password : 29130
==================================================================
Description

Let us say that you are given a number N, you've to find the number 
of different ways to write it as the sum of 1, 3 and 4.

For example, if N = 5, the answer would be 6.

1 + 1 + 1 + 1 + 1

1 + 4

4 + 1

1 + 1 + 3

1 + 3 + 1

3 + 1 + 1
==================================================================

Input

First and the only line contains the value of N
==================================================================
Constraints

N <= 50
==================================================================
Output
Output the number of ways
==================================================================

Sample Input 1 

5
==================================================================
Sample Output 1

6
==================================================================*/

// const recursion = n =>{
//     if(n === 0) return 1;
//     if( n < 0) return 0;
//     return recursion(n-1) + recursion(n-3) + recursion(n-4) ; 
// }

const dinamicPr = ( n , arr  ) =>{
    if( n == 0) return 1;
    if (n < 0) return 0;
    if(arr[n] !== undefined ){
        return arr[n]
    }
    arr[n] = dinamicPr(n-1, arr) + dinamicPr(n-3, arr) + dinamicPr(n-4, arr) ;
    return arr[n]
}



function runProgram(input) {
    
    let arr = new Array(input+1);
//  console.log( recursion(input) )

console.log( dinamicPr(input, arr) )
 
  
  
  
}