/*
People in Queue 
------------------------------------------------------------------------------------------------------------------
Description

You have to make a Queue of people of size K which can process two type of request :

Type 1 : A person with identity X will enter the queue, if the person can enter the queue output the number X else output -1 in a new line.
Type 2:  In this type of query you need to process the person who is at the front of queue, if no person is present in the queue output -1 else output the identity of the number.
The Queries will be of the form :
1 X   - Type 1 Query which means this person with identity X is trying to enter the queue

2      - Type 2 Query which means you need to process the person in front of the queue

A person cannot enter a queue if the queue is full, also the front person is removed after being processed (if any)

Note: Type 1 Query is followed by an integer X which denotes identity of the person. See Hint for better explanation.
------------------------------------------------------------------------------------------------------------------
Input

The First line of input will contain K , Q, denoting size of queue and the number of queries
The next Q lines will contain the Q queries.
------------------------------------------------------------------------------------------------------------------
Constraints:

1 <= K,Q <= 10^5
1<= X <= 10^6
------------------------------------------------------------------------------------------------------------------
Output

For each query output the result in a new line.
------------------------------------------------------------------------------------------------------------------
Sample Input 1 

2 6
1 1
1 2
1 3
2
2
2
------------------------------------------------------------------------------------------------------------------
Sample Output 1

1
2
-1
1
2
-1
------------------------------------------------------------------------------------------------------------------
Hint

In Sample 1:
K = 2 , Q = 6

Size of Queue  = 3 and Queries  = 8

Query 1: 1 1 which means person with identity 1 is trying to enter the Queue, also the size of queue is 3 and it has space left so we allow 1 to enter and output it's identity

Query 2: 1 2 which means person with identity 2 is trying to enter the Queue, it enters as well

Query 3: 1 3, which means person with identity 3 is trying to enter the queue but the queue is full , so we output -1

Now for Query of type 2 if something is present in front of queue then we process it and output it's identity, else we output -1

Query 4: 2 , In front of queue we have 1 , so it will be processed and removed from queue, so we output 1

Query 5: 2 , In front of queue we have 2 , so it will be processed and removed from queue, so we output 2
------------------------------------------------------------------------------------------------------------------*/

// ---------------------------------------| que implimentation |---------------------------------

const que = [];
let front = 0;
let rear = 0;

const len = () => rear - front ;

const enQue = (ele,size) => {
    length = len();
    
    if( length < size){
        que[rear] = ele;
        rear++;
        return ele
    }
    else{
        return -1
    }
    
}
const deQue = () => {
    deQued = que[front];
    if( front == rear) return -1;
    que[front] = -Infinity;
    front++
    return deQued;
}


// ---------------------------------------| que implimentation |---------------------------------


// ------------------------------------------| main solving |------------------------------------

function runProgram(input) {
  a = input.split("\n");
  
  let [size,testcase] = a[0].split(" ").map(Number);
  let line = 1;
  for(let i = 0 ; i < testcase ; i++){
      
      let[con,val] = a[line].split(" ").map(Number); 
      line++
      
      if(con == 1 )      console.log(enQue(val,size))
      else if( con == 2) console.log(deQue())
      
  }
  
  
}

// ------------------------------------------| main solving |------------------------------------

if (process.env.USER === "") {
  runProgram(``);
} else {
  process.stdin.resume();
  process.stdin.setEncoding("ascii");
  let read = "";
  process.stdin.on("data", function (input) {
    read += input;
  });
  process.stdin.on("end", function () {
    read = read.replace(/\n$/, "");
    read = read.replace(/\n$/, "");
    runProgram(read);
  });
  process.on("SIGINT", function () {
    read = read.replace(/\n$/, "");
    runProgram(read);
    process.exit(0);
  });
}

