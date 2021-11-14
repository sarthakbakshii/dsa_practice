//----------------------------------
/* 
4 3
1 8 9
2 7 10
3 6 11
4 5 12

4 3 2 1 5 6 7 8 12 11 10 9

*/
//function traverse2dArray(n, m, matrix){
//     let output ="";
//     for(i=0;i<m;i++){
//         for(j=(n-1);j>=0;j--){
//             output += matrix[j][i] +" "      
//         }
//     }console.log(output)
  
// }
// const arr = [
//     [1,8,9],
//     [2,7,10],
//     [3,6,11],
//     [4,5,12]
// ]
// traverse2dArray(4,3,arr)

//---------------------------------------
// 9 10 11 12 8 7 6 5 1 2 3 4

// function traverse2dArray(n, m, matrix){
//     let output ="";
//     for(i=(m-1);i>=0;i--){
//         for(j=0;j<n;j++){
//             output += matrix[j][i] +" "      
//         }
//     }console.log(output)
  
// }
// const arr = [
//     [1,8,9],
//     [2,7,10],
//     [3,6,11],
//     [4,5,12]
// ]
// traverse2dArray(4,3,arr)

//--------------------------------------------------------

/*
Given amatrixwithNrows andMcolumns. Print the matrix elements starting from the top right corner and follow a zig-zag pattern.


5 5
4 7 1 1 7
8 9 9 6 1
6 4 9 5 1
7 7 4 7 7
8 6 2 5 5

7 1 1 7 4 8 9 9 6 1 1 5 9 4 6 7 7 4 7 7 5 5 2 6 8
*/

// function goInZigZag(n, m, matrix){
//     let output = "";
//     for (let i = 0; i < matrix.length; i++) {
//         if( i % 2 != 0){
//             for (let j = 0; j < matrix[i].length; j++) {
//                 output += matrix[i][j] + " ";
                
//             }
//         }
//         else{
//             for (let j = (matrix[i].length - 1); j >= 0  ; j--) {
//                 output += matrix[i][j] + " ";
                
//             }
//         }

        
//     } console.log(output)
// }

// const arr = [    
//     [4,7,1,1,7],
//     [8,9,9,6,1],
//     [6,4,9,5,1],
//     [7,7,4,7,7],
//     [8,6,2,5,5]
// ]

//  goInZigZag(5,5,arr);