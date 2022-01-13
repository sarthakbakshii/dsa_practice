/*Fibonacci Returns Again 
==================================================================
https://oj.masaischool.com/contest/2808/problem/03
Password : 29130
==================================================================
Description

Fibonacci numbers, commonly denoted Fn form a sequence, called the 
Fibonacci sequence, such that each number is the sum of the two 
preceding ones, starting from 0 and 1. That is,

F(0) = 0

F(1) = 1

Given an integer n, calculate n-th fibonacci number

DO IT RECURSIVELY
==================================================================

Input
Input Format :

First line of input contains n
==================================================================
Constraints :
n <= 50
==================================================================

Output
Output the n-th fibonacci

==================================================================
Sample Input 1 

5
==================================================================
Sample Output 1

5
==================================================================*/


const dinamicPr = ( n , arr  ) =>{
    if( n == 0) return 0;
    if (n == 1) return 1;
    if(arr[n] !== undefined ){
        return arr[n]
    }
    arr[n] = dinamicPr(n-1, arr) + dinamicPr(n-2, arr) ;
    return arr[n]
}



function runProgram(input) {
    
    let arr = new Array(input+1);
//  console.log( recursion(input) )

console.log( dinamicPr(input, arr) )
 
  
  
  
}