/*
Masai Monetary System 
==================================================================
https://oj.masaischool.com/contest/2808/problem/04
Password : 29130
==================================================================
Description

In Masai, they have a very strange monetary system.

Each Masaian gold coin has an integer number written on it. A 
coin n can be exchanged in a bank into three coins: n/2, n/3 and n/4. 
But these numbers are all rounded down (the banks have to make a profit).

You can also sell Masaian coins for Indian Rupees. The exchange rate 
is 1:1. But you can not buy Masaian coins.

You have one gold coin. What is the maximum amount of Indian Rupees 
you can get for it?
==================================================================
Input Format

The input will contain several test cases (not more than 10). 
Each test case is a single line with a numbern. It is the number 
written on your coin.
==================================================================
Constraints

0 <=n<= 1 000 000 000
==================================================================
Output
For each test case output a single line, containing the maximum amount of Indian Rupees you can make.
==================================================================
Sample Input 1 

12
2
==================================================================
Sample Output 1

13
2
==================================================================*/

const dinamicPr = ( n , arr  ) =>{
     if(n <=11 ){
        return n
    }
    if(arr[n] !== undefined ){
        return arr[n]
    }
    direct = n;
    split = dinamicPr( Math.floor(n/2), arr) + 
            dinamicPr( Math.floor(n/3), arr) + 
            dinamicPr( Math.floor(n/4), arr) ; 
            
    arr[n] = Math.max(direct,split)
    return arr[n]
}



function runProgram(input) {
    input = input.split("\n");
  
    for(let i = 0 ; i < input.length ; i++){
        let arr = []
        console.log( dinamicPr(input[i], arr) )
    }
}