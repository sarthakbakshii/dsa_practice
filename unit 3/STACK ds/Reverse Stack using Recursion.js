/*Reverse Stack using Recursion
------------------------------------------------------------------------------------------------------------------
https://oj.masaischool.com/contest/2484/problem/03
Password : 29167
------------------------------------------------------------------------------------------------------------------
Description

You'll be given a stack. You have to reverse the stackwithout using any inbuilt function or for and while loops. You have to reverse it by recursion only.
------------------------------------------------------------------------------------------------------------------
InputFormat

First n lines will contain the stack of length n.
You have to stop taking input when you find -1
------------------------------------------------------------------------------------------------------------------
Constraints

n <= 1000
0 <= element of the stack <= 100000
------------------------------------------------------------------------------------------------------------------
Output
You have to display the reversed stack
------------------------------------------------------------------------------------------------------------------
Sample Input 1 

1
2
3
4
-1
11
34
12
33
------------------------------------------------------------------------------------------------------------------
Sample Output 1

4
3
2
1
------------------------------------------------------------------------------------------------------------------*/
const getStack = ( a , count = 0 , stack = [] ) =>{
        if(a.length == count) return;     //------1st base con
        if(a[count] == -1){              //-------main base con
            // console.log(stack)
            return stack;
        }
        //stack.push(a[count]);           //-------- add ele in last
        stack.unshift(a[count]);        //-------- add ele in front
        // console.log(a[count])
        return getStack(a,count+1,stack);
}
/* NOTE :-
getStack is takeing every ele but
insted of pushing to last i m adding
element in first place */

const stringOfarr = arr =>  arr.map( a => console.log(a) );
/* NOTE :- 
converts arr to required output string */

function runProgram(input) {
  a = input.split("\n");
  let stack = getStack(a);
  stringOfarr( stack );
}
