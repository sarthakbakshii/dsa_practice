/*
Buy ticket.js
Description

There is a long waiting line of integers waiting for their turn to buy ticket for a cricket match.
There are N operations that can be performed on this line. The operations are of following type:
------------------------------------------------------------------------------------------------------------------

E x : Integer x enters the queue (For such operation, print the new length of the queue.)
D: The integer at front buys ticket and leaves the queue (For such operations, print the element that left the queue and the new size of the queue separated by space. If there is no element in the queue then print -1 in place of deleted element.)
------------------------------------------------------------------------------------------------------------------

Input

First line consists of a single integer denoting N
Each of the following N lines contain one of the operation as described above.
------------------------------------------------------------------------------------------------------------------
Constraints :

1<=N<=100
------------------------------------------------------------------------------------------------------------------
Output
For each enqueue operation print the new size of the queue.
And for each dequeue operation print two integers, deleted element (-1, if queue is empty) and the new size of the queue.
------------------------------------------------------------------------------------------------------------------
Sample Input 1

5
E 2
D
D
E 3
D
------------------------------------------------------------------------------------------------------------------
Sample Output 1

1
2 0
-1 0
1
3 0

-------------------------------------------------------------------------------------------------------------------*/

let que = [];
let front = 0;
let rear = 0;
function enque(ele){
    que[rear] = ele; rear++
}
function deque(){
    dequed = que[front];
    if(rear == front) return -1 ;
    que[front] = -Infinity;
    front++;
    return dequed;
}
function len(){ 
    return rear - front
    }
// ---------------------------------
function runProgram(input) {
  a = input.split("\n");
  let t = +a[0];
  let l = 1;
  for( let i = 0 ; i < t ; i++ ){
      let [con,val] = a[l].split(" ")
      l++;
    //   console.log(con,val)
    if(con == "E"){
        enque(val);
        console.log(len())
    }
    if(con == "D"){
        console.log(deque()+" " +len())
    }
  }
  
  
  
}

