  let arr = a[1].split(" ").map(Number);
  
//   console.log(n ,arr)
  
  let output = "";
  let count =0;
  let stack = [];
  for( i = 0 ; i < arr.length ; i++ ){
      
      while(   (  stack.length > 0 ) && ( stack[stack.length -1 ] >= arr[i] )  ){
          stack.pop()
      }
      if(stack.length == 0){
          output += -1 + " ";
          count++
      }
      else {
          output += stack[stack.length -1 ] + " "
      }
      stack.push(arr[i])
  }
//   console.log(output)
  console.log(count)
  
  
  
  
}