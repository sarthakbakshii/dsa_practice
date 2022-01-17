/*
Number of Occurences
---------------------------------------------------
https://oj.masaischool.com/contest/2636/problem/05
Password : 28913
---------------------------------------------------
Description

You are given n different numbers and an integer k.
 Write a program that finds number of times k is 
 present in log(n) time complexity.

NOTE: YOU MUST NOT USE BRUTE FORCE SOLUTION

WE KNOW THAT YOU KNOW BRUTE FORCE SOLUTION AND WANT 
YOU TRY THE LOGN SOLUTION

USING BRUTE FORCE/LINEAR SEARCH IN THIS CASE WOULD 
LEAD TO DISQUALIFICATION
---------------------------------------------------
Input Format :

First line contains N and K
Second line contains N space separated sorted integers
---------------------------------------------------
Constraints :

N<100
---------------------------------------------------
Output

Print number of times that number is present in the given list
---------------------------------------------------
Sample Input 1 

6 3
2 3 3 3 6 9
---------------------------------------------------
Sample Output 1

3
---------------------------------------------------*/
 const fOcc = (arr,n,k) => {
      let low = 0;
      let high = n-1;
      let ans = -1;
      
      while( low <= high) {
          let mid = low + Math.floor( (high - low ) / 2 );
          
          if( arr[mid] == k){ 
                                 ans = mid;
                                 high = mid -1;
          }
          else if( arr[mid] > k ) high = mid -1;
          else low = mid +1;
          
      }
      return ans
  }
  const lOcc = (arr,n,k) => {
      let low = 0;
      let high = n-1;
      let ans = -1;
      
      while( low <= high ){
          let mid = low + Math.floor( (high - low) / 2);
          
          if(arr[mid] == k){
              ans = mid;
              low = mid + 1;
          }
          
          else if( arr[mid] > k) high = mid - 1;
           else low = mid +1;
      }
      return ans
     
  }

  function runProgram(input) {
  a = input.split("\n");
  
  let [n,k] = a[0].split(" ").map(Number);
  let arr = a[1].split(" ").map(Number);
  
 let first =  fOcc(arr,n,k);
 let last =  lOcc(arr,n,k);
 
 console.log( last - first + 1)
  
 
  
  
}