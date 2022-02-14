/*
Same Tree
https://oj.masaischool.com/contest/3051/problem/04

Description

Given two binary trees, write a function to check 
if they are the same or not.

Two binary trees are considered the same if they are 
structurally identical and the nodes have the same value.

You have to complete the function below.You'll be 
given pointers to both tree's roots.There's no need 
to take any input. Just return the boolean true if 
both are the same and false if otherwise.


Input
This is a function complete problem. There's no need to take any input.

The input given below is for your understanding-

The first line contains the number of nodes in the tree 1 (t1)

Next t1 lines contain a node A1[i]

The next line contains the number of nodes in tree 2 (t2)

Next t2 lines contain a node A2[i]

t1, t2 <= 100

A1[i], A2[i] <= 1000


Output
Complete the function


Sample Input 1 

5
5
2
4
6
7
3
2
3
4

Sample Output 1

False
===================================================*/

// Definition of Binary Tree Node
// class Node {
//     constructor(val) {
//         this.val = val;
//         this.left = null;
//         this.right = null;
//     }
// }
// Complete the function below

function isSameTree(a,b){
    
     const ans = ldr(a,b) ;
    //  console.log("ans", ans)
     if( ans == undefined ){ return true}
     else {  return false }

}
function ldr(a,b){
    if(a !== null || b !== null){
        if(a.val !== b.val) return false;
        ldr(a.left,b.left);
        ldr(a.right,b.right)
    }
}