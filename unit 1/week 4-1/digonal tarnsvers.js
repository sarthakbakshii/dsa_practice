// const arr = [
//    [1, 2, 3],
//    [4, 5, 6],
//    [7, 8, 9]
// ];
// const findDiagonalOrder = (arr = []) => {
//    if(!arr.length){
//       return [];
//    };
//    let ind = 0;
//    let colBegin = 0, rowBegin = 0;
//    let rowMax = arr.length, colMax = arr[0].length;
//    const res = [], stack = [];
//    while(rowBegin< rowMax || colBegin<colMax) {
//       for(let row = rowBegin, col = colBegin; row < rowMax && col >=0 ;
//       row++,col--){
//          if(ind%2 === 0){
//             stack.push((arr[row][col]));
//          }else{
//             res.push(arr[row][col]);
//          };
//       };
//       ind++;
//       console.log(stack);console.log(res)
//       while(stack.length){
//          res.push(stack.pop());
//       };
//       colBegin++
//       if(colBegin> colMax-1 && rowBegin < rowMax){
//          colBegin = colMax-1
//          rowBegin++
//       }
//    };
//    //return res
//    console.log(res)
// };
// //console.log(findDiagonalOrder(arr));
// findDiagonalOrder(arr)


// //////////////////////////

/*

const arr = [
   [1, 2, 3],
   [4, 5, 6],
   [7, 8, 9]
];

let m = arr.length;
let n = arr[0].length;

for(k=0;k<arr.length;k++){
    i = k;
    j = 0;
    let out = "";
    while(i>=0){
        out += arr[i][j]+ " ";
        
        i--;
        j++;
    }
    console.log(out);
}

for(k=1;k<arr[0].length;k++){
    i = arr.length-1;
    j = k;
    let out = "";
    while(j<=n-1){
        out += arr[i][j]+ " ";
        
        i--;
        j++;
    }
    console.log(out);
}
*/
//--------------------------------
/*
let out = "";
for(k=0;k<arr.length;k++){
    i = k;
    j = 0;
    //let out = "";
    while(i>=0){
        out += arr[i][j]+ " ";
        
        i--;
        j++;
    }
    
}
// console.log(out);
for(k=1;k<arr[0].length;k++){
    i = arr.length-1;
    j = k;
  //  let out = "";
    while(j<=n-1){
        out += arr[i][j]+ " ";
        
        i--;
        j++;
    }
   
}
 console.log(out);
 */
//---------------------------------------------------

// let n = 5;
// let string = "";
// for (let i = 1; i <= n; i++) {
//   for (let k = 0; k < i; k++) {
//     string += String.fromCharCode(k + 65);
//   }
//   string += "\n";
// }
// for (let i = 1; i <= n - 1; i++) {
//   for (let k = 0; k < n - i; k++) {
//     string += String.fromCharCode(k + 65);
//   }
//   string += "\n";
// }
// console.log(string);

//--------------------------------------------------------

// let n = 5;
// let string = "";

// for (let i = 1; i <= n; i++) {
//   for (let k = 1; k <= i; k++) {
//     string += k;
//   }
//   string += "\n";
// }

// for (let i = 1; i <= n - 1; i++) {
//   for (let k = 1; k <= n - i; k++) {
//     string += k;
//   }
//   string += "\n";
// }
// console.log(string);

//------------------------------------------
/*
var matrix = [
    [1,2,3,10],
    [4,5,6,11],
    [7,8,9,12],
    [13,14,15,16]
]
var K = 5;
var F = 2*matrix.length;

 var res = "";
 var res2 = ""

 for(var k=0; k<F; k++){
 for (i = 0; i < matrix.length; i++) {
    for (j = 0; j < matrix.length; j++) {
      if (i + j == k) {
        res = res + matrix[i][j] + " ";
      }

    
    }
    
  }
  
}
console.log(res);
*/
//1 2 4 3 5 7 10 6 8 13 11 9 14 12 15 16

//------------------------------------------------------------

// matrix = [
//   [1, 2, 3],
//   [4, 5, 6],
//   [7, 8, 9],
// ];
// var R = 3;
// var C = 3;
// var K = 5;
// for (i = 0; i < R; i++) {
//   for (j = 0; j < R; j++) {
//     if (matrix[i][j] == K) {
//       var position = [i, j];
//     }
//   }
// }
// console.log(position);
// res = "";
// var res2 = "";
// var kp = position;
// var d1 = kp[0];
// var d2 = kp[1];
// for (i = 0; i < R; i++) {
//   for (j = 0; j < C; j++) {
//     if (i - j == d1 - d2) {
//       res = res + matrix[i][j] + " ";
//     }
//     if (i + j == d1 + d2) {
//       res2 = res2 + matrix[i][j] + " ";
//     }
//   }
// }
// console.log(res);
// console.log(res2);
/*
1 5 9 
3 5 7
*/

//-------------------------------------------------------------

// function specificDiagonals(R, C, matrix, K){
//     //write code here
//   for(var i=0; i<R ; i++){
//       for(var j=0; j<C; j++){
//           if(matrix[i][j] === K){
//               var sum =  i+j;
//               var diff = i-j;
//           }
//       }
//   }
//    var d1 = [];
//    var d2 = [];
//   for(var i=0; i<R; i++){
//       for(var j=0; j<C; j++){
//           if(i-j == diff){
//              d1.push(matrix[i][j]); 
//           }
//           if(i+j === sum){
//               d2.push(matrix[i][j])
//           } 
//       }
//   }
//   console.log(d1.join(" "));
//   console.log(d2.join(" "));
// }

// const ar = [
//     [1, 2, 3],
//     [4, 5, 6],
//     [7, 8, 9]
// ]

// specificDiagonals(3,3,ar,5)

//--------------------------------------------------------------------------------

/*
var arr = [
    [1,2,3,4],
    [5,6,7,8],
    [9,10,11,12],
    [13,14,15,16]
]

let m = arr.length;
let n = arr[0].length;
let output = [];

for(k=0;k<arr.length;k++){
    i = k;
    j = 0;
    let out = "";
    while(i>=0){
        out += arr[i][j]+ " ";
        
        i--;
        j++;
    }
    console.log(out);

    output.push(out)
}


for(k=1;k<arr[0].length;k++){
    i = arr.length-1;
    j = k;
    let out = "";
    while(j<= arr[0].length-1){
        out += arr[i][j]+ " ";
        
        i--;
        j++;
    }
    console.log(out);

   output.push(out)
}
console.log("-----------------------------------")

console.log(output)

console.log("-----------------------------------")

let zigzak ="";
for(i=0;i<output.length;i++){
    if(i%2!=0){
        zigzak += output[i].trim().split(" ").reverse().join(" ") +" "
    }else{
        zigzak += output[i].split(" ").join(" ");
    }
}
console.log(zigzak )


console.log("-----------------------------------")

let zigzak_rev ="";
for(i=0;i<output.length;i++){
    if(i%2==0){
        zigzak_rev += output[i].trim().split(" ").reverse().join(" ") +" "
    }else{
        zigzak_rev += output[i].split(" ").join(" ");
    }
}
console.log(zigzak_rev)

*/

/* output ---------------

1 
4 2 
7 5 3
13 8 6 10
14 9 11
15 12
16
-----------------------------------
[ '1 ', '4 2 ', '7 5 3 ', '13 8 6 10 ', '14 9 11 ', '15 12 ', '16 ' ]   
-----------------------------------
1 2 4 7 5 3 10 6 8 13 14 9 11 12 15 16
-----------------------------------
1 4 2 3 5 7 13 8 6 10 11 9 14 15 12 16

*/



//------------------------------------------
/*
var matrix = [
    [1,2,3,4],
    [5,6,7,8],
    [9,10,11,12],
    [13,14,15,16]
]
// var K = 5;
var F = 2*matrix.length;

 var res = "";
 var res2 = ""

 for(var k=0; k<F; k++){
 for (i = 0; i < matrix.length; i++) {
    for (j = 0; j < matrix.length; j++) {
      if (i + j == k) {
        res = res + matrix[i][j] + " "; 
        //res = res + matrix[j][i] + " ";
      }

    
    }
    
  }
  
}
console.log(res);
*/
//1 2 4 3 5 7 10 6 8 13 11 9 14 12 15 16

//------------------------------------------------------------

var matrix = [
    [1,2,3,4],
    [5,6,7,8],
    [9,10,11,12],
    [13,14,15,16]
]

let output = ""
                        for (let i = 0; i < 4; i++){
                            for (let j = 0; j < 4; j++){
                                     if ((i + j) == (4 - 1)) {
                                            output += matrix[i][j];
                                    }
                            }
                        }
                        console.log(output)