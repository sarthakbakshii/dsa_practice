/*
Language of Masai XI 
------------------------------------------------------
https://oj.masaischool.com/contest/2601/problem/09
Password : abb74eab
------------------------------------------------------
Description

You are given a string stored in a variable with the 
namestr Also, the length of the string is stored in a 
variable with the nameN You have to modify the string, 
such that if the first character of the string is a 
vowel, then addhulkat the end of the string

Else if the first character of the string is a consonant, 
then addthorto the end of the string For example, consider 
the value stored inN = 5, andstr = abced Now, since the 
first character of the string is a vowel, therefore, we 
addhulkto the end of the string Therefore, the string 
becomesabcedhulk, which is the required output

Note : The string contains only lowercase characters
------------------------------------------------------
Input

The first line of the input containsN, the length of the string
The next line contains the value stored instr
------------------------------------------------------
Output

Print the modified string as explained in the problem statement
------------------------------------------------------
Sample Input 1 

5
abced
------------------------------------------------------
Sample Output 1

abcedhulk
------------------------------------------------------
Hint

In the sample test case, the value stored inN = 5, andstr = abced
Now, since the first character of the string is a vowel, therefore, 
we addhulkto the end of the string

Therefore, the string becomesabcedhulk, which is the 
required output
------------------------------------------------------*/

function runProgram(input) {
  a = input.split("\n");
  let n = + a[0];
  let str = a[1];
  
  
      
      let vov = "aeiou";
      
      let check = "no";
      for( let i = 0 ; i < vov.length ; i ++){
          if( str[0] == vov[i])  check = "yes";
      }
      
      if(check == "yes") console.log( str+"hulk");
      else console.log( str+"thor")
  
  
  
  
}