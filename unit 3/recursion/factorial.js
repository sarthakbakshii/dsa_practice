  
//   5! == 5*4! == 5*4*3*2*1!
//   n! == n*(n-1)! || n > 1

function fact(a){
    if( a == 1) return 1;
    return a*fact(a-1)
}
  console.log(fact(input))