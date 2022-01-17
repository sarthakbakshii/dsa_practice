/*
a and b only 
------------------------------------------------------------------------
https://oj.masaischool.com/contest/2699/problem/04
Password : 29243
------------------------------------------------------------------------
Description

You are given a string S that contains 3 characters: 'a', 'b', and '?'. 
Your task is to convert it to a string which contains only 2 
characters: 'a', 'b'. The converted string must follow following 
conditions:

1. It should not contains two letters 'a' in a row.

2. if there are many strings possible, the answer should be 
one which is the first in alphabetical order

(Read sample test case for better understanding)
------------------------------------------------------------------------
Input Format

The first line contains non-empty string s consisting of 'a', 'b' and '?' characters.
------------------------------------------------------------------------
Constraints

Length of s is at most 50.
------------------------------------------------------------------------
Output Format

Output the first in alphabetical order word
------------------------------------------------------------------------
Sample Input 1 

?ba??b
------------------------------------------------------------------------
Sample Output 1

ababab
------------------------------------------------------------------------
Hint

Sample 1 Explanation

ababab, ababbb, bbabab and bbabbb are possible. 
The first in alphabetical order is ababab.
------------------------------------------------------------------------*/

function runProgram(input) {
    // Write code here
    input=input.split("\n");
    let str=input[0];
    //console.log(str)
    console.log(ques(str));
  }
  
  function ques(str){
      str=str.split("");
      for(let i=0;i<str.length;i++){
          if(str[i]=="?"){
              if(str[i-1]=="a" || str[i+1]=="a"){
                  str[i]="b"
              }else{
                  str[i]="a"
              }
          }
      }
      return str.join("")
  }