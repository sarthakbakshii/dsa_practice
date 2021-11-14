// Excel Column number
// Description

// Given a column title as appear in an Excel sheet, return its corresponding column number.

// it is guaranteed that string consists of characters from 'A' - 'Z'.

// For example:

//     A -> 1
//     B -> 2
//     C -> 3
//     ...
//     Z -> 26
//     AA -> 27
//     AB -> 28 
//     ...

// Input
// 1<=T<=10

// 1<= |Si| <= 10


// Output
// output a single integer for all test case , the solution to the problem


// Sample Input 1 

// 3
// A
// AB
// ZY
// Sample Output 1

// 1
// 28
// 701

const q5 = (s) =>
{

    let result = 0;
    for (let i = 0; i < s.length; i++)
    {
        result *= 26;
        result += s[i].charCodeAt(0) - 'A'.charCodeAt(0) + 1;
    }
    return result;
}
// ------------------------------------
function runProgram(input) {
  inp = input.split("\n");
  let t =+inp[0];
  let line = 1;
  for(let i = 0 ; i<t ; i++){
      let val = inp[line];
      line++;
    //   console.log(val)
    console.log( q5(val) )
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
