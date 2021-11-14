/*
reduce String

-------------------------------------------------
* Description

Given a string of lowercase characters in range ascii[‘a’..’z’].

You can perform one operation on this string in which you can selects 
a pair of adjacent lowercase letters that match, and delete them.

For instance, the string aab could be shortened to b in one operation.

Your task is to delete as many characters as possible using this method 
and print the resulting string. If the final string is empty, print "Empty String" (without quotes).

Please note that characters can be deleted only if they form a pair and 
are same(i.e from aaa we can only delete 2 a's and will be left with a single a).

I know there exists a simple implemented Stringentation based solution of 
this question, but please try to come up with an approach that uses stack 
data structure to solve the purpose
-------------------------------------------------

* Input

First and the only line contains string
------------------------------------------------

* Constraints

N<1000
------------------------------------------------

* Output

If the final string is empty, print Empty String; otherwise, print the final non-reducible string.
------------------------------------------------

* Sample Input 1 

aaabccddd
-----------------------------------------------

* Sample Output 1

abd
-----------------------------------------------
* Hint

Sample 1 Explanation

You can perform the following sequence of operations to get the final string:

aaabccddd -> abccddd -> abddd -> abd
*/

function runProgram(input) {
  a = input.split("");
//   console.log(a);
  
  let arr = []
  
  for(i= 0 ; i< a.length ; i++){
      if(i==0){
          arr.push(a[i])
      }
      else{
          if(arr[arr.length -1]==a[i]){
              arr.pop()
          }
          else{
              arr.push(a[i])
          }
      }
  }
  console.log(arr)
  
  if(arr.length>0){
      let aaa = arr.reduce( (a,b)=> a+b);
    console.log(aaa)
  }
  else{
      console.log("Empty String")
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
