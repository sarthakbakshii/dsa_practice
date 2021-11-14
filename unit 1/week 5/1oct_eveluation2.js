//----------------------------------| 1 |---------------------

/*
function mapSymbolsSum(N, str) {
  
  const ch = " !@#$%^&*"
  let sum =0
  for(i=0;i<str.length;i++){
      for(j=0;j<ch.length;j++){
          if(str[i]==ch[j]){
              //console.log(str[i] +" "+j)
              sum += j;
          }
      }
      
  }
  console.log(sum)
}
mapSymbolsSum(5,"!@%#$")

*/

//--------------------| 2 |-----------------
/*
function playOf4and6(n) {
    if(n%4==0 && n%6==0)
        console.log("Awesome!");
    else if(n%4==0)
        console.log("Four!");
    else if(n%6==0)
        console.log("Six!");
    else
        console.log("Dark!");    
}
playOf4and6(12)
*/

//----------------------------[ c ]---------------
/*
function patternPrinting3(N){
    for(i=1;i<=N;i++){
        let out ="";
        for(j=1;j<=N;j++){
            if(i==1 || i==N){
                    out += "* ";
            }else{
                if(j==N){
                   out += "* "; 
                }else{
                    out += "  ";
                }
            }
            
        }
        console.log(out)
    }
}
patternPrinting3(10)
*/

//--------------------------------------------------

