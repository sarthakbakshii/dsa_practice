const animals = ['Tiger', 'Dodo', 'Tiger', 'Penguin', 'Dodo'];

const myLastIndexOf = (a,b) =>{
    const l = animals.length;

    if(b == null){

      for(i=(l-1);i>=0;i--){
        if(animals[i]==a)
            return i ;
      }

    }
    else{

      for(i=(b-1);i>=0;i--){
        if(animals[i]==a)
            return i ;
      }

    }
}

//myLastIndexOf('Dodo');

console.log("original lastIndexOf function:");
console.log(myLastIndexOf('Dodo'));
console.log(myLastIndexOf('Dodo',2));
//console.log();
console.log("original lastIndexOf function:");
console.log(animals.lastIndexOf('Dodo'));
console.log(animals.lastIndexOf('Dodo',2));