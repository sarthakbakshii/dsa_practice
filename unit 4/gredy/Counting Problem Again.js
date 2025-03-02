/*
Counting Problem Again
===================================================
https://oj.masaischool.com/contest/2792/problem/02
Password : 4756a03a
===================================================
Description

Given a string S, count the number of times each 
character is present in the string.

Print the character and number of times that 
character is present in the string separated by a space.

Each character and the number of times it is 
present should be written in a new line

The order of characters should be in Lexicographical order

(See sample test case for better understanding)
===================================================
Input
Input Format

First and the only line contains the string S

String S contains only lower case alphabets
===================================================
Constraints

Length of string < 100
===================================================
Output

Print the character and number of times that 
character is present in the string separated by a space.

Each character and the number of times it is 
present should be written in a new line
===================================================
Sample Input 1 

masaischool
===================================================
Sample Output 1

a 2
c 1
h 1
i 1
l 1
m 1
o 2
s 2
===================================================*/
function runProgram(input) {
  a = input.split("").sort()
  
  let data = {}
  
  for(let i = 0 ; i < a.length ; i ++){
      if( data[a[i]] == undefined ) data[a[i]] = 1;
      else data[a[i]]++
  }
  for(key in data) console.log(key, data[key])
  
//   console.log(data)
  
  
}