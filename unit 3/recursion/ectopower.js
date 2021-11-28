
// e^x = 1 + x + ( x^2 / 2!) + ( x^3 / 3!) + (x^4 / 4!) ...

// x^n =  1 + x + ( x^2 / 2!) + ( x^3 / 3!) + (x^4 / 4!) ... (x^n / n!)

// // ---------- power
//  function pow(x,n){
//      if(n == 0 ) return 1;
//      return x*pow(x,n-1)
//  }

// //  ----------- factorial
// function fact(a){
//     if( a == 1) return 1;
//     return a*fact(a-1)
// }
// // console.log(fact(2))

// // ---------- main

// function main(x,n){
   
//     if( n == 0 ) return 1;
//     let p = pow(x,n);
//  let f = fact(n);
//     ans =  p/f + main(x,n-1)
//     return ans
// }
// console.log(main(4,2) )

// ------ real solution==================
function runProgram(input) {
  let [x,n] = input.split(" ").map(Number);
  
  // ---------- power
     function pow(x,n){
         if(n == 0 ) return 1;
         return x*pow(x,n-1)
     }
    
    //  ----------- factorial
    function fact(a){
        if( a == 1) return 1;
        return a*fact(a-1)
    }
    // console.log(fact(2))
    
    // ---------- main
    
    function main(x,n){
       
        if( n == 0 ) return 1;
        let p = pow(x,n);
     let f = fact(n);
        ans =  p/f + main(x,n-1);
        
       return  ans
    }
    
    console.log(main(x,n).toFixed(4))
   
    
  
  
  
}