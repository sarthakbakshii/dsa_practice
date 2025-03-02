/*
Lower bound in logn
---------------------------------------------------
https://oj.masaischool.com/contest/2636/problem/03
Password : 28913
---------------------------------------------------
Description

You are given n different numbers and an integer k. 
Write a program that finds lower bound of k in log(n) 
time complexity. Lower bound of a number k in a 
sorted list is the index of the first number which 
is same as k, in case the number is not present, 
print -1 (here the answer is given considering 
index to be starting from 0)

NOTE: YOU MUST NOT USE BRUTE FORCE SOLUTION.

WE KNOW THAT YOU KNOW BRUTE FORCE SOLUTION AND WANT 
YOU TO TRY THE LOGN SOLUTION.

USING BRUTE FORCE/LINEAR SEARCH, IN THIS CASE, 
WOULD LEAD TO DISQUALIFICATION.
---------------------------------------------------
Input Format

First line contains N and K
Second line contains N space separated sorted integers
---------------------------------------------------
Constraints

N<100
---------------------------------------------------

Output

Output lower bound
---------------------------------------------------

Sample Input 1 

5 2
1 1 2 2 5
---------------------------------------------------
Sample Output 1

2
---------------------------------------------------
Sample Input 2 

5 3
1 1 2 2 5
---------------------------------------------------
Sample Output 2

-1
---------------------------------------------------*/

const search = (arr,n,k) => {
    let low = 0 ; 
    let high = n-1;
    ans = -1;
    while( low <= high ){
        mid = low + Math.floor( (high - low) /2 )
        
        if( arr[mid] == k ){ 
            ans = mid;
            high = mid -1 ;
        }
        else if( arr[mid] < k ) low = mid +1;
        else high = mid -1 ;
    }
    return ans
}
