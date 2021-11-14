const arr1 =["SARTHAK","BAKSHI","DON"];

const letter = l => l.toLowerCase();
console.log(letter("A"));
//------------------
const word = w => letter(w);
console.log(word("SARTHAK"));
//--------------------------------
const arr = ar => ar.map(key => word(key));
console.log(arr(arr1));

// for clear code -> js-xi-backup;