/*
SNE Right II
--------------------------------------------------
https://oj.masaischool.com/contest/2601/problem/08
Password : abb74eab
--------------------------------------------------
Description

Andy and Mark are playing a game of arrays.
The game involves finding the smallest neighbor 
element to the right side for each element 
in the array

Andy counts the number of elements which do have a 
smaller neighbor element to the right side. 
Help Andy find the count
--------------------------------------------------
Input:

First line contain an integer N denoting the number 
of elements in the array (not necessarily distinct).
Second line contains N space separated integers 
denoting the elements of the array.
--------------------------------------------------
Constraints:
N <= 100000
--------------------------------------------------
Output

Print a single integer denoting the number of 
elements which do have a smaller neighbor element 
to the right side
--------------------------------------------------
Sample Input 1 

5
4 2 1 3 7
--------------------------------------------------
Sample Output 1

2
--------------------------------------------------
Hint

The element at index0 and 1, do have a value smaller 
to the right side. Therefore, the answer is 2.
--------------------------------------------------*/

const smEle = (n,arr) =>{
    let s= [];
    let count = 0;
    for( i = n-1 ; i>= 0 ; i--){
        while(  ( s.length>0 ) && ( s[s.length - 1] >= arr[i] )   ) {
            s.pop()
        }
        if( s.length !== 0 ) count++;
        s.push(arr[i])
    }
    console.log( count )
}
function runProgram(input) {
  a = input.split("\n");
  let n = +a[0];
  let arr = a[1].split(" ").map(Number);
  smEle(n,arr)
  
  
  
}