Even Count Returns Ended
Description

You have a string S and its starting index is 1. The string S consists of characters from 1-9. You are asked to count the number of even numbered characters ( i.e 2,4,6,8) for every index i .

For an index i, the result should be calculated from i to the end of the string.


Input
Input Format:

First line contains a string S.

Constraints:

Length of string S <= 10000


Output
Print space-separated integers,the result of every index.


Sample Input 1 

574674546476
Sample Output 1

7 7 7 6 5 5 4 4 3 2 1 1

function runProgram(input) {
  let a = input;
  let n = a.length;
  let dp = new Array(n+1);
  
//   while( n >= 0){
//       if(dp[n+1] == undefined ){
//           if( a[n] % 2 == 0) dp[n] = 1;
//           else               dp[n] = 0;
//       }else{
//           if( a[n] % 2 == 0) dp[n] = dp[n+1] + 1;
//           else               dp[n] = dp[n+1] ;
//       }
//       n--
//   }

// -------------------------------------------------- way 2
// for( let i = n - 1 ; i >= 0 ; i --){
//     if( a[i] %2 == 0) {
//         if( dp[i+1] == undefined ){
//             dp[i] = 1 
//         }
//         else{
//             dp[i] = 1 + dp[i+1]
//         }
        
//     }
//     else{
//       if( dp[i+1] == undefined ){
//             dp[i] = 0 
//         }
//         else{
//             dp[i] = 0 + dp[i+1]
//         }
//     }
// }

   
  
//   console.log(dp.join(" "))

// ------------------------------------------------- way 3
// let dp = [];
// let count = 0

// for( let i = n - 1 ; i >= 0 ; i --){
//     if( a[i] %2 == 0 ) {
//         count++;
//         dp.push(count)
//     }
//     else{
//         dp.push(count)
//     }
// }
// console.log(dp.reverse().join(" "))
  
  
  
}