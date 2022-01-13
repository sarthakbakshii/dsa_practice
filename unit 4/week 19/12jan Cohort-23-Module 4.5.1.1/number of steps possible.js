/*
Number of ways problems Returns 
==================================================================
https://oj.masaischool.com/contest/2808/problem/02
Password : 29130
==================================================================
Description

Sandhya is running up a staircase with N steps, and can hop(jump) 
either 1 step, 2 steps or 3 steps at a time. You have to count, 
how many possible ways Sandhya can run up to the stairs.
==================================================================
Input Format :

Input contains integer N that is number of steps
==================================================================
Constraints :

N <= 50
==================================================================
Output
Output for each integer N the no of possible ways w.
==================================================================
Sample Input 1 

4
==================================================================
Sample Output 1

7
==================================================================*/

const dinamicPr = ( n , arr  ) =>{
    if( n == 0) return 1;
    if (n < 0) return 0;
    if(arr[n] !== undefined ){
        return arr[n]
    }
    arr[n] = dinamicPr(n-1, arr) + dinamicPr(n-3, arr) + dinamicPr(n-2, arr) ;
    return arr[n]
}



function runProgram(input) {
    
    let arr = new Array(input+1);
//  console.log( recursion(input) )

console.log( dinamicPr(input, arr) )
 
  
  
  
}