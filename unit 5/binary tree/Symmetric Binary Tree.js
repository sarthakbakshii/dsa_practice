/*
Symmetric Binary Tree 
https://oj.masaischool.com/contest/3051/problem/05

Description

Given a binary tree, check whether it is a mirror 
of itself (ie, symmetric around its center).You'll 
be given a pointer to the root node, You have to 
complete the function and return true if it's 
symmetric and false if otherwise

Refer the following figure for better understanding.

Screenshot (76).png


Input
This is a function complete problem.There's no 
need to take any input.

The input given below is for your understanding-

The first line contains the number of nodes in the tree (t)

Next t lines contains a node A[i]

t <= 100

A[i] <= 1000


Output
Complete the function


Sample Input 1 

7
1
2
2
3
4
4
3
Sample Output 1

true

Hint

This is not a binary search tree but a general binary tree.

The tree structure here would be-

1

2           2

3   4      4   3
=========================================*/

class Node {
    constructor(val) {
        this.val = val;
        this.left = null;
        this.right = null;
    }
}
// Complete the function below

var isSymmetric = function (root) {
     const ans = ldr(root.left,root.right) ;
     
     if( ans == undefined ){ return true}
     else {  return false }
};

function ldr(a,b){
    if(a !== null || b !== null){
        if(a.val !== b.val) return false;
        ldr(a.left,b.right);
        ldr(a.right,b.left)
    }
}
