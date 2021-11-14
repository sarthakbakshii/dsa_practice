const input ="I cant do it.";

let word ="";
let arr= [];
//---------------------------------------------------
const arraySpliter = () =>{

    for(i=0;i<input.length;i++){
        if(input[i] != " "){
          word = word + input[i];
          //console.log(word);
        }else{
          arr.push(word)
          //console.log( arr.push(word));
          word ="";
        }
    }arr.push(word);
    
    return arr;

}
//---------------------------------------------------
const myReplace = (replaceFrom,replaceTo) =>{
  let arr = arraySpliter();
  let replaceIndex = 0;
  
  for(i=0;i<arr.length;i++){
    if(arr[i] == replaceFrom ){
          replaceIndex = i;
    }
  }
  
  arr[replaceIndex] = replaceTo;
  return (arr.join(" "));
  
}
//---------------------------------------------------

console.log(`my function:`);
console.log(myReplace("cant","can"));
console.log(`
predefined function:`);
console.log(input.replace("cant","can"));