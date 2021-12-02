input = "2 4"
output = "16"


 let[a,b] = input.split(" ").map(Number);
  
  const power = (a,b,t=0) => {
      if( t == b) return 1;
      return a*power(a,b,t+1)  ;
  }
  
  console.log(power(a,b));
  