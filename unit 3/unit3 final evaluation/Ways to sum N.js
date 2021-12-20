/*
Ways to sum N
----------------------------------------------------------------------
https://oj.masaischool.com/contest/2601/problem/01
Password : abb74eab
----------------------------------------------------------------------
Description

Given an integer N. In how many ways you can add numbers 1, 2, and, 
5 such that the summation equals N. (Check sample input for more clarity)
----------------------------------------------------------------------
Input

First line: Single integer denoting the value of T - the 
number of test cases.

For each test case:

First line: Single integer denoting the value of N.
----------------------------------------------------------------------
Constraints:

1 <= T <= 100
1<= N <= 30
----------------------------------------------------------------------
Output

For each test case, print in a new line, a single integer 
denoting the required number of ways.
----------------------------------------------------------------------
Sample Input 1 

1
5
----------------------------------------------------------------------
Sample Output 1

9
----------------------------------------------------------------------
Hint

No of the ways for N=5 are:-

1 + 1 + 1 + 1 + 1
1 + 1 + 1 + 2
1 + 1 + 2 + 1
1 + 2 + 1 + 1
2 + 1 + 1 + 1
1 + 2 + 2
2 + 1 + 2
2 + 2 + 1
5
----------------------------------------------------------------------*/

const check = n => {
    if(n == 0) return 1;
    if(n < 0 ) return 0;
    return check(n-1) + check(n-2) + check(n-5)
}

function runProgram(input) {
  a = input.split("\n");
  const t = + a[0];
  let line = 1;
  for( let i = 0 ; i < t ; i ++){
      let n = +a[line];
      line++;
      
      console.log(check(n))
  }
  
  
  
}