/*
New Year Celebration
Description

New Year Celebration is coming near and DG is hosting a party for it, To make sure the party goes well she wants order in the party.There are two counters one of ice-cream and other for Cold-drinks.
On ice-cream counter the line was formed in form of Queue and on drinks counter the line was formed in order of Stacks.
She gave the management of the party to NV, NV made a plan to ask the manager following types of query.
------------------------------------------------------------------------------------------------------------------
Query types:

1 X : Number X enter the Queue.

2 X : Number X enter the Stack.

3: Output whoever is in-front of the queue.

4: Output whoever is on-top of the stack

5: Which person is in-front of queue get out of queue and enters the stack.

Note: If the Queue or Stack is empty then output "-1"
------------------------------------------------------------------------------------------------------------------

Input

The first line of input will contain Q, which is the number queries.
The next Q lines will different queries based upon query types given.
------------------------------------------------------------------------------------------------------------------

Constraints :

1<=Q<=10^5
1<=X<=10^9
------------------------------------------------------------------------------------------------------------------

Output
Output will consist of integers based upon Query types.If Query type is 3 then Output whoever is in-front of the queue, if Query type is 4 Output whoever is on-top of the stack.
------------------------------------------------------------------------------------------------------------------

Sample Input 1 

7
1 4
2 3
1 2
3
4
5
4
------------------------------------------------------------------------------------------------------------------
Sample Output 1

4
3
4
---------------------------------------------------------------------------*/

let que = [];
let stack = [];
let front = 0;
let rear = 0;

function enque(ele){
    que[rear] = ele;
    rear++;
}
function deque(){
    
    if(front == rear){
        return -1 ;
    }
    de = que[front];
    que[front] = -Infinity;
    front++;
    return de;
}
function len(){
    return rear-front;
}
function push(el){
    stack.push(el)
}
function pop(el){
    stack.pop(el)
}
// ---------------------------------------
function runProgram(input) {
  a = input.split("\n");
  let t = +a[0];
  
  let line = 1;
  for(let i = 0 ; i < t ; i++){
      let[condition,value] = a[line].split(" ");
      line++
      
    //   console.log(condition,value)
    if(condition == 1) enque(value);
    if(condition == 2) push(value);
    if(condition == 3) console.log(     que[front]==undefined?-1:que[front]          );
    if(condition == 4) console.log(    (stack.length == 0) ?-1:stack[stack.length-1] )
    if(condition == 5) push(deque());
    
  }
  
  
  
}