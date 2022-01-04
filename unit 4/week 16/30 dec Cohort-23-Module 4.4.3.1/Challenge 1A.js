/*
Challenge 1A
------------------------------------------------------------------------
https://oj.masaischool.com/contest/2699/problem/02
Password : 29243
------------------------------------------------------------------------
Description

Sam is the owner of gym and he gives advice to all his body-builders 
and he needs to prepare them such that the sum of their strengths is maximum.

A builder having original strength s, after eating protein bar of 
calorie value c will have strength s*c

Each protein bar can be eaten only once and by only one person.
------------------------------------------------------------------------
Input Format:

The first line of the input will consist of n, the number of 
body-builders as well as the number of protein bars.

The second line will consist of n space-separated integers 
s[i], the original strength of body-builders

The third line consists of n space-separated integers c[i], 
the calorie value of protein bars.
------------------------------------------------------------------------
Constraints:

1 ≤ n ≤ 10^6
1 ≤ si ≤ 10^6
1 ≤ ci ≤ 10^6
------------------------------------------------------------------------
Output:

An integer which is the maximum value of sum of the final strengths 
of the body-builders that can be obtained.
------------------------------------------------------------------------
Sample Input 1 

2
3 1
4 3
------------------------------------------------------------------------
Sample Output 1

15
------------------------------------------------------------------------*/
function runProgram(input) {
  a = input.split("\n");
  
  let t = + a[0];
  let A = a[1].split(" ").map(Number).sort( (a,b) => b - a )
  let B = a[2].split(" ").map(Number).sort( (a,b) => b - a )
  let sum = 0;
  for( let i = 0 ; i < t ; i ++ ){
      sum += A[i]*B[i]
  }
  console.log(sum)
  
}