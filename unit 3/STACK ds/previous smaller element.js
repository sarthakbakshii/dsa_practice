/*Smaller Neighbour Element
-----------------------------------------------------------------------------------------

Description
--------------
Given an array, find the nearest smaller element G[i] for every element A[i] in the array such that the element has an index smaller than i.
Mathematically,

G[i] for an element A[i] is an element A[j] such that

j is maximum possible AND

j < i AND

A[j] < A[i]

Note: Elements for which no smaller element exist, consider next smaller element as -1.
-----------------------------------------------------------------------------------------

Input
--------------
First line contains an integer N denoting the number of elements in the array (not necessarily distinct).
Second line contains N space separated integers denoting the elements of the array.
-----------------------------------------------------------------------------------------

Constraints:
--------------
N <= 100000
-----------------------------------------------------------------------------------------

Output
--------------
Print N space separated integers denoting the array G.
-----------------------------------------------------------------------------------------

Sample Input 1 
--------------
8
39 27 11 4 24 32 32 1
-----------------------------------------------------------------------------------------

Sample Output 1
--------------
-1 -1 -1 -1 4 24 24 -1
*/


function runProgram(input) {
  a = input.split("\n");
  let n = +a[0];
  let arr = a[1].split(" ").map(Number);
//   console.log(arr);

    let output = "";
    let stack  = [];
    
    for( i = 0 ; i < arr.length ; i++){
        
        while( (stack.length >0) && ( stack[stack.length -1] >= arr[i])){
            stack.pop()
        }
        if(stack.length == 0){
            output += -1 + " "
        }
        else {
            output += stack[stack.length -1] + " "
        }
        
        stack.push(arr[i])
    
    }
console.log(output)




  
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