/*
Level Order Traversal 
https://oj.masaischool.com/contest/3051/problem/02

Description

Given a binary tree, return the level ordertraversal 
ofits nodes' values. (ie, from left to right, level by level).

You have to complete the function below.You'll be given t
he pointer to the root of the binary tree.There's no need 
to take any input. Return an array that has all the level 
order traversal in separate arrays.


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
6 4
7 2


                5 <-              5
           _____|_____
          |          |
          6          4 <-        6,4
       ___|___
      |      |
      7      2 <-                7,2
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

var levelOrder = function(root) {
    let arr = [];
    let obj = {};
    let level = 0;
    ldr(root,arr,obj,level)
    
    arr = arr.sort( (a,b) => a.level - b.level)
    // console.log(arr)
    
    let temp = 0
    let arrTemp = []
    for(let i = 0 ; i < arr.length ; i++){
        if(arr[i].level == temp) arrTemp.push(arr[i].val)
        else{
            console.log(arrTemp.join(" "))
            arrTemp = [];
            temp++;
            arrTemp.push(arr[i].val)
            
        }
    }
   console.log(arrTemp.join(" "))

}
const ldr = (root,arr,obj,level) =>{
    if(root !== null){
      arr.push( { val : root.val , level });
      ldr(root.left,arr,obj,level + 1);
      ldr(root.right,arr,obj,level + 1)
        
    }
}
