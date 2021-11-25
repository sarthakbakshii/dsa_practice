// Description

// You are given an array and you have to find the sum of the absolute difference between consecutive elements of the array.

// For instance, if the array is 3,5,6,1,8

// Absolute of (3-5) = 2

// Absolute of (5-6) = 1

// Absolute of (6-1) = 5

// Absolute of (1-8) = 7

// ------------------------

// Sum of all absolute = 15

// ------------------------

// **The only constraint is that you cannot write an iterative code. You have to write a recursive code only


// Input
// Input Format

// There are several test cases. Each test case starts with **t** which is the total number of test cases present

// Each test case has 2 lines:

// Line 1 : Number of integers present in the array

// Line 2 : The integers present in the array

// Constraints

// n <= 10000

// arr[i] <= 15


// Output
// Output one number(the sum) per test case


// Sample Input 1 

// 2
// 3
// 1 5 2
// 5
// 3 5 6 1 8
// Sample Output 1

// 7
// 15


// -------------------------------------- my practice solving
let sum = 0
function absDiff(n,arr){
    if( n <= 1 ) return arr[0]

    abs = Math.abs(arr[n-1] - arr[n-2])
    // console.log(abs)
    sum += abs;
    absDiff(n-1,arr)
    return sum 
}
console.log( absDiff(5,[3,5,6,1,8]) )
// console.log( absDiff(2,[3,5,6,1,8]) )

// -------------------------------------- my practice solving


function runProgram(input) {
  a = input.split("\n");
  const t= + a[0];
  let line = 1;

  for( let i = 0 ; i < t ; i++){
      let n = + a[line];
      line++;
      let arr = a[line].split(" ").map(Number);
      line++;
      
      let sum = 0;
      console.log( absDiff(n,arr) )
      
      
    //----------------------------------------------------------------------
        function absDiff(n,arr){
                if( n <= 1 ) return arr[0]
            
                abs = Math.abs(arr[n-1] - arr[n-2])
                // console.log(abs)
                sum += abs;
                absDiff(n-1,arr)
                return sum ;
        }
    //----------------------------------------------------------------------
  }
  
}


// ----------------------------| easy code |-----------------------------

    function sumWithRec(n,arr){
        if(n===1){
            return 0;
        } else {
            return (Math.abs(arr[n-1]-arr[n-2]) + sumWithRec(n-1, arr));
        }
    }
    console.log(sumWithRec(n,arr))