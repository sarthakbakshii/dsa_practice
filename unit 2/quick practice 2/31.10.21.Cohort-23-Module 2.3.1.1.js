//  question 1

// --------------------------------------------------------------------------------------------------------------------------------------------------------------------
/*
function runProgram(input) {
  a = input.split("\n");

    let t = +a[0];
    let stack = [];
    
    for(i=1;i<a.length;i++){
         let arr = a[i].split(" ");
         if(arr[0]==1)         stack.push(arr[1]);
         else if(arr[0]==2)    stack.pop()      ;
         else if(arr[0]==3){
             if(stack.length==0)  console.log("Empty!");
             else  console.log(stack[stack.length -1])
         }
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
*/
// --------------------------------------------------------------------------------------------------------------------------------------------------------------------
//  questiopn 2
/*
function runProgram(input) {
  a = input.split("");
//   console.log(a);
//   ------------------------------------------------------------------------
  
//   let arr = []
  
//   for(i= 0 ; i< a.length ; i++){
//       if(i==0){
//           arr.push(a[i])
//       }
//       else{
//           if(arr[arr.length -1]==a[i]){
//               arr.pop()
//           }
//           else{
//               arr.push(a[i])
//           }
//       }
//   }
//   console.log(arr)
  
//   if(arr.length>0){
//       let aaa = arr.reduce( (a,b)=> a+b);
//     console.log(aaa)
//   }
//   else{
//       console.log("Empty String")
//   }

//   ------------------------------------------------------------------------

    let stack = [];
    
  for(i = 0 ; i < a.length ; i++){
      if(i==0){
          stack.push(a[i])
      }
      else{
          l = stack.length-1;
          
          if(a[i] == stack[l]) stack.pop();
          else stack.push(a[i])
      }
  }
//   console.log(stack)
        if(stack.length>0){
            sum = stack.reduce( (a,c) => a+c);
            console.log(sum)
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

*/
// --------------------------------------------------------------------------------------------------------------------------------------------------------------------
// question 3
/*
function runProgram(input) {
  a = input.split("\n");
  let stack = [];
  for(i = 1 ; i < a.length ; i++){
      let arr = a[i].split(" ");
      let l = stack.length;
      
      if(arr[0] == 2) stack.push(arr[1])
      else if( arr[0] == 1){
          if(l == 0) console.log("No Food");
          else{
              console.log(stack[l-1]);
              stack.pop()
          } 
      }
  }
//   console.log(stack)
  
  
  
  
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
*/
// --------------------------------------------------------------------------------------------------------------------------------------------------------------------
//  Smaller Neighbour Element

/*
function runProgram(input) {
  a = input.split("\n");
  let n = +a[0];
  let arr = a[1].split(" ").map(Number);
//   console.log(arr);

    let output = "";
    let stack  = [];
    
    for( i = 0 ; i < arr.length ; i++){
        
        while( (stack.length >0) && ( stack[stack.length -1] >= arr[i])){
            stack.pop()
        }
        if(stack.length == 0){
            output += -1 + " "
        }
        else {
            output += stack[stack.length -1] + " "
        }
        
        stack.push(arr[i])
    
    }
console.log(output)




  
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


*/
// --------------------------------------------------------------------------------------------------------------------------------------------------------------------
//  Again a classical problem BRACKET BALLANCE

/*
const q5 = str =>{
    str = str.split("")
    // console.log(str);

    let stack = [];

    for(let i = 0 ; i < str.length ; i++){
        if( str[i] == "(" || str[i] == "{" | str[i] == "[" ){
            stack.push(str[i])
        }
        else if( str[i] == ")" || str[i] == "}" | str[i] == "]" ){
            // ----------------------------------------------------------

            if( stack[stack.length -1]=="(" && str[i] == ")"  ){
                stack.pop();
            }
            else if( stack[stack.length -1]=="{" && str[i] == "}"  ){
                stack.pop();
            }
            else if( stack[stack.length -1]=="[" && str[i] == "]"  ){
                stack.pop();
            }
            else{
                return "not balanced";

            }

            // ---------------------------------------------------------
            
        }
    }
    
    if(stack.length > 0){
       return "not balanced"; 
    }
    return "balanced"
    // console.log(stack)

  
}


// ----------------------------------------------------------------

function runProgram(input) {
  a = input.split("\n");
  let n = +a[0];
  
  for( i = 1 ; i<= n ;i++){
      console.log(q5(a[i]))
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



*/
// --------------------------------------------------------------------------------------------------------------------------------------------------------------------


/*

*/
// --------------------------------------------------------------------------------------------------------------------------------------------------------------------

const check = str =>{
    str = str.split("")

    let s = [];

    for(i = 0 ; i < str.length ; i++){
        let a = str[i];
        if( a == "(" || a == "{" || a == "[" ) s.push(a);
        else if( a == ")" || a == "}" || a == "]"){
            // -------------------------------------------------------------

            if( s[s.length -1] == "(" && a == ")" ) s.pop();
            else if( s[s.length -1] == "{" && a == "}" ) s.pop();
            else if( s[s.length -1] == "[" && a == "]" ) s.pop();

            // -------------------------------------------------------------
        }
    }
    if( s.length == 0) return "balanced";
    else return "not balanced"

}
check("{([])}")
check("()")
check("([]")
