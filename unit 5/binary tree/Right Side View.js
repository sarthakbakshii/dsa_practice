/*
Right Side View 
https://oj.masaischool.com/contest/3051/problem/01

Description

Given a binary tree, imagine yourself standing on the 
right sideof it, return the values of the nodes you can 
see ordered from top to bottom.

You have to complete the function below.You'll be given 
the pointer to the root of the binary tree.There's no 
need to take any input. Return an array that contains 
the right side view, from the top (root) to bottom.

Refer the figure below for better understanding.

Screenshot (70).png


Input
This is a function complete problem. There's no need to take any input.

The input given below is for your understanding-

The first line contains the number of nodes in the tree (t)

Next t lines contain a node A[i]

t <= 100

A[i] <= 1000


Output
Complete the function


Sample Input 1 

5
5
6
4
7
2

Sample Output 1

5
4
2

                5 <-
           _____|_____
          |          |
          6          4 <-
       ___|___
      |      |
      7      2 <-
+++++++++++++++++++++++++++++++++++++++++++++*/

// Definition of Binary Tree Node
// class Node {
//     constructor(val) {
//         this.val = val;
//         this.left = null;
//         this.right = null;
//     }
// }
// Complete the function below

var rightSideView = function(root) {
    let arr = [];
    let level = 0;
    
    ldr(root,arr,level)
    for(let i =  0 ; i < arr.length ; i++){
        console.log(arr[i])
    }
}

function  ldr(root,arr,level){
   if( root == null ) return;
   arr[level] = root.val
   
   ldr(root.left,arr,level + 1);
   ldr(root.right,arr,level + 1);
   
   
}





