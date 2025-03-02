/*
New Year Celebration
https://oj.masaischool.com/contest/2362/problem/01
Password : 29031

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
let stack = [];

const push = (el) => stack.push(el);
const pop = el => stack.pop();

let que = [];
let front = 0;
let rear = 0;

const enQue  = el => {
    que[rear] = el;
    rear++
}
const deQue = () =>{
    if(front == rear) return -1;
    let temp = que[ front ];
    que[ front ] = -Infinity;
    front++ ;

    return temp;
}
const len = () => {
    return rear - front;
}
// ---------------------------------------------------------------------------

const run = input =>{
    a = input.split("\n");
    let t = + a[0];
    let line = 1;

    for( let i = 0 ; i < t ; i++){
        let [n,k] = a[line].split(" ").map(Number);
        line++ ;
        
        switch (n) {
            case 1: enQue(k);
                break;
            case 2: push(k);
                break;
            case 3: console.log( que[ front ]== undefined? -1 : que[front] );
                break;
            case 4: console.log( (stack.length == 0) ?-1:stack[stack.length-1] )
                break;
            case 5: push( deQue() )
        
        }
    }
}

run(
`7
1 4
2 3
1 2
3
4
5
4`
)