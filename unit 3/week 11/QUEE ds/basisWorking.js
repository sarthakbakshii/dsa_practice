var queue = [];

var rear = 0;
var front = 0;

function enque(ele){
    queue[rear] = ele;
    rear++
}
function deque(){
    if(front == rear){
        return -1;
    }
    queue[front] = -Infinity;
    front++
}

function queLength(){
    return rear - front;
}
// ---------------------------------
console.log(queue)
console.log(deque())
enque(1)
enque(2)
enque(3)
console.log(queue)
console.log(queLength())
deque()
deque()
console.log(queue)
console.log(queue[front])
console.log(queLength())
