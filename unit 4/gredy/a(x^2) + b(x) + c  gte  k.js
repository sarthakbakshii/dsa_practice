/*
Optimise the curve 
-----------------------------------------------------
https://oj.masaischool.com/contest/2676/problem/05
Password : 29536
-----------------------------------------------------
Description

Ross is skilled in calculations, he can do most of 
the complex calculations in head but he is stuck 
with this quesiton and wants your help.

Ross wants to solve the given mathematical equation 
which states that, he needs to find the east 
non-negative integer Xo, that shall make the 
value of given equation atleast K i.e.,

A Xo^2 + B Xo + C >= K

He is given A,B,C and K, which form the above equation. 
He has to answer T independent test cases.

Output -1 
if there is no possible positive value of Xo
-----------------------------------------------------
Input Format :

Number of test cases, space seperated values of A B C K respectively
-----------------------------------------------------
Constraints :

- A, B, C <= 100000
- K <= 10000000000
- T <= 100000
-----------------------------------------------------
Output

The value of Xo
-----------------------------------------------------
Sample Input 1 

1
3 2 4 15
-----------------------------------------------------
Sample Output 1

2
-----------------------------------------------------*/

// =============================================== aqpproch by me 
const search = (a,b,c,k) => {
    let low = 0;
    let high = k;
    while( low<high ){
         let mid = low + Math.floor( (high - low ) / 2 );
        val = (a*mid*mid) + (b*mid) + c;

        if(val >= k) high = mid;
        else if(val < k) low = mid + 1;
    }
    if( high == 0) return -1;
    else    return high
}
// =============================================== aqpproch by me 

// =============================================== aqpproch by sir 
const searchSir = (a,b,c,k) => {
    let low = 0;
    let high = k;
    let ans = -1;
    while( low<=high ){
         let mid = low + Math.floor( (high - low ) / 2 );
          val = (a*mid*mid) + (b*mid) + c;
        
          if(val >= k){
                        ans = mid;
                       high = mid - 1;
        }
        else low = mid + 1;
    }
    if( ans == 0) return -1;
    else    return ans
    
}
// =============================================== aqpproch by sir  

function runProgram(input) {
  a = input.split("\n");
  let t = + a[0];
  let line = 1;
  for(i = 0 ; i < t ; i++){
      let [A,b,c,k] = a[line].split(" ").map(Number);
      line++
      console.log( searchSir(A,b,c,k) )
  }
  
  
}