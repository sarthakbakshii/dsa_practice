/*
Delete node without head

https://oj.masaischool.com/contest/2973/problem/01

Description

You are given a pointer/ reference to the node which is 
to be deleted from the linked list of n nodes. The task 
is to delete the node. Pointer/ reference to the head 
node is not given.

Note: No head reference is given to you.

You only need tocompletethe functiondeleteNodethat 
takes the reference to thenode that needs to be deleted. 
The printing is doneautomatically by thedriver code

Sample Input 1 

3
1
2
3
2
Sample Output 1

1 3
==============================================================
*/

/*
3
1
2
3
1 <----- this is node

ex- 
function deleteNode(node){
    console.log("node:",node)
    
}

output =>

node: LinkedListNode {
  data: 2,
  next: LinkedListNode { data: 3, next: null }
}
1 2 3


*/
const LinkedListNode = class {
    constructor(nodeData) {
        this.data = nodeData;
        this.next = null;
    }
};
// Complete the function below
function deleteNode(node){
    
    node.data = node.next.data;
    node.next = node.next.next
    return node
    
}
