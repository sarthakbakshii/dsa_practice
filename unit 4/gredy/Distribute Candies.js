/*
Distribute Candies
----------------------------------------------------------------------------------
https://oj.masaischool.com/contest/2759/problem/04
Password : 29409
----------------------------------------------------------------------------------
Description

There are n students standing in a line. Each student is assigned a rating value.
You are responsible to distribute the candies to these students subjected to the 
following requirements:

-> Each student must have at least one candy because every student deserves it.

-> Students with a strictly higher rating get more candies than their neighbors.

What is the minimum number of candies you need to distribute to the student?
----------------------------------------------------------------------------------
Input
The first line of the input contains one integer t (1 ≤ t ≤ 10) — the number of 
test cases. Then t test cases follow.

The first line of each test case contains a single integer n 
(1 ≤ n ≤ 100000) — The size of the array.

The second line of each test case contains n integers 
(1 ≤ Ai ≤ 100000). The ratings of the student.
----------------------------------------------------------------------------------
Output
For each test case, print the answer: The minimum number of candies.
----------------------------------------------------------------------------------
Sample Input 1 

2
3 
1 0 2
3
1 2 2
----------------------------------------------------------------------------------
Sample Output 1

5
4
----------------------------------------------------------------------------------*/


const sulochan = (arr) => {
    let sum = 0
    let candies = []
    for( let i = 0 ; i < arr.length ; i ++){
        if( i == 0){
                    candies.push(1)
        }
        else{
                if( arr[i] > arr[i-1]) candies.push( candies[i-1] + 1 )
                else   candies.push(1)
        }
    }
    return candies
}

const sulochanBack = (arr) => {
    arr = arr.reverse();
    
    let sum = 0
    let candies = []
    for( let i = 0 ; i < arr.length ; i ++){
        if( i == 0){
                    candies.push(1)
        }
        else{
                if( arr[i] > arr[i-1]) candies.push( candies[i-1] + 1)
                else   candies.push(1)
        }
    }
    return candies.reverse()
}


function runProgram(input) {
  a = input.split("\n");
  let t = + a[0]
  let line = 1;
  for( let i = 0 ; i < t ; i ++){
      let n = + a[line]; 
      line++;
      let arr = a[line].split(" ").map(Number);
      line++;
      
    //   console.log(n, arr)
      let forward =  sulochan( arr);
    //   console.log("forward : ",forward)
      
      let backward =  sulochanBack( arr);
    //   console.log("backward : ",backward)
      
      let sum = 0;
      for(let j = 0 ; j < n ; j ++){
           sum += Math.max( forward[j], backward[j])
      }
      console.log(sum)
      
  }
  
  
  
}