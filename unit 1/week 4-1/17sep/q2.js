const input ="     I can do it";

let word ="";
let arr= [];
//---------------------------------------------------
const myTrimStart = () =>{

    for(i=0;i<input.length;i++){
        if(input[i] != " "){
          word = word + input[i];
        }else{
          if(word.length>0){
            arr.push(word);
          }
          word ="";
        }
    }arr.push(word);
    
    return (arr.join(" "));

}

console.log(`
normal:`);
console.log(input);

console.log(`
myTrimStart function:`);
console.log(myTrimStart());

console.log(`
predefined function:`);
console.log(input.trimStart());


