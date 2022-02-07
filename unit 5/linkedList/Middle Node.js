/*
Middle Node 

https://oj.masaischool.com/contest/2960/problem/06

Description

Given a non-empty, singly linked list with the head nodehead, return a middle node of the linked list.

If there are two middle nodes, return the second middle node.

Complete the functionbelow, no need to take any input.

Sample Input 1 

3
1
2
3
Sample Output 1

2
*/

const LinkedListNode = class {
    constructor(nodeData) {
        this.data = nodeData;
        this.next = null;
    }
};

var middleNode = function(head) {
    
    let fast = head;
    let slow = head;
    while(fast!==null && fast.next!==null ){
         fast = fast.next.next;
         slow = slow.next
        
    }
    return slow.data
    
};

