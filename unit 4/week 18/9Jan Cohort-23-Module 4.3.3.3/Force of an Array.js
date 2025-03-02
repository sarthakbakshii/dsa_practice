/*
Force of an Array 
----------------------------------------------------------------------------------
Description

Let's consider some array A. The following algorithm calculates it's a force:

- Find all the continuous blocks where all the elements of A are equal.

- Calculate the sum of squared lengths of these blocks.

For example if array A = {2, 3, 3, 1, 1, 1, 4, 2, 2} its force will be 
1^2 + 2^2 + 3^2 + 1^2 + 2^2 = 19 because first element is present once, 
so 1 ^ 2 , second element (3) is present twice to 3^2, again...so on and 
so forth..and you sum all these up to find the force.

We can reorder some elements and get array with greater force. In the 
example above we can move the first element of A to the end and get 
array A = {3, 3, 1, 1, 1, 4, 2, 2, 2} with force 2^2 + 3^2 + 1^2 + 3^2 = 23.

You are given an array. What is the maximum force you can get by 
reordering some of its elements?
----------------------------------------------------------------------------------

Input
Input Format:

The first line contains integer T denoting the number of test cases. 
The following T lines contain 4 integers each: A[0], A[1], N, MOD.

Array A of N elements is generated by the following way:

A[0], A[1] are given

A[i] = (A[i - 1] + A[i - 2]) modulo MOD for 1 < i < N.
----------------------------------------------------------------------------------
Constraints:

1 <= T <=100
0 <= A[0], A[1] <= 10^6
2 <= N <= 10^6

max(A[0] , A[1]) < MOD < 10^6
----------------------------------------------------------------------------------
Output
For each test case output one integer on the separate line - answer for the question.
----------------------------------------------------------------------------------
Sample Input 1 

2
0 1 6 4
1 1 4 2
----------------------------------------------------------------------------------
Sample Output 1

12
10
----------------------------------------------------------------------------------*/

/*     E X P L A I N = >>>>

Test case 1: 0 1 6 4
A[0] = 0
A[1] = 1
N    = 6

    
    array A = {0, 1, 1, 2, 3, 1}. 
The greatest possible force will be with the reordering 
{2, 0, 1, 1, 1, 3}

Test case 2: array A = {1, 1, 0, 1}. 
The greatest possible force will be with the reordering 
{1, 1, 1, 0}
*/
/*===============================  way 1 ( partial )
const convert = (arr) =>{
    let [a,b,N,Mod] = arr;
    
    let newArr = [];
    newArr[0] = a;
    newArr[1] = b
    
    for(let i = 2; i < N; i++){
        temp = newArr[i-1] + newArr[i-2]
        newArr[i] = temp%Mod
        
    }
    // console.log(newArr)
    
    newArr = newArr.sort( (a,b) => a-b)
    // console.log(newArr)
    
    let data = {};
    for(let i = 0 ; i  < newArr.length ; i++){
        if( data[newArr[i]] == undefined ) data[newArr[i]] = 1;
        else data[newArr[i]]++
    }
    // console.log(data)
    
    let solution = 0
    for( key in data){
        solution += data[key]**2
    }
    console.log(solution)
}
//  ===============================  way 1 ( partial )
*/

const convert = (arr) =>{
    let [a,b,N,Mod] = arr;
    
    let newArr = [];
     let data = {};
    for(let i = 0; i < N; i++){
        if( i == 0) newArr[i] = a;
        else if( i == 1) newArr[i] = b;
        else  newArr[i] = ( newArr[i-1] + newArr[i-2] ) % Mod
        
        if( data[newArr[i]] == undefined ) data[newArr[i]] = 1;
        else data[newArr[i]]++
    }

    let solution = 0
    for( key in data){
        solution += data[key]**2
    }
    console.log(solution)
}

function runProgram(input) {
  a = input.split("\n");
  let t = + a[0];
  let line = 1;
  for( let i = 0 ; i < t ; i ++){
      let arr = a[line].trim().split(" ").map(Number)
      line++
      
      convert(arr)
      
  } 
}