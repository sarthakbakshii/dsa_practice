/*
Recursive Bubble sort
------------------------------------------------------------------------------------------------------------------
https://oj.masaischool.com/contest/2484/problem/02
Password : 29167
------------------------------------------------------------------------------------------------------------------
Description

You are given an array ofNunsorted numbers. Your task is to write 
BUBBLE SORT using RECURSION such that numbers present in the array get sorted.
USING ANY OTHER ALGORITHM OR USING SORT FUNCTION WOULD LEAD TO DISQUALIFICATION.
------------------------------------------------------------------------------------------------------------------
Input Format

First line of input contains N
Second line of input contains N numbers
------------------------------------------------------------------------------------------------------------------
Constraints

N < 500
------------------------------------------------------------------------------------------------------------------
Output
Output the numbers given after sorting it in increasing order
------------------------------------------------------------------------------------------------------------------
Sample Input 1 

5
3 5 0 9 8
------------------------------------------------------------------------------------------------------------------
Sample Output 1

0 3 5 8 9
------------------------------------------------------------------------------------------------------------------*/

// ------------| WAY 1 |-------------------

const directBubbleSort = (n,arr) =>{
    for(let i = 0;i<n-1 ; i++ ){
        for(let j = 0 ; j < n-1-i ; j++){
            if( arr[j+1] < arr[j] ){
                let temp = arr[j];
                arr[j] = arr[j+1];
                arr[j+1] = temp;
            }
        }
    }
    let str = "";
    arr.map( a => { str += a +" " });
    return str;
}

// ------------| WAY 2 |-------------------

const recursion = (arr,i=0,stack = []) =>{
    if(arr.length == i) {
        // return stack
        let str = "";
        stack.map( a => { str += a +" " });
        return str;
    };
    stack.push(arr[i]);
    
    let n = stack.length;
    for(let i = 0;i<n-1 ; i++ ){
        for(let j = 0 ; j < n-1-i ; j++){
            if( stack[j+1] < stack[j] ){
                let temp = stack[j];
                stack[j] = stack[j+1];
                stack[j+1] = temp;
            }
        }
    }
    
    // console.log(stack);
    return recursion(arr,i+1,stack)
}

// ----------------- arr to requeired output ||

function runProgram(input) {
  a = input.split("\n");
  let n = +a[0]
  let arr = a[1].split(" ").map(Number);
//   console.log( directBubbleSort(n,arr) )
     console.log( recursion(arr) )
}
  