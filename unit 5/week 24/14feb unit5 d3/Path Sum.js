/*
Path Sum 

https://oj.masaischool.com/contest/3069/problem/03
Password : 74f29c40

Description

Given a binary tree and a sum, determine if the 
tree has a root-to-leaf path such that adding up 
all the values along the path equals the given sum.

You have to complete the function below.You'll be 
given the pointer to the root of the binary tree 
and the sum.There's no need to take any input. 
Return the boolean true if there exists such 
path and false if otherwise.


Input

This is a function complete problem. There's no 
need to take any input.

The input given below is for your understanding-

The first line contains the number of nodes in the tree (t)

Next t lines contain a node A[i]

Next line contains the sum

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
9

Sample Output 1

True
=========================================== */

// Definition of Binary Tree Node
// class Node {
//     constructor(val) {
//         this.val = val;
//         this.left = null;
//         this.right = null;
//     }
// }
// Complete the function below
/*
            5
        6        4
   7        2        
*/
var hasPathSum = function(node,s) {
    
    return solution(node, s , curSum = 0);
}
 let solution = function(root, sum , curSum ) {
        if(root === null){ return false }
        if(root.left === null && root.right == null){
            if( curSum + root.val === sum){
                return true
            }else{
                return false
            }
        }
        curSum += root.val;
        
        return solution(root.left, sum, curSum) || solution(root.right, sum, curSum);
    }

