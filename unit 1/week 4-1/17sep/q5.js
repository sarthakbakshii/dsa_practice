const pets = ['cat', 'dog', 'bat'];

const myIncludes = a =>{
  for(i=0;i<pets.length;i++){
     if(pets[i] == a)
          return true;
    else
          return false;
  }
}



console.log("my substring function:");
console.log(myIncludes('cat'));
console.log(myIncludes('catgirl'));
console.log();
console.log("original substring function:");
console.log(pets.includes('cat'));
console.log(pets.includes('catgirl'));