// const primecheck = a => {
//     let count = 0;
//     if(a == 1){
//         return false
//     }
    
//     else{
//             for(i=2;i<a;i++){
//                 if(a%i==0)
//                     count++;
//             }
//     }
    
//     if(count>0) return false;
//     else return true  ;
// }
// console.log(primecheck(7))

//     const ar = [
//   1, 2, 3, 4, 5,
//   6, 7, 8, 9
// ]

// for(k=0;k<ar.length;k++){
//     console.log(ar[k] +" " + primecheck(ar[k]) )
// }


//--------------------------
/*
const pat = a =>{
   // a = b.toString()
    for(i=0;i<a.length;i++){
        
        if(  (a[0] %2 !==0) && (a[a.length -1] %2 !==0)  ){
            return 1
        }else return 0
        
    }
}

const arr = [
  '1',    '12',    '123',
  '1234', '12345', '2',
  '23',   '234',   '2345',
  '3',    '34',    '345',
  '4',    '45',    '5'
]
let count = 0;
for(k=0;k<arr.length;k++){
    console.log(arr[k] +"  " + pat(arr[k]))
    count = count +pat(arr[k]);
}
console.log(count)

//-----------------------
 primecheck(a){
    let count = 0;
    if(a == 1){
        return 0
    }
    
    else{
            for(i=2;i<a;i++){
                if(a%i==0)
                    count++;
            }
    }
    
    if(count>0) return 0;
    else return 1  ;
}



function matrixPrimeCheck(n, m, arr) {
    let ar = [];
    for(i=0;i<n;i++){
        for(j=0;j<m;j++){
            ar.push(arr[i][j]);
        }
    }
    //console.log(ar)
    
    count = 0;
    for(k=0;k<ar.length;k++){
   // console.log(ar[k] +" " + primecheck(ar[k]) )
    count +=  primecheck(ar[k])
    }
    console.log(count)
    
}

*/


const pat = a =>{
    //a = b.toString()
    for(i=0;i<a.length;i++){
        
        if(  (a[0] %2 !==0) && (a[a.length -1] %2 !==0)  ){
            return 1
        }else return 0
        
    }
}
//-------------------------------------------------------------------------

function subArrQue(N, a) {
    //let count = 0;
    let arr = [];
    
    for(i=0;i<N;i++){
        let substr ="";
        for(j=i;j<N;j++){
            substr += a[j];
            //console.log(substr);
            arr.push(substr)
            
            
               
            
        }
        
    }
     console.log(arr)
     
     let count = 0;
        for(k=0;k<arr.length;k++){
            if(pat(arr[k])){
                     //console.log(arr[k] +"  " + pat(arr[k]))
           // count = count +pat(arr[k]);
           count++
            }
           
        }
        console.log(count)
    
     
     
    
    
}



subArrQue(5,[1,2,3,4,5])