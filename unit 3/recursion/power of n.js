
let x= 2;
let n = 3;
 function pow(x,n){
     if(n == 0 ) return 1;
     return x*pow(x,n-1)
 }
console.log( pow(x,n) )