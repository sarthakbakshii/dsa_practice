/*
Insert a node at the Head
https://oj.masaischool.com/contest/2960/problem/01

Sample Input 1 

3
1
2
3
Sample Output 1

1
2 1
3 2 1
*/

const LinkedListNode = class {
    constructor(nodeData) {
        this.data = nodeData;
        this.next = null;
    }
};

// Complete the function below

function insertNodeAtHead(head, data) {
    var node = new LinkedListNode(data);
    node.next = head;
    head = node;
    return data
}

