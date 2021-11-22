/*
Masai Uniqueness
------------------------------------------------------------------------------------------------------------------
Description

You are given a string S. Your task is to write a program that comments if it has all unique character or not (no repeated character).
If it has just unique character, output "Unique"
Else in all other cases, output "No"
------------------------------------------------------------------------------------------------------------------
Input

First and the only line contains string S
------------------------------------------------------------------------------------------------------------------
Constraints

Length of S < 1000
------------------------------------------------------------------------------------------------------------------
Output

Output one string based on string
------------------------------------------------------------------------------------------------------------------
Sample Input 1 

masai
------------------------------------------------------------------------------------------------------------------
Sample Output 1

No
------------------------------------------------------------------------------------------------------------------*/

function runProgram(input) {
//   a = input.split("\n");
// console.log(input);

let count = 0;
let data = {};
for(let i = 0 ; i < input.length ; i++){
    // console.log(input[i])
    if(data[input[i]] == undefined) data[input[i]]=1;
    else data[input[i]]++
}
// console.log(data)
for( key in data){
    if( data[key] > 1){
        count = 1
    }
}
if( count == 1) console.log("No");
else if(count == 0) console.log("Unique");
    
}