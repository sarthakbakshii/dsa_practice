/*
Nth node from the 

https://oj.masaischool.com/contest/2960/problem/07

Description

Given a linked list consisting of nodesand given 
a number N. The task is to find the nth nodefrom 
the end of the linked list.

No need to take any input, just complete the 
function below and return the nth node.

Sample Input 1 

3
1
2
3
1
Sample Output 1

3
*/

const LinkedListNode = class {
    constructor(nodeData) {
        this.data = nodeData;
        this.next = null;
    }
};

function nth_node(head,n){
    
    // ---- reverse
    
    //   if(!head || !head.next){
    //           return head
    //       }
    //       let next=head.next;
    //       let newHead=reverse(next)
    //       next.next=head;
    //       head.next=null;
          
    // ---- insted of finding nth from last , after reversing, we will find n from starting 
    
    
    let size = 0;
    let temp = head;
    while(temp !== null){
        temp = temp.next;
        size++
    }
    // console.log(size)
    
    let temp1 = head;
    for(let i = 0; i < size - n ; i++ ){
        temp1 = temp1.next;
    }
    return temp1.data
    
    
    
}
