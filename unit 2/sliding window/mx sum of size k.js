// Take out maximum Ended
// Description

// Given an array of integers and a number k, find the maximum sum of a subarray of size k.


// Input
// Input Format

// First line consists of two integers n and k separated by space

// Second line consists of n integers separated by spaces.

// Constraints

// 1 <= n <= 10^7

// 1 <= k <= 10^6


// Output
// Print the maximum sum of a subarray of size k.


// Sample Input 1 

// 10 3
// -1 -1 -2 1 -2 4 1 9 3 9
// Sample Output 1

// 21

function runProgram(input) {
  inp = input.split("\n");
  let[n,k] = inp[0].split(" ").map(Number);
  let arr = inp[1].split(" ").map(Number);
//   console.log(n,k,arr);
  
  var sum =0;
  for(let i=0;i<k;i++){
      sum = sum+ arr[i]
  }
//   console.log(sum)
  
  var left =0;
  var right =k;
  var max = sum;
  
//   if(max<sum){ max = sum }
  
  while(right < n){
      sum = sum + arr[right] - arr[left];
    //   console.log(sum)
      if(sum > max){
          max=sum;
      }
        
        
        left++;
        right++;
  }
  console.log(max)
  
  

}
if (process.env.USER === "") {
  runProgram(``);
} else {
  process.stdin.resume();
  process.stdin.setEncoding("ascii");
  let read = "";
  process.stdin.on("data", function (input) {
    read += input;
  });
  process.stdin.on("end", function () {
    read = read.replace(/\n$/, "");
    read = read.replace(/\n$/, "");
    runProgram(read);
  });
  process.on("SIGINT", function () {
    read = read.replace(/\n$/, "");
    runProgram(read);
    process.exit(0);
  });
}
