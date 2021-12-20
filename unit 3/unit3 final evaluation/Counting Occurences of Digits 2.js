/*
Counting Occurences of Digits 2 
--------------------------------------------------------
https://oj.masaischool.com/contest/2601/problem/06
Password : abb74eab
--------------------------------------------------------
Description

You are given a number of N digits, from 0 to 9.
You need to print count of occurrences of each digits in 
descending order.

[Use Key-Value pair based data structure]
--------------------------------------------------------
Input

First line contains T, no of test cases.
First line of each test case contains N, total digits of number.
Second line of each test case contains the number of N digits.
--------------------------------------------------------
Constraints

1 <= T <= 10
1 <= N <= 10^6
--------------------------------------------------------
Output

For each test case, print count of occurrences of each digit 
indescendingorder on new line.
--------------------------------------------------------
Sample Input 1 

2
5
21321
6
235452
--------------------------------------------------------
Sample Output 1

0 0 0 0 0 0 1 2 2 0
0 0 0 0 2 1 1 2 0 0
--------------------------------------------------------
Hint

For test case 1

Count of 0 is 0, 1 is 2, 2 is 2, 3 is 1, 4 is 0, 5 is 0, 6 is 0, 7 is 0, 8 is 0, 9is 0.
--------------------------------------------------------*/

const ckeck = (str,data = {}) => {
    
    for( let i = 0 ; i <= 9 ; i ++){
        data[i] = 0
    }
    for(let j = 0 ; j < str.length ; j++){
        if( data[str[j]] !== undefined)  data[str[j]]++
    }
    
    let output = [];
    for( key in data){
        output.unshift(data[key])
    }
    // console.log( data, str, output)
    console.log(output.join(" "))
}
// ckeck("21321")
function runProgram(input) {
  a = input.split("\n");
  let t = + a[0];
  let line = 1 ; 
  
  for( let i = 0 ; i < t ; i ++){
      let n = + a[line];
      line++;
      
      let str = a[line];
      line++;
      
  
      
      ckeck(str)
  }
  
  
}