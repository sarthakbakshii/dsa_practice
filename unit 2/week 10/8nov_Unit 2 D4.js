// Next Greater Element 
// Description

// Given an array of N elements, find the next greater element for each element in the array, print -1 if it does not exits. Refer to the sample I/O for better understanding

// Note : You have to take the input yourself

// Input
// The first line contains T, the number of test cases.

// The first line of each test case contains N, the number of elements in the array. The next line contains N space separated integers denoting the elements of the array

// Constraints

// 1 <= T <= 10

// 1 <= N <= 10^5

// 0 <= A[i] <= 10000


// Output
// For each test case, print N space separated integers, denoting the next greater element for each element,  on a new line.


// Sample Input 1 

// 1
// 4
// 1 3 2 4
// Sample Output 1

// 3 4 4 -1
// Hint

// In the sample test case, the array contains 4 elements, and for the first element, the next greater element will be 3, similarly for the next element, the next greater element will be 4, and for the third element as well, the next greater element will be 4. Since, the last element has no elements ahead of it, the next greater element will be -1.

// ================================================================================================================================================
let nextGreaterElement = (n,arr) =>{
    let output = "";
    let s = [];
    
    for( i = n-1 ; i >=0 ; i-- ){
        while( (s.length > 0) && (s[s.length-1] <= arr[i] )  ){
            s.pop();
        }
        if( s.length == 0){ output += -1 + " "; }
        else { output += s[s.length-1] + " "; }
        
        s.push(arr[i]);
    }
    console.log(output.split(" ").reverse().join(" ").trim())
    
}

function runProgram(input) {
  inp = input.split("\n");
  let t = +inp[0];
  let l = 1;
  
  for(let i=0;i<t;i++ ){
      let n = +inp[l]; l++;
      let arr = inp[l].split(" ").map(Number); l++;
    //   console.log(n,arr)
      nextGreaterElement(n,arr)
    
  }



  
}
// ========================================================================================== 2

// Solve Age of empires 
// Description

// You are playing the popular game of "Age of Empires". You are the king of the empire where you have 2N workers.

// All workers will be grouped in the association with size 2, so a total of N associations have to be formed.

// The building speed of the i-th worker is A[i].

// To make an association, you pick up 2 workers. Let the minimum building speed between both workers be x, then the association has the resultant building speed x.

// You have to print the maximum value possible of the sum of building speeds of N associations if you make the associations optimally.

// Note : You have to take the input yourself

// Input
// First line contains an integer N, representing the number of associations to be made.

// Next line contains 2N space separated integers, denoting the building speeds of 2N workers.

// N <= 50000

// A[i] <= 10000


// Output
// Print the maximum value possible of the sum of building speeds of all the associations.


// Sample Input 1 

// 2
// 1 3 1 2
// Sample Output 1

// 3
// Hint

// Sample1Explanation

// If you make an association using the first and third worker, and another using the second and fourth worker, each association will have 1 and 2 resultant building speed, which has a total of 3.

// =================================================================================================================================

function runProgram(input) {
  a = input.split("\n");
  let n = +a[0];
  let arr = a[1].split(" ").map(Number).sort( (a,b) => a-b );
  


// -------------------------------------------------------- way 2

  let stack = [];
  for(i = 0 ; i < arr.length ; i+=2){
      stack.push(Math.min(arr[i],arr[i+1]));
  }
  let sum = 0;
  stack.map( s =>{
      sum += s;
  });
  console.log(sum);
// -------------------------------------------------------- way 2
  
  
}

// =================================================================================================================================== 3

// Array Equation
// Description

// You are given a mathematical equationA * (X) + B * (Y) = Z, whereXis the sum of even numbers in the array, andYis the sum of odd numbers in the array, andA = 2andB = 3are constants.

// Solve the given equation.

// Refer the sample I/O for better understanding.

// Note : You have to take the input yourself

// Input
// The first line of the input contains three integers, the value ofN, where N is the size of the array.

// The next line contains N space separated integers denoting the integers of the array.

// Constraints

// 1 <=A, B<= 10

// 1 <=N<= 100

// 1 <=A[i]<= 100


// Output
// Print a single integer, which denotes the value of the equation, based on the values given in the input.


// Sample Input 1 

// 5
// 1 2 3 4 5
// Sample Output 1

// 39
// Hint

// In the sample test case, the value ofA = 2and that ofB = 3, and the value ofN = 5.

// The even numbers in the array are2, 4, and that of odd numbers in the array are1,3,5.

// Therefore, the sum of the even numbers in the array is6, and that of the odd numbers in the array is9.

// Finally solving the equation,(2)*(6) + (3)*(9) = 12 + 27 = 39.

// Therefore, the required output is 39.

// ==========================================================================================================================================================
function runProgram(input) {
  a = input.split("\n");
  let n = +a[0];
  let arr = a[1].split(" ").map(Number);
  let even = 0;
  let odd = 0;
  
  for( i = 0 ; i < n ; i++){
      if( arr[i]%2==0){
          even += arr[i]
      }
      else{
         odd += arr[i];
      }
  }
  console.log(`${2*even + 3*odd}`)
  
}