/*
Insert a node at the Tail
https://oj.masaischool.com/contest/2960/problem/02

Sample Input 1 

3
1
2
3
Sample Output 1

1
1 2
1 2 3
*/


const LinkedListNode = class {
    constructor(nodeData) {
        this.data = nodeData;
        this.next = null;
    }
};

// Complete the function below

function insertNodeAtTail(head, data) {
    let node = new LinkedListNode(data);
    // if(!head )
    if(head == null ){
        head = node;
    }
    else{
        let temp = head;
        while(temp.next !== null){
            temp = temp.next;
        }
        temp.next = node
    }
    return head
}

