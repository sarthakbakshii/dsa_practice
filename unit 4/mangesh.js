let arr = [3,2,3]
let obj = {};
let n = arr.length
for(let i = 0 ; i  <arr.length ; i++){
    if(obj[arr[i]] == undefined )  obj[arr[i]] = 1;
    else obj[arr[i]]++
}
// console.log(obj);

let ans = ""

for (const key in obj) {
    if ( obj[key] > n/3 ) {
        ans += key.toString() +" "
    }
}
console.log(ans);