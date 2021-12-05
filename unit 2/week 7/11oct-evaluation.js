const topbottom = arr => {
     
     let arr2 = [];

     for(let i = 0 ; i < arr.length ; i++){
          if(!arr2.includes(arr[i]))
               arr2.push(arr[i]);
     }
     // console.log(arr2)
     arr2 = arr2.sort( (a,b) => a - b);
     // console.log(arr2)
     const n = arr2.length;
     if(n<3){
          console.log("Not Possible")
          console.log("Not Possible")
     }
     else{
          console.log(`${arr2[0]} ${arr2[1]} ${arr2[2]}`)
          console.log(`${arr2[n-3]} ${arr2[n-2]} ${arr2[n-1]}`)
          
     }

}
// topbottom([1,2,3,3,2,1])
// topbottom([-4,-7,-2,-11,-2,-8,0,-122,-66,10])
// ----------------------------------------------



// -----------------------------------------------
// symetry_arr = [
//       [0,2,3,3,2,1],
// ["a","b","r","r","b","a"],
//   ["a",1,"c","c",1,"a"],
// ["a","b","r","r","b","a"],
//      [0,2,3,3,2,1]
// ]


// const  horzontal = (arr,n,m) => {  // check left to right and right to left
//      let left = 0;
//      let right = m-1;

//      for(let i=0;i<n;i++){
//           let rToL = "";
//           for(let j=left; j<=right ; j++){
//                rToL += arr[i][j]
//           }

//           let test2 = "";
//           for( let j=right;j>=left;j--){
//                test2 += arr[i][j]
//           }
//           // console.log(rToL , test2)
//           if(rToL !== test2) return false
//      }
//      return true

// } 
// //  console.log(horzontal(symetry_arr,5) )

// const vertical = (arr,n,m) => {

//      let top = 0 ;
//      let bottom = n-1;
//      for(i = 0 ; i <m ; i ++){
//           let test1 = "";
//           for(j = top ; j <= bottom ; j++){
//                test1 += arr[j][i]
//           }
//           let test2 = "";
//           for(j = bottom ; j >= top ; j--){
//                test2 += arr[j][i]
//           }
//           // console.log(test1 , test2)
//           if(test1 !== test2) return false
//      }
//      return true

// }
// // console.log( vertical(symetry_arr,5,6) )


// const sym = (arr,n,m) =>{
    
//      const h = horzontal(arr,n,m);
//      const v = vertical(arr,n,m);
//      if(h == true && v == true) console.log("BOTH");
//      else if(h == true) console.log("HORIZONTAL")
//      else if(v == true) console.log("VERTICAL");
//      else console.log("NO")
// }
// sym(symetry_arr,5,6);

// sym([ [ '.', '.', '*' ], [ '*', '*', '.' ], [ '.', '.', '*' ] ],3,3);
// sym([ [ '.', '*', '.' ], [ '*', '.', '*' ], [ '.', '*', '.' ] ],3,3)
// sym([
//   [ '*', '.', '*', '.' ],
//   [ '.', '*', '.', '*' ],
//   [ '*', '.', '*', '.' ],
//   [ '.', '*', '.', '*' ]
// ],4,4)

// ----------------------------------------------------------------------------------------
const equilibriam = arr => {
     n =arr.length;
     for(i=0;i<n;i++){
          lsum = 0;
          for(j=0;j<i;j++) lsum += arr[j];

          rSum = 0;
          for(j = i+1 ; j<n ;j++) rSum += arr[j];

          console.log(lsum , rSum)
          if(lsum == rSum) return i;
      
     }
     return -1

}
// console.log( equilibriam([3,3,5,5,1]) )

//-------------------------------------------------

const product = (arr,m) => {
     count = 0;
     for(i = 0 ; i < arr.length ; i ++){
          for(j = i+1 ; j < arr.length ; j++){
               if(arr[i] * arr[j] == m)
               count++
          }
          
     }
     return count
}
console.log( product([3,2,2,1,5], 4) )
