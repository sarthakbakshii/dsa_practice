/*
Cure a disease 
----------------------------------------------------------------------------------
https://oj.masaischool.com/contest/2759/problem/02
Password : 29409
----------------------------------------------------------------------------------
Description

A new deadly virus has infected large population of a planet. Scientists have 
discovered a new strain of virus which can cure this disease. Vaccine produced 
from this virus has various strength.

A person is cured only if strength in vaccine batch is more than midichlorians 
count of person.

A doctor receives a new set of report which contains midichlorians count of 
each infected patient, You have all vaccine doctor has and their strengths. 
You need to determine if doctor can save all patients with the vaccines he 
has. The number of vaccines and patients are equal.
----------------------------------------------------------------------------------
Input
Input Format

First line contains the number of vaccines - N.

Second line contains N integers, which are strength of vaccines.

Third line contains N integers, which are midichlorians count of patients.
----------------------------------------------------------------------------------
Constraints

N < = 10
----------------------------------------------------------------------------------
Output Format

Print a single line containing "Yes" (without quotes) or "No" (without quotes).
----------------------------------------------------------------------------------
Sample Input 1 

5
123 146 454 542 456
100 328 248 689 200
----------------------------------------------------------------------------------
Sample Output 1

No
----------------------------------------------------------------------------------
Hint

In the sample test case, the person with midichlorians count of689, 
cannot be saved, as there is no vaccine available with the strength greater than 
that, therefore, the answer is No
----------------------------------------------------------------------------------*/

function runProgram(input) {
  a = input.split("\n");
  let m = + a[0];
  let initial = a[1].trim().split(" ").map(Number).sort( (a,b) => a- b);
  let final = a[2].trim().split(" ").map(Number).sort( (a,b) => a- b);

  
  let n = initial.length
  
  
let result = "Yes"
 for(let i = 0 ; i < n ; i++){
     if(initial[i] < final[i]) {
         result = "No";
         break;
     }
 }
  console.log( result )
  
  
}