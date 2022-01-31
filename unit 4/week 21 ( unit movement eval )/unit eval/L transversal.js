/*
1  9   15  19  20
2  10  16  17  18
3  11  12  13  14
4  5   6   7   8 
=> 
|   |   |    |   |___->
| 1 | 9 | 15| 19  20
|   |   |   |_________->
| 2 | 10| 16  17  18
|   |   |____________->
| 3 | 11  12  13  14
|   |________________->
| 4   5   6   7   8 
|____________________->

output => 1 2 3 4 5 6 7 8 9 10 11 12 13 14 15 16 17 18 19 20
*/
const lTransvarsal = ( arr ) => {
    
    let row = arr.length;
    let col = arr[0].length
    let top = 0 ; 
    let bottom = row-1;
    let left = 0 ; 
    let right = col-1;
    
    let ring = row;
    let count = 0;
    let maxCount = row*col;
    let result = "";
    
    for( let i = 0 ; i < ring ; i ++ ){
        for( let i = top; i <= bottom && count < maxCount ; i++ ){
            result += arr[i][left] + " ";
            count++
        }left++;
        
        for(let j = left; j <= right && count < maxCount; j++ ){
            result += arr[bottom][j] + " ";
            count++
        }bottom--
    }
    console.log( result )
}