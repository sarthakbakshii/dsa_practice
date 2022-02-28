/*
Sum of left leaves 
https://oj.masaischool.com/contest/3051/problem/03

Description

Given a binary search tree. Find the sum of all 
left leaves in a given binary tree.

You have to complete the function below. You'll 
be given the pointer to the root of the binary 
search tree. There's no need to take any input. Return the sum.


Input
This is a function complete problem. There's no 
need to take any input.

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
2
7
6
8

Sample Output 1

8


                5 
           _____|_____
          |          |
    2 ->  2          7 
       ___|___
      |      |
6->   6      8 

6 + 2 == 8
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

function sumofLeftLeaves(root){
    let que = [];
    let sum = 0;
    que[0] = root;
    
    while( que.length > 0){
        const node = que.shift();
        if( node.left ){
            if(!node.left.left  && !node.left.right ){
                sum = sum + node.left.val
            }
            else{
                que.push(node.left)
            }
        }
        if(node.right ){
            que.push(node.right)
        }
    }
    
    return sum 

}


// function sumofLeftLeaves(root){

//     let res = 0; 
//     var sum = function(root) {
//         if(root == null) return 
//         if(root.left && root.left.left == null && root.left.right == null) res += root.left.val; 
//         sum(root.left); 
//         sum(root.right); 
        
//     };
//     sum(root)
//     return res 


// }

   
   
   
   

   
   
   
