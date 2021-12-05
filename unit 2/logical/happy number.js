const q4 = (a,counter= 0) =>{
    a = a.toString();
    let sum = 0;
     result = false;
    // console.log(sum , a)
    if(counter<10){
                 for(let i=0;i<a.length;i++){
                    sum += a[i]*a[i];
                }
              // console.log(sum);

                if(sum == 1){
                 return result = true ;
                }else{
                    counter++;
                    q4(sum,counter);
                }
    }
     
    return result
}

console.log(q4(2))
console.log(q4(19))

// -----------------------

const happynaumber = (a,counter = 0) => {
    a = a.toString();
    let sum = 0;
    result = false;

    if(counter <10){

            for(i = 0 ; i < a.length ; i++){
                sum += a[i]*a[i];
            }
            // console.log(sum)
            if(sum===1) return result = true;
            else{
                counter++;
                happynaumber(sum,counter)
            }
        }
    return result

}