// -----------------------------------------------
symetry_arr = [
      [0,2,3,3,2,1],
["a","b","r","r","b","a"],
  ["a",1,"c","c",1,"a"],
["a","b","r","r","b","a"],
     [0,2,3,3,2,1]
]


const  horzontal = (arr,n,m) => {  // check left to right and right to left
     let left = 0;
     let right = m-1;

     for(let i=0;i<n;i++){
          let rToL = "";
          for(let j=left; j<=right ; j++){
               rToL += arr[i][j]
          }

          let test2 = "";
          for( let j=right;j>=left;j--){
               test2 += arr[i][j]
          }
          // console.log(rToL , test2)
          if(rToL !== test2) return false
     }
     return true

} 
//  console.log(horzontal(symetry_arr,5) )

const vertical = (arr,n,m) => {

     let top = 0 ;
     let bottom = n-1;
     for(i = 0 ; i <m ; i ++){
          let test1 = "";
          for(j = top ; j <= bottom ; j++){
               test1 += arr[j][i]
          }
          let test2 = "";
          for(j = bottom ; j >= top ; j--){
               test2 += arr[j][i]
          }
          // console.log(test1 , test2)
          if(test1 !== test2) return false
     }
     return true

}
// console.log( vertical(symetry_arr,5,6) )


const sym = (arr,n,m) =>{
    
     const h = horzontal(arr,n,m);
     const v = vertical(arr,n,m);
     if(h == true && v == true) console.log("BOTH");
     else if(h == true) console.log("HORIZONTAL")
     else if(v == true) console.log("VERTICAL");
     else console.log("NO")
}
// sym(symetry_arr,5,6);

// sym([ [ '.', '.', '*' ], [ '*', '*', '.' ], [ '.', '.', '*' ] ],3,3);
// sym([ [ '.', '*', '.' ], [ '*', '.', '*' ], [ '.', '*', '.' ] ],3,3)
// sym([
//   [ '*', '.', '*', '.' ],
//   [ '.', '*', '.', '*' ],
//   [ '*', '.', '*', '.' ],
//   [ '.', '*', '.', '*' ]
// ],4,4)