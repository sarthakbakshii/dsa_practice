/*
Sum with Recursion Again
========================================================
Description

You are given an array and you have to find the sum 
of the absolute difference between consecutive 
elements of the array.

For instance, if the array is 3,5,6,1,8
Absolute of (3-5) = 2
Absolute of (5-6) = 1
Absolute of (6-1) = 5
Absolute of (1-8) = 7
------------------------
Sum of all absolute = 15
------------------------

**The only constraint is that you cannot write an 
iterative code. You have to write a recursive code only
========================================================
Input

There are several test cases. Each test case starts 
with **t** which is the total number of test cases 
present

Each test case has 2 lines:

Line 1 : Number of integers present in the array
Line 2 : The integers present in the array
========================================================
Constraints

n <= 10000
arr[i] <= 15
========================================================
Output

Output one number(the sum) per test case
========================================================
Sample Input 1 

2
3
1 5 2
5
3 5 6 1 8
========================================================
Sample Output 1

7
15
========================================================*/

 const check = (arr,c = 1, sum = 0) => {
    if( arr.length == c) {
        console.log(sum)
        return;
    }
    sum += Math.abs( arr[c] - arr[c-1] ) ;
    return check(arr, c+1, sum)
 }
 
const runPreogram = a => {
    a = a.split("\n");
    let t = + a[0];
    let line = 1;

    for(let i = 0; i < t ; i++){
        let n = + a[line] ;
        line++;
        let arr = a[line].split(" ").map(Number);
        line++ ;
        
        check(arr)
    }
}

runPreogram(
`2
3
1 5 2
5
3 5 6 1 8`
)