/*
K odd subset II
----------------------------------------------------------
https://oj.masaischool.com/contest/2601/problem/04
Password : abb74eab
----------------------------------------------------------
Description

Given an array A having N positive integers. Count the 
number of non-empty subsets of array A such that each 
subset has exactly K odd numbers.
----------------------------------------------------------
Input

First line: Single integer denoting the value of T - 
the number of test cases.

For each test case:
First line: Two single space-separated integers denoting the values of N and K.
Next line: N single space-separated integers denoting the elements of array A.
----------------------------------------------------------
Constraints:

1 <= T <= 100
1 <= N, K <= 15
1 <= A[ i ] <= 100
----------------------------------------------------------
Output

For each test case, print in a new line, a single integer 
denoting the required count of subsets.
----------------------------------------------------------
Sample Input 1 

2
4 2
4 3 2 1
2 1
2 3
----------------------------------------------------------
Sample Output 1

4
2
----------------------------------------------------------
Hint

Given test cases:

Test case 1:

N = 4, K = 2, A: [ 4, 3, 2, 1 ].
Subsets which has exactly two odd numbers are:
{ 4,3,2,1 }, { 3, 2, 1 }, { 3, 1 },{4, 3, 1}.
Test case 2:

N = 2, A: [ 2, 3 ].
Subsetswhich has exactly one odd number are:
{3}, {2, 3}.
---------------------------------------------------------- */

function runProgram(input) {
  a = input.split("\n");
  let t = +a[0];
  let line = 1;
  for (let i = 0; i < t; i++) {
    let [n, k] = a[line].split(" ").map(Number);
    line++;

    let arr = a[line].split(" ").map(Number);
    line++;

    //   console.log(n,k,arr)
    // -------------------------------------------------------------------

    const subset = (arr, k, ans = [], current = 0) => {
      if (ans.length >= 0) {
        // console.log(ans);

        let count = 0;
        only_N_Odd(ans, k, count);
      }
      if (current == arr.length) return;

      for (let i = current; i < arr.length; i++) {
        ans.push(arr[i]);
        subset(arr, k, ans, i + 1);
        ans.pop();
      }
    };
    let ansArr = [];
    const only_N_Odd = (arr, k, count) => {
      // console.log(arr, k);

      odd = 0;
      for (let i = 0; i < arr.length; i++) {
        if (arr[i] % 2 == 1) odd++;
      }

      if (odd === k) {
        count++;
        //  console.log(arr, k);
      }
      ansArr.push(count);
    };
    // -------------------------------------------------------------------
    subset(arr, k);
    // console.log(ansArr)
    // ---------------------------
    let sum = 0;
    ansArr.map((a) => (sum += a));
    console.log(sum);
  }
}
