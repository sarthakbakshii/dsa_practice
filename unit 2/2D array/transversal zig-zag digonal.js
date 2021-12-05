let arr = [
    [1, 2, 3, 4],
    [5, 6, 7, 8],
    [9,10,11,12],
    [13,14,15,16]
]
/*
output=>
1 2 5 9 6 3 4 7 10 13 14 11 8 12 15 16 
*/

let output = [];

for( let k = 0 ; k < arr.length ; k++){
    i = k ; 
    j = 0 ;
    let out = "";

    while (i >= 0) {
        out += arr[i][j] + " ";
        i--;
        j++
    }
    // console.log(out);
    output.push(out)
}
/*
output => 
1 
5 2 
9 6 3 
13 10 7 4 
*/
for( let k = 1 ; k < arr[0].length ; k++ ){
    i = arr.length -1;
    j = k;
    let out = "";
    while ( j <= arr[0].length-1) {
        out += arr[i][j] + " ";
        i--;
        j++;
    }
    // console.log(out)
    output.push(out)
}
/*
output =>
14 11 8 
15 12 
16 
*/

let zigzak = "";
for(i = 0 ; i < output.length ; i++){
    if(i%2!==0){
        zigzak += output[i].trim().split(" ").reverse().join(" ") + " ";
    }
    else{
        zigzak += output[i].trim().split(" ").join(" ") + " ";
    }
}
console.log(zigzak)