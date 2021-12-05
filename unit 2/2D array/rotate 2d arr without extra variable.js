let arr = [
    [1, 2, 3, 4],
    [5, 6, 7, 8],
    [9,10,11,12],
    [13,14,15,16]
]
/*
[
  [ 4, 8, 12, 16 ],
  [ 3, 7, 11, 15 ],
  [ 2, 6, 10, 14 ],
  [ 1, 5, 9, 13 ]
]
*/

let n = arr.length

for( let i = 0 ; i < n/2 ; i++){
    for( j = i ; j < n - i -1; j++){
        temp = arr[i][j];
        arr[i][j] = arr[j][n-i-1];
        arr[j][n-i-1] = arr[n-i-1][n-j-1];
        arr[n-i-1][n-j-1] = arr[n-j-1][i];
        arr[n-j-1][i] = temp
        
    }
}

console.log(arr)