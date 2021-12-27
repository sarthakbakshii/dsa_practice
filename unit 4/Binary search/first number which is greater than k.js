/*
first number which is greater than k 
---------------------------------------------------
https://oj.masaischool.com/contest/2636/problem/04
---------------------------------------------------
Input Format

First line contains N and K
Second line contains N space separated sorted integers
---------------------------------------------------
Constraints

N<100
---------------------------------------------------
Output

Output upper bound
---------------------------------------------------
Sample Input 1 

10 3
0 2 4 4 5 5 7 7 9 10
---------------------------------------------------
Sample Output 1

2
---------------------------------------------------
Sample Input 2 

10 4
0 2 4 4 5 5 7 7 9 10
---------------------------------------------------
Sample Output 2

4
---------------------------------------------------*/
const search = (arr,n,k) => {
    let low = 0 ; 
    let high = n-1;
    ans = -1;
    while( low <= high ){
        mid = low + Math.floor( (high - low) /2 )
        
        
         if( arr[mid] <= k ) {
            
            low = mid +1;
            
        }
        else{
            ans = mid;
         high = mid -1 ;
    }
    }
    return ans
}