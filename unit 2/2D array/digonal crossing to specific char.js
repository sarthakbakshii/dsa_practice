let arr = [
    [1,2,3],
    [4,5,6],
    [7,8,9]
]
let k = 6;
//      digonals crossing 6 =>
//      2 6
//      6 8

let row = arr.length;
let col = arr[0].length;

for(i= 0; i< row ; i++){
    for(j = 0 ;j < col; j++){
        if( arr[i][j] === k){
            var sum = i+j;
            var diff = i-j;
        }
    }
}

let d1 = [];
let d2 = [];

for(i= 0; i< row ; i++){
    for(j = 0 ;j < col; j++){
        if( i - j == diff ){
            d1.push( arr[i][j] );
        }
        if( i+j == sum ){
            d2.push( arr[i][j] )
        }
    }
}
console.log(d1.join(" "));
console.log(d2.join(" "));