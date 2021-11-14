const animals = ['ant', 'bison', 'camel', 'duck', 'elephant'];

const mySlice = (a,b) =>{
      let arr =[];

      if(b==null){
            for(i=a;i<animals.length;i++){
                  arr.push(animals[i]);
            }
      }

      else{
            for(i=a;i<b;i++){
                  arr.push(animals[i]);
            }       
      }
      return arr;

}
console.log("my slice function:");
console.log(mySlice(2));
console.log(mySlice(2, 4));
console.log();
console.log("original slice function:");
console.log(animals.slice(2));
console.log(animals.slice(2, 4));