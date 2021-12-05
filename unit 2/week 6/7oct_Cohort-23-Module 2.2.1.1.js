//---------------------------------------------------------------------------------------------

/*
1 2 3
4 5 6
7 8 9

N => 7 4 1 5 9 6 3 
*/
/*
function nTraversal(n,arr) {
  
    let output = "";
        for(i=0;i<1;i++){
            for(j=(n-1);j>=0;j--){
                output += arr[j][i] +" ";
            }
        }

        for(i=1;i<n;i++){
            for(j=i;j<(n-1);j++){
                output += arr[i][j] +" ";
            }
        }

        for(i=(n-1);i>=(n-1);i--){
            for(j=(n-1);j>=0;j--){
                output += arr[j][i] +" ";
            }
        }
        console.log(output)
}

const arr =[
    [1,2,3],
    [4,5,6],
    [7,8,9]
]
nTraversal(3,arr)
*/
//-------------------------------------------------------------
// Z => 1 2 3 5 7 8 9 

// function zTraversal(n,arr){
    
//     output = "";

//     for(i=0;i<1;i++){
//         for(j=0;j<n;j++){
//             output+= arr[i][j] +" ";
//         }
//     }

//     for(i=1;i<(n-1);i++){
        
//             output+= arr[i][(n-1)-i] +" ";
        
//     }
    
//     for(i=(n-1);i<n;i++){
//         for(j=0;j<n;j++){
//             output+= arr[i][j] +" ";
//         }
//     }
//     console.log(output)
  
// }

// const arr =[
//     [1,2,3],
//     [4,5,6],
//     [7,8,9],
// ]
// zTraversal(4,arr)

//--------------------------------------------------------

/*
2 2 2
1 2 3 4 5 6 7 8

arr = [
    [
        [a,b],
        [c,d]
    ],
    [
        [a,b],
        [c,d]
    ]
]

1 2 
3 4 
5 6 
7 8 

*/
// function Array3D(n,m,o,arr) {
//     let arr2 = [];
//     for(i=0;i<arr.length;i++){
//         //-------------------------------------
//             for(j=0;j<n;j++){
//                 arr[j] = [];
//                 for(k=0;k<m;k++){
//                     arr[j][k] = [];
//                     for(l=0;l<o;l++){
//                         arr2[j][k][l].push(arr[i])
//                     }
//                 }
//             }

//         //-------------------------------------
//     }
//     console.log(arr2)
// }
// Array3D(2,2,2,[1,2,3,4,5,6,7,8])

//------------------------------

function maximumOccuringElement(A,N){
    let data ={};
    for(i=0;i<N.length;i++){
        if(data[N[i]] == undefined)
                data[N[i]] =1;
        else
            data[N[i]] = data[N[i]] + 1
    }

    max = 0;
    for (const key in data) {
        if(data[key]>max)
            max=data[key];
        
    }
    console.log(max)
}
maximumOccuringElement(5,[0,2,0,6,9])