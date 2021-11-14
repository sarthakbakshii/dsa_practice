
input = "aabbbcc455sa"

arr = input.split("");
let arr2 = [];
for(i= 0 ; i <arr.length ;i++){
    if(!arr2.includes(arr[i]))
    arr2.push(arr[i])
}
// console.log(arr)
// console.log(arr2)

let out ="";
for(let i = 0 ; i < arr2.length ; i++){
    let count = 0;
    
    for(let j = 0 ; j<arr.length ; j++){
        if(arr2[i]==arr[j])
        // console.log(arr2[i] , arr[j])
        count++
    }
    out += arr2[i]+count
    

}
console.log(out)


    //     let obj = {};
    // for(let i = 0 ; i < input.length ; i++){
    //     if(obj[input[i]]==undefined)  obj[input[i]] = 1;
    //     else obj[input[i]]++
    // }
    // // console.log(obj)
    
    // let out = ""
    // for(let key in obj){
    //     out += key+obj[key]
    // }
    // console.log(out)
  
  
  console. log(55 + "6") 
console. log("55" + "6") 
console. log(55 - "6") 
console. log("55" - "6"+6)
