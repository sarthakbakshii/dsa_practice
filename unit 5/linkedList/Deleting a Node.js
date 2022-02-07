/*
Deleting a Node

https://oj.masaischool.com/contest/2960/problem/04

Sample Input 1 

8
20
6
2
19
7
4
15
9
3
Sample Output 1

20 6 2 7 4 15 9
*/


const LinkedListNode = class {
    constructor(nodeData) {
        this.data = nodeData;
        this.next = null;
    }
};

// Complete the function below

function deleteNode(head, position) {
    if(position == 0){
        return head
    }else{
        temp = head;
        for(let i = 0 ; i < position -1 ; i++){
            temp = temp.next
        }
        temp.next = temp.next.next
        return head
    }
 
}

