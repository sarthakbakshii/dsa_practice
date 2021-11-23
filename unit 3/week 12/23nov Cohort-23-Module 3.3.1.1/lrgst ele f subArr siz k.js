/*
largest ele of subarr size K

Tallest Around
------------------------------------------------------------------------------------------------------------------
Description

You are curious to find who is the tallest person in a queue. But you don't wanna go with the traditional 
method and find who is the tallest in the whole queue, you want to pick an interval of 
like K people and find who is the tallest person in them.
------------------------------------------------------------------------------------------------------------------
Input

First line contains the number of cases (t)
Next 2t lines contains the length of the queue L, the integer K and the queue A in two different lines
------------------------------------------------------------------------------------------------------------------
t <= 500
L <= 1000
A[i] <= 100
------------------------------------------------------------------------------------------------------------------
Output tallest person in the intervals separated by space for each case.
------------------------------------------------------------------------------------------------------------------
Sample Input 1 

1
9 3
1 2 3 1 4 5 2 3 6
------------------------------------------------------------------------------------------------------------------
Sample Output 1

3 3 4 5 5 5 6
------------------------------------------------------------------------------------------------------------------
Hint

Since the interval is 3, In the first one heights are- 1, 2, 3 ; Tallest among them is 3.
 For the second interval the height are 2, 3, 1 and the tallest in them is 3 and so on.
------------------------------------------------------------------------------------------------------------------*/


// Way - 1 |--------------------------| sliding window |------------------------------------
const wayOne = (size,len,arr) => {
    
      let left = 0;
      let right = size;
      let output = "";
      
      while(right<=len){
          let longest = -Infinity;
          
          for(let j = left ; j < right ; j++){
              if(arr[j]>longest) longest = arr[j]
          }
        //   console.log(longest);

          output += longest + " ";
          right++;
          left++
      }
      console.log(output) 
}
// Way - 1 |--------------------------| sliding window |------------------------------------

// Way - 2 |----------------------| QUEUE |-----------------------------------------   
const longest = arr =>{
    
    long = arr[0];
    arr.map( a => { if(long < a) long = a });
    return long;
}

const wayTwo = (size,len,arr) =>{
    let output ="";
    const que = [];
    for(let i = 0 ; i < arr.length ; i++){
        que.push(arr[i]);
        if(que.length == size){
            output += longest(que) +" "
            que.shift();
        } 
    }
    console.log(output)
}     
// Way - 2 |----------------------| QUEUE |-----------------------------------------------



function runProgram(input) {
  a = input.split("\n");
  const testcase = + a[0];
  let line = 1
  
  for(let i = 0 ; i < testcase ; i++){
      let [len,size] =  a[line].split(" ").map(Number);
      line++;
      let arr = a[line].split(" ").map(Number);
      line++;
      
    //   wayOne(size,len,arr);
    wayTwo(size,len,arr)
  }



}


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

