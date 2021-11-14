var arr1 =["SARTHAK","BAKSHI","DON"];
var arr3 =[];

function letter(a){
  return a.toLowerCase();
}
console.log(letter("A"));
//------------------
function word(b){
  return letter(b);
}
console.log(word("SARTHAK"));
//--------------------------------
function arr(c){
  for(i=0;i<c.length;i++){
      
      arr3.push(word(c[i]));
      
  }
  return arr3
}
console.log(arr(arr1));
