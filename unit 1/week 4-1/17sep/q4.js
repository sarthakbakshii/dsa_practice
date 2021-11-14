const str = 'Mozilla';

const mySubstring = (a,b) =>{
  let word = "";

  for(i=(a-1);i<b;i++){
    word += str[i];
  }
  return word;
}

console.log("my substring function:");
console.log(mySubstring(1, 3));
console.log(mySubstring(3, 7));
console.log();
console.log("original substring function:");
console.log(str.substring(0, 3));
console.log(str.substring(3, 7));