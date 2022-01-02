function runProgram(input) {
  a = input.split("\n");
  
  let t = + a[0];
  let line = 1;
  let output = 0
  for( let i = 0 ; i < t ; i ++ ){
      let [c,i] = a[line].split(" ").map(Number);
      line++
      
      output += c*i
      
  }
  console.log(output)
  
  
}

runProgram(
`2
3 1
4 3`
)

console.log(522* 575* 426* 445* 772* 81* 447* 629* 497*202 )
console.log( 775 * 325* 982* 784* 417* 156* 932* 902* 728* 537)