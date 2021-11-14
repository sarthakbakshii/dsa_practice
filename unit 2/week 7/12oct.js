/*
3 3 1
3 3 2

1 2 3
4 5 6
7 8 9

to => 1 2 3 6 5 4 7 8 9 
if => q = 1;

otherwise

to => 3 2 1 4 5 6 9 8 7
if => q = 2;

// */
const querySelector = (n,m,ar,q) =>{
    let out = "";
    if(q==1){
                        for(i=0;i<n;i++){
                                for(let j = 0 ; j < m ; j++){
                                    if(i%2!==0)
                                    out += ar[i][m-j-1] + " ";
                                    else
                                     out += ar[i][j] + " ";
                                }
                        }
                        
                    
    }
    else if(q==2){
                        for(i=0;i<n;i++){
                             for(let j = 0 ; j < m ; j++){
                                if(i%2==0)  out += ar[i][m-j-1] + " ";
                                else        out += ar[i][j] + " ";
                            }
                        }
                    
    }
    console.log(out)
}


let ar = [
    [1,2,3,"a"],
    [4,5,6,"b"],
    [7,8,9,"c"]
]
//querySelector(3,4,ar,1)
//querySelector(3,4,ar,2)

// -----------------------------------------------------

// let ar = [
//     [1,2,3,4],
//     [1,2,3,4],
//     [1,2,3,4],
//     [1,2,3,4]
// ]
// const borderless = (n,m,ar) =>{
//     let sum = 0;
//     for(let i = 0 ; i < n ; i++){
//         for(let j = 0 ; j < m ; j++){
//             //if( (i!=0) || (i!=(n-1)) || (j!=0) || (j!=(m-1)) ){
//                 if(i!=0 && i!=(n-1)&& j!=0 && j!=(m-1)){
//                     sum += ar[i][j]
//             }
//             //sum += ar[i][j]
//         }
//     }console.log(sum)
// }
// borderless(4,4,ar)
// -----------------------------------

//equilibriam

const equilibriam = (n,ar) => {
    for (let i = 0; i < n; ++i ) {

        let sumleft = 0;
        for (let j = 0; j < i; j++) {
            sumleft += ar[j];       
        }

        let sumright = 0;
        for (let j = (i+1); j < n; j++) {
            sumright += ar[j];          
        }
        console.log(sumleft,sumright)
        // if(sumleft==sumright)
        // return i;
    }
    return -1
}


   


//console.log(equilibriam(5,[3,9,5,6,1]))

// --------------------------------------------
// symitry

let arr =[
    ["a1","a2","a3","a2","a1"],
    ["b1","b2","b3","b2","b1"],
    ["c1","c2","c3","c1","c1"],
    ["d1","d2","d3","d2","d1"],
    ["e1","d2","e3","e2","e1"]
]
const stmetry = (n,ar) =>{
  
    for (let i = 0; i < n; i++) {
        
        let leftHalf = "";
        // let ascaiLeftHalf = 0; 
        for (let j = 0; j < n/2 ; j++){
                leftHalf += ar[i][j] + " ";
                // ar[i][j].split("").map(a =>{
                //     ascaiLeftHalf+= a.charCodeAt(0)
                // })
        }
        // console.log(ascaiLeftHalf)
        console.log(leftHalf);

        let rightHalf = ""; 
        // let ascaiRighttHalf = 0;
        for (let j = parseInt(n/2) ; j < n ; j++){
                rightHalf += ar[i][j] + " ";
                // ar[i][j].split("").map(a =>{
                //     ascaiRighttHalf+= a.charCodeAt(0)
                // })
        }
        // console.log(ascaiRighttHalf)
        console.log(rightHalf.trim().split(" ").reverse().join(" "));

        if(leftHalf == rightHalf.trim().split(" ").reverse().join(" ")){
            console.log("yes")
        }
    }
}
stmetry(5,arr);