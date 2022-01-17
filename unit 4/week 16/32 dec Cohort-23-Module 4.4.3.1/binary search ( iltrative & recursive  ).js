/*
Binary Search - Iterative 
--------------------------------------------------
https://oj.masaischool.com/contest/2636/problem/01 - iterative
https://oj.masaischool.com/contest/2636/problem/01 - recursive
Password : 28913
--------------------------------------------------
Description

In case k is present among those n numbers, print 1
Else print -1
--------------------------------------------------
Sample Input 1 

5 0
2 -2 0 3 4
--------------------------------------------------
Sample Output 1

1
--------------------------------------------------*/

let n = 5;
let k = 0;
let arr = [2,-2,0,3,4];

arr = arr.sort( (a,b) => a - b );

const iltrative = (arr, n, k, low = 0, high = n-1) => {

    while (low <= high ) {
        let mid = low + Math.floor( (high - low ) / 2);
        if( arr[mid] == k) return mid;
        if( arr[mid] < k) low = mid + 1;
        else high = mid - 1;
    }
    return -1
}

const recursive = (arr, n, k, low = 0, high = n-1) => {
    if ( low > high ) return -1;

    let mid = low + Math.floor( (high - low ) / 2);

    if( arr[mid] == k) return mid;
    if( arr[mid] < k ) return recursive(arr, n, k, mid + 1, high);
    if( arr[mid] > k ) return recursive(arr, n, k, low, mid - 1);
} 

console.log( recursive(arr,n,k) )

