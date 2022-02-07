/*
Insert at a specific position

https://oj.masaischool.com/contest/2960/problem/03

Sample Input 1 

3
16
13
7
1
2
Sample Output 1

16 13 1 7
*/


const LinkedListNode = class {
    constructor(nodeData) {
        this.data = nodeData;
        this.next = null;
    }
};

// Complete the function below

function getNode(data){
    return new LinkedListNode(data)
}

function getByPosition(head,position){
    
}

function insertNodeAtPosition(head, data, position) {
    let node = new LinkedListNode(data);
    if(position == 0){
        node.next = head;
        head = node;
    }else{
        temp = head;
        for(let i = 0 ; i < position-1 ; i++){
            temp = temp.next
        }
        node.next = temp.next;
        temp.next = node
    }
    return head
}

