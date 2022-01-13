/*
Such Pair Returns 
------------------------------------------------------------------------
https://oj.masaischool.com/contest/2699/problem/06
Password : 29243
------------------------------------------------------------------------
Description

For each test case, you are given N integers and K, your task is to 
write a program that prints "1" (without quotes) if there are 2 integers 
present in the array whose sum is K. Else print "-1" (without quotes).
------------------------------------------------------------------------
Input

10^6 Input Format :

First line contains T, no of test cases.
First line of each test case contains 2 space separated integers: N & K
Second line of each test case contains **N** space separated integers
------------------------------------------------------------------------
Constraints :

1 <= T <= 10
1 <= N <=1000000
1 <= abs(A[i]) <=10^6<= abs(K) <= 2*10^6
------------------------------------------------------------------------
Output

Output 1/-1 depending on the condition for each test case on new line
------------------------------------------------------------------------
Sample Input 1 

1
5 2
3 4 0 2 7
------------------------------------------------------------------------
Sample Output 1

1
------------------------------------------------------------------------*/
const check = (n,k,arr) => {
    arr = arr.sort( (a,b) => a-b)
     
   let left = 0;
   let right = n-1;
   while(left < right){
    //   console.log(arr[left], arr[right])
       sum = arr[left] + arr[right];
       if( sum == k ) return 1
       if( sum > k) right --;
       else left ++
   }
   return -1
}


function runProgram(input) {
  a = input.split("\n");
  
  let t = + a[0];
  let line = 1 ;
  for(let i = 0 ; i  < t ; i ++ ){
      let  [n,k] = a[line].split(" ").map(Number)
      line++;
      let arr = a[line].split(" ").map(Number);
      line++;
      
   console.log(   check(n, k, arr)   )
  }
  
  
}