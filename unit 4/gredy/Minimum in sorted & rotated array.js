/*
Minimum in sorted & rotated array 
-----------------------------------------------------
https://oj.masaischool.com/contest/2676/problem/02
Password : 29536
-----------------------------------------------------
Description

Given an array of length n, and it is sorted and 
rotated at some unknown point, find the minimum element in it.

In a sorted & rotated array,  we rotate an ascending order 
sorted array at some pivot unknown to you beforehand. So 
for instance, 1 2 3 4 5 might become 3 4 5 1 2.

Please note that the linear search approach with the time 
complexity of O(n) can easily be applied. But you are 
expected to solve it in O(log n) time complexity
-----------------------------------------------------
Input Format

First line Consists of integer n.
Second line consists of n integers separated by spaces.
-----------------------------------------------------
Constraints

1 <= n <= 10^6
-----------------------------------------------------
Output
Print minimum element.
-----------------------------------------------------
Sample Input 1 

10
4 6 7 9 10 -1 0 1 2 3
-----------------------------------------------------
Sample Output 1

-1
-----------------------------------------------------*/


const search = (arr,n) => {
    let low = 0 ; 
    let high = n-1;
    
    while( low < high ){
        
        let mid = low + Math.floor( (high - low ) / 2 );
        console.log(`low = ${low}, mid = ${mid} , high = ${high}`)
        if( arr[mid] > arr[high] ){
              low = mid + 1
        }
        else{
           high = mid
        }
        
        
    }
    return arr[high]
}