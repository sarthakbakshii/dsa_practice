/*
Beyond Factorial! 
------------------------------------------------------------------------------------------------------------------
https://oj.masaischool.com/contest/2484/problem/01
Password : 29167
------------------------------------------------------------------------------------------------------------------
Description

Given an integer N, you have to find the natural logarithmic value of the given integer's factorial i.e., ln(n!).
You have to print the result up to 4 digits after the decimal point.
Note:- You should not be supposed to do like " finding n! and apply direct inbuilt log on top that ". Instead of that, you can use Math.log() if applicable.Also, you can't use any direct formula or perform the task iteratively - Try achieving the output recursively.
Java Script:https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Number/toFixed
------------------------------------------------------------------------------------------------------------------
Input format

Single line consists an integer N
------------------------------------------------------------------------------------------------------------------
Constraints

1 <= N <= 50
------------------------------------------------------------------------------------------------------------------
Output

Print the result in a single line.
------------------------------------------------------------------------------------------------------------------
Sample Input 1 

3
------------------------------------------------------------------------------------------------------------------
Sample Output 1

1.7918`
------------------------------------------------------------------------------------------------------------------*/

//   logicbehind factorial : 3! = 3*2! = 3*2*1! 
//                           n! = n*(n-1)!     && 1! == 1

const fact = a =>{
    if( a== 1) return 1;
    return a*fact(a-1) ;
}

function runProgram(input) {
    let factNum = fact(input) ;
    let logv = Math.log(factNum);
    console.log(logv.toFixed(4));
}