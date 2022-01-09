/*
Array Sum Maximization 
---------------------------------------------------------------------
Description

Given an array A of size n. You can fix any element of the array suppose 
Ai (i be any index of the array) and then all the elements in the array 
having the value greater than or equal to Ai becomes equal to Ai. Rest 
all the elements less than Ai gets multiplied by -1.

Find the maximum sum of the array possible after fixing an element.

Expected Time Complexity - O(nlogn)
---------------------------------------------------------------------
Input

The first line of the input contains one integer t (1 ≤ t ≤ 10) — the 
number of test cases. Then t test cases follow.

The first line of each test case contains a single integer n (1 ≤ n ≤ 10000) 
— the number of elements in the array A.

The second line of each test case contains n integers (1 ≤ Ai ≤ 10000).
---------------------------------------------------------------------
Output

For each test case, print the answer: The maximum sum possible.
---------------------------------------------------------------------
Sample Input 1 

2
3
2 3 1
5
1 6 7 1 5
---------------------------------------------------------------------
Sample Output 1

3
13
---------------------------------------------------------------------
Hint

Sample Input 1 :

arr = 2 3 1
Let's check the output by fixing all elements one by one, and then we will choose the maximum out of those

Case 1: If we fix arr[0]

Then, arr becomes = [ 2 2 -1]

Sum = 2 + 2 + (-1) = 3



Case 2:If we fix arr[1]

Then, arr becomes = [ -1 3 -1]

Sum = (-2) +3 + (-1) = 0



Case 3 :If we fix arr[2]

Then, arr becomes = [ 1 1 1]

Sum = 1 + 1 + 1 = 3



The maximum sum possible is 3.



Sample Input 2 :

arr = 1 6 7 1 5
Suppose, we fix arr[4]

arr = [-1 5 5 -1 5]

Sum = -1 + 5 + 5 + (-1) + 5 = 13
---------------------------------------------------------------------*/


const solution = (n, arr) =>{
   
    let ans = 0
    for(let j = 0 ; j < n ; j ++){
        
        let sum = sumConverter(arr, arr[j])
        // console.log( sum)
        if(ans < sum) ans = sum
    }
    console.log(ans)
}

const sumConverter = (arr, k) =>{
    
    let sum = 0;
    for(let i = 0 ; i < arr.length ; i ++){
        if( arr[i] >= k ) sum += k;
        else sum -= arr[i]
    }
    return sum
}


function runProgram(input) {
  a = input.split("\n");
  let t = + a[0]
  let line = 1;
  for( let i = 0 ; i < t ; i ++){
      let n = + a[line]; 
      line++;
      let arr = a[line].split(" ").map(Number);
      line++;
      
    //   console.log(n, arr)
      solution(n, arr)
  }
  
  
  
}