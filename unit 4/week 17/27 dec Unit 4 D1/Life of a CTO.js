/*
Life of a CTO
( first occourence )
--------------------------------------------------
https://oj.masaischool.com/contest/2663/problem/01
Password : 9c11a7a6
--------------------------------------------------
Sample Input 1 

5
0 0 0 1 1
--------------------------------------------------
Sample Output 1

3
--------------------------------------------------
Sample Input 2 

5
0 0 0 0 0 
--------------------------------------------------
Sample Output 2

-1
--------------------------------------------------
Hint
We need to find the first buggy version of the product,

Sample Input 1

arr = [ 0 0 0 1 1]

0 indicates No Bug, 1 indicates Bug

First Buggy Version of the product present at index 3, since arr[3] = 1.

Thus, the output is 3
--------------------------------------------------

Sample Input 2

arr = [ 0 0 0 0 0 ]

No Bug present.

Thus, the output is -1.
--------------------------------------------------*/

const search = (arr,n,k = 1) => {
    let low = 0;
    let high = n-1;
    let ans = -1;
    
    while(low <= high){
        let mid = low + Math.floor( (high - low ) / 2 );
        
        if( arr[mid] == k){
            ans = mid;
            high = mid -1;
        }
        else if( arr[mid] > k) high = mid -1;
        else low = mid +1
    }
    return ans;
}
function runProgram(input) {
  a = input.split("\n");
  
  let n = + a[0];
  let arr = a[1].split(" ").map(Number);
  console.log( search(arr,n) )
  
  
  
  
}