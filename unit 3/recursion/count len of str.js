// count length of string using recursion

function runProgram(input) {
  let str= input
  let len = str.length;
//   console.log(len)
    
    function countLen(str,index) {
        if(index == 0) return 0;
        return 1+ countLen(str,index-1)
    }
 console.log(    countLen(str,len)    )
  
  
}