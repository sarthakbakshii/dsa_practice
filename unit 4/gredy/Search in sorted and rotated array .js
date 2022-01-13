/*
Search in sorted and rotated array 
-----------------------------------------------------
https://oj.masaischool.com/contest/2676/problem/01
Password : 29536
-----------------------------------------------------
Description

Given a sorted(increasing order) array of length n and 
is rotated by some value beforehand. Find the index of 
the target element  K in the rotated array in 
O(logn) time. If not found print -1.
-----------------------------------------------------
In a sorted & rotated array,  we rotate an ascending 
order sorted array at some pivot unknown to you 
beforehand. So for instance, 1 2 3 4 5 might 
become 3 4 5 1 2.

Please note that the linear search approach with 
the time complexity of O(n) can easily be applied. 
But you are expected to solve it in O(log n) 
time complexity

Note: Array contains all distinct elements.
-----------------------------------------------------
Input Format

First line consists of n and k separated by space.
Second line consists of n integers separated by spaces
-----------------------------------------------------
Constraints

1 <= n <= 50
k <= 50
-----------------------------------------------------
Output
Print index of the target element
-----------------------------------------------------
Sample Input 1 

5 1
3 4 5 1 2
-----------------------------------------------------
Sample Output 1

3
-----------------------------------------------------
Sample Input 2 

6 6
3 4 7 9 1 2
-----------------------------------------------------
Sample Output 2

-1
-----------------------------------------------------*/




const search = (arr,n,k) => {
    let low = 0 ; 
    let high = n-1;
    
    while( low<=high ){
        
        let mid = low + Math.floor( (high - low ) / 2 );
        // console.log(`low = ${low}, mid = ${mid} , high = ${high}`)
        
        if(arr[mid] == k ) return mid;
        if( arr[low] <= arr[mid]){
            
            if( arr[low] <= k && arr[mid] > k ) {
                high = mid - 1
            }else{
                low = mid +1
            }
            
        }
        else{
            
            if( arr[mid] <  k && arr[high] >= k ) {
                
                low = mid +1
            }else{
                high = mid - 1
            }
        }
    }
    return -1
}

function runProgram(input) {
  a = input.split("\n");
  let [n,k] = a[0].split(" ").map(Number);
  let arr = a[1].split(" ").map(Number);
  
  console.log( search(arr,n,k) );
  
  
}