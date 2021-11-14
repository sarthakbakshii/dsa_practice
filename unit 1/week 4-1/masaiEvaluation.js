//-------------------------------------------------| question 1 |---------------------------------
console.log("------------------------------------------------------")
console.log()
console.log("  solution of 2: - ");
console.log()

let circle = {
  radius : 5,
  area(){
          const a = (3.14*this.radius*this.radius);
          return a;
         //console.log(this.radius)
  },
  per(){
          const p = (3.14*2*this.radius);
          return p;
         //console.log(this.radius)
  }
}
console.log(circle.area())
console.log(circle.per())


//-------------------------------------------------| question 1 |---------------------------------


//-------------------------------------------------| question 2 |---------------------------------
console.log("------------------------------------------------------")
console.log()
console.log("  solution of 2: - ");
console.log()


const data = {
  name :["sarthak","punam","avish","bangalan"],
  gender: ["m","f","m","f"],
  getNoOfUserByGender(a){
        const gen = this.gender;
        const nam = this.name;
        let count=0;

        for(i=0;i<gen.length;i++){
          if(gen[i]==a){
            console.log(nam[i]);
           count++
          }
        }console.log("no of user with required input is " + count);
        console.log()
  },
    getGenByName(a){
        const gen = this.gender;
        const nam = this.name;
        let count= "";
        for(i=0;i<nam.length;i++){
              if(nam[i]==a)
                count = gen[i];
          }    
          if(count==""){
            console.log("gender of " +a + " is N/A")
          }else{
            console.log("gender of " +a + " is "+count)
          }  
    }
}
data.getNoOfUserByGender("f");
data.getGenByName("avish")


//-------------------------------------------------| question 2 |---------------------------------

//-------------------------------------------------| question 3 |---------------------------------
console.log("------------------------------------------------------")
console.log()
console.log("  solution of 3: - ");
console.log()

const checkChar = (a,search) =>{
        let count=0;
        for(i=0;i<search.length;i++){
            if(search[i] == a){
                count++
            }
        }
        if(count>0) return true;
        else return false
}

//console.log(checkChar("a","masai school"));

const checkWord = (a,search) =>{
            let ar = [];
            for(j=0;j<a.length;j++){
                    //console.log(checkChar(a[j],search))
                   // console.log(a[j])
                    ar.push(checkChar(a[j],search))
            }
             // console.log(ar)  
        let count=0;
            for(i=0;i<ar.length;i++){
                if(ar[i] == false)
                    count++
            }
           // console.log(count)
           if(count==0){
               return true
           }else return false;
            
}
 console.log(checkWord("masz","masai school"));
// checkWord("mas","masai school");
console.log("------------------------------------------------------")
