/*
Nikhil and his Search 
--------------------------------------------------
https://oj.masaischool.com/contest/2663/problem/04
Password : 9c11a7a6
--------------------------------------------------
Description

Nikhil and his friend Sachin are on a quest to find 
the answer to Life.

In order to complete it, they need to answer Q 
queries on an array A having N integers. The 
queries can be of the following two types:

0 x: Find the number of numbers in A which are not less than x.
1 x: Find the number of numbers in A which are greater than x.

Help them complete the quest.
--------------------------------------------------
Input Format

# ) The first line consists of a single integer 
denoting N.
# ) The second line consists of N space separated 
integers denoting the array A.
# ) The third line consists of a single integer 
denoting Q.
# ) Each of the following Q lines consists of a 
query of one of the given two types.
--------------------------------------------------
Constraints

1<= N <= 100000
1<=Q<=300000
1<= elements of array, x < 1000000000
--------------------------------------------------
Output
For each query print the required answer in a new line.
--------------------------------------------------
Sample Input 1 

4
1 2 3 4
3
0 5
1 3
0 3
--------------------------------------------------
Sample Output 1

0
1
2
--------------------------------------------------*/

const logic = (n, arr, x, k) => {
    let low = 0;
    let high = n-1;
    let ans = -1;
    
    if(x == 0){   //------------- num not less than target
    
        while(low <= high){
              let mid = low + Math.floor( (high - low ) / 2 );
                
                if( arr[mid] >= k){
                    ans = mid;
                    high = mid -1;
                }
                // else if( arr[mid] > k) high = mid -1;
                else low = mid +1
        }
        // return ans
        if( ans == -1 ) return 0;
        else return (n - ans)
        
    } //------------------------- num not less than target
    
    if(x == 1){   //------------- num smaller than target
    
        while(low <= high){
              let mid = low + Math.floor( (high - low ) / 2 );
                
                if( arr[mid] > k){
                    ans = mid;
                    high = mid -1;
                }
                else low = mid +1
        }
        // return ans
        if( ans == -1 ) return 0;
        else return (n - ans)
        
    } //------------------------- num greater than target
}


function runProgram(input) {
  a = input.split("\n");
  let n = + a[0];
  let arr = a[1].split(" ").map(Number);
  arr = arr.sort( (a,b) => a - b)
  let t = + a[2];
  let line = 3;
  for(let i = 0 ; i < t ; i++ ){
      let[x,k] = a[line].split(" ").map(Number);
      line++;
      
    //   console.log(n,arr,x,k)
       console.log(  logic(n, arr, x, k)  )
  }
  
}