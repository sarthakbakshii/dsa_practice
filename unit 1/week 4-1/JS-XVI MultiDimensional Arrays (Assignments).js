// const pat = a =>{
//     for(i = 1 ; i <= a ; i++){
//         let word = "";
//         if(i==1 || i == a){
//                 for( j = 1; j <= a ; j++){
//                     word += "* ";
//                 }
//         }
//         else{
//            // for( j = 1;j<i ; j++){
//             for( j = 0;j<(a-i) ; j++){
//                     word += "  " ;
//                 }
//                 word += "*"
//         }

//         console.log(word)
        
//     }
// }
// pat(10);
// console.log("")
// //-------------------------------------------------|

// const pat2 = b =>{
//     if(b%2== 0)
//         a = b+1;
//     else
//         a = b



//      for(i = 1 ; i <= a ; i++){
//         let word = "";
//         if(i== (parseInt(a/2)+1) ){
//             for( j = 1; j <= a ; j++){
//                 word += "* ";
//             }
//         }
//         else{
//              for( j = 1; j <= (a/2) ; j++){
//                 word += "  ";
//             }
//             word += "*"
//         }

//                 console.log(word)
//      }   
// }
// pat2(9)

//------------------------------------| Q1 |-------------------------------------------
/*
arr = [1,2],[3,4],[5,6]

1 2
3 4 
5 6

*/
// const arr = [ [1,2],[3,4],[5,6] ];

// for(i = 0 ; i < arr.length ; i++){
//     let word = "";
//     for( j = 0 ; j < arr[i].length ; j++){
//         word += arr[i][j]+" ";
//     }
//     console.log(word)
// }

//------------------------------------| Q2 |-------------------------------------------
/*

*/

// const arr = [ [1,2],[3,4],[5,6] ];
// n = arr.length;
// m = arr[0].length
// for(i = 0 ; i < m ; i++){
    

//     let word = "";
//     for( j = 0 ; j < n ; j++){
//         word += arr[j][i]+" ";
//     }
//     console.log(word)
// }

//-------------------------------------------------------------------------

// const q3 = a =>{
//     const char = " abcdefg";
//     let sum = 0
//     for( i = 0 ; i < a.length ; i++){
//         console.log(a[i])
//         for( j = 0 ; j < char.length ; j++){
//             if(a[i] == char[j])
//             //sum += j;
//             console.log(j)
//         }
//     }console.log(sum)
    
// }
// q3("abc")

// const q4 = (a,b) =>{
// let arr = [];
// let sum = 0;
//     for(i = 0 ; i < b.length ; i++){
        
//         let ar = [];
//         for(j = (i+1) ; j < b.length ; j++){
//             if(b[i] + b[j] == a){
//                 ar.push(b[i]);
//                 ar.push(b[j]);
//                 arr.push(ar)
//                 sum++
//             }
//         } 
//     }console.log(arr);console.log(sum)
// }
// q4(9,[3,0,6,2,7])



// const s = "abcab";
// let count = 0
// for(i=0;i<s.length;i++){
//     let word = "";
//     for(j=i;j<s.length;j++){
//         if(s.charAt(i)==s.charAt(j))
//          count++

//     }
// }console.log(count)

const s = "A Transformation in education";
const ar = s.split(" ");
console.log(ar)
const ra = ar.reverse()
console.log(ra)