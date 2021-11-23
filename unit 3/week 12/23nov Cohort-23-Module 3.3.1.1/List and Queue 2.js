/*
List and Queue 2
------------------------------------------------------------------------------------------------------------------
Description

You need to implement a list using queue data structure. You can only use queue.get() and queue.put() methods.

Note- import and the use queue data structure.
------------------------------------------------------------------------------------------------------------------
Input

The first line contains the number of operations (t).

Next t lines contains commands for the list.

Eg- Push 3 means add 3 in the list

Pop means to remove the last element of the list and print it on the screen

Note-If the list is empty print- 'Empty' (Without the quotes)
------------------------------------------------------------------------------------------------------------------
t <= 500000
------------------------------------------------------------------------------------------------------------------
Output

Print the last element as a single integer on the screen.
------------------------------------------------------------------------------------------------------------------
Sample Input 1 

3
Push 4
Push 5
Pop
------------------------------------------------------------------------------------------------------------------
Sample Output 1

5
------------------------------------------------------------------------------------------------------------------
Hint

After two push operations the list would look like - [4,5], popping it should return 5
------------------------------------------------------------------------------------------------------------------*/

// ---------------------------------------| que implimentation |---------------------------------

const que = [];
let front = 0;
let rear = 0;

const enQue = (ele) => {
    que[rear] = ele;
    rear++
}
const deQue = () => {
    deQued = que[front];
    if( front == rear) return "Empty";
    que[front] = -Infinity;
    front++
    return deQued;
}
const pop = () => {
    
    if( front == rear) return "Empty";
    rear-- ;
    poped = que[rear];
    que[rear] = -Infinity;
    
    return poped;
    
}
const len = () => rear - front ;

// ---------------------------------------| que implimentation |---------------------------------

// ------------------------------------------| main solving |------------------------------------

function runProgram(input) {
  a = input.split("\n");
  const t = + a[0];
  let line = 1;
  for(let i = 0 ; i < t ; i++){
              let [con,val] = a[line].split(" ");
              line++;
            //   console.log(con,val)
            
            if(con == "Push") enQue(val);
            else if(con == "Pop") console.log(pop());
            // console.log(que)
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

