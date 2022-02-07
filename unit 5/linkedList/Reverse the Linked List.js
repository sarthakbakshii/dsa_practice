/*
Reverse the Linked List

https://oj.masaischool.com/contest/2960/problem/05

Sample Input 1 

1
5
1
2
3
4
5
Sample Output 1

5 4 3 2 1 
*/


const LinkedListNode = class {
    constructor(nodeData) {
        this.data = nodeData;
        this.next = null;
    }
}

// Complete the function below


function reverse(head) {
            
        if(!head || !head.next){
              return head
          }
          let next=head.next;
          let newHead=reverse(next)
          next.next=head;
          head.next=null;
          
  return newHead

    
}

