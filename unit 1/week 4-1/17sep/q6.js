const elements = ['Fire', 'Air', 'Water'];

const myJoin = a =>{

  let output = "";
  let finaloutput = "";

  if(a == null){
        for(i=0;i<elements.length;i++){
          output += elements[i] + ",";
        }//return output;
    }
  else{
        for(i=0;i<elements.length;i++){
          output += elements[i] + a;
        }//return output;
  }
  //return (output.length-1);
  for(i=0;i<( output.length - 1 );i++){
    finaloutput += output[i];
  }
  return finaloutput;

  
}
console.log("original join function:");
console.log(myJoin());
console.log(myJoin("_"));
console.log();
console.log("original join function:");
console.log(elements.join());
console.log(elements.join("_"));