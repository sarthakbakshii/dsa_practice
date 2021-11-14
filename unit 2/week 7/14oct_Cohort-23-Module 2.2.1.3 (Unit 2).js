// -------------------------------------------  2   
const q2 = (N,M,arr) =>{
    for(i = 0; i<M ;i++){
        let out = 1;
        for( j=0 ; j<N ; j++){
            if(arr[j][i]%2!==0)
            out = out * arr[j][i];
        }console.log(out)
    }
}
// q2(3,3,[ [ 1, 2, 3 ], [ 4, 5, 6 ], [ 7, 8, 9 ] ])

// -------------------------------------------- 3

// const q3 = (row,col,arr) => {

//   var top = 0;
//   var bottom = row - 1;
//   var left = 0;
//   var right = col - 1;
//   var res = "";
//   count = 0;
//   size = row * col;

//   var ring = Math.ceil(row/2);
  
//   for (let i = 0; i < ring; i++) {
//     for (let i = bottom; i >= top ; i--) {
//       res += arr[i][left] + " ";
//       // count++;
//     }
//     left++;


//     for (let j = left; j <= right ; j++) {
//       res += arr[top][j] + " ";
//       // count++;
//     }
//     top++;

//     for (let i = top; i <= bottom ; i++) {
//       res += arr[i][right] + " ";
//       // count++;
//     }
//     right--;

//     // for (let j = right; j >= left && count < size; j--) {
//     for (let j = right; j >= left && count < size; j--) {
//       res += arr[bottom][j] + " ";
//       // count++;
//     }
//     bottom--;



//   }
//   console.log(res);
// }

const q3 = (row,col,arr) => {
  let top = 0 ; let bottom = row - 1;
  let left = 0 ; let right = col -1 ;
  let result = "";
  const ring = Math.ceil(row/2);
    count = 0;
  size = row * col;

  for(let i = 0 ; i<ring ; i++){
    for(let i = bottom ; i >=top && count < size ; i--){
      result += arr[i][left] +" ";
      count++
    }
    left++

    for(let j = left; j<= right && count < size ; j++){
      result += arr[top][j] +" ";
      count++
    }
    top++

    for(let i = top;i<= bottom && count < size ;i++){
      result += arr[i][right] + " ";
      count++
    }
    right--

    for(j = right; j >= left && count < size ; j--){
      result += arr[bottom][j] + " ";
      count++
    }

    bottom--
  }
    console.log(result)

}

q3(3,4,[ 
    [ 1, 2, 3, 4 ],
    [ 5, 6, 7, 8 ],
    [ 9, 10, 11, 12 ] ]);
 q3(4,3,[
      [ 1, 2, 3 ],
      [ 4, 5, 6 ], 
      [ 7, 8, 9 ], 
      [ 10, 11, 12 ] ]);


// ---------------------------------------------- 4

const q4 = (a,counter= 0) =>{
    a = a.toString();
    let sum = 0;
     result = false;
    // console.log(sum , a)
    if(counter<10){
                 for(let i=0;i<a.length;i++){
                    sum += a[i]*a[i];
                }
              console.log(sum);

                if(sum == 1){
                 return result = true ;
                }else{
                    counter++;
                    q4(sum,counter);
                }
    }
     
    return result
}

// console.log(q4(2))
// console.log(q4(19))

// -----------------------