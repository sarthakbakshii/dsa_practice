const input = "this is a beautiful day";


const myStartWith = (a) =>{
  const lenOfWord = a.length;
  let testWord = "";

  for(i=0;i<lenOfWord;i++){
    testWord += input[i];
  }
  if(testWord == a)
  return true;
  else
  return false;

}

console.log("my startwith function:");
console.log(myStartWith("this"));
console.log(myStartWith("beautiful"));
console.log();
console.log("original startwith function:");
console.log(input.startsWith('this'));
console.log(input.startsWith('beautiful'));