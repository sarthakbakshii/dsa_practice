let ansArr = [];
let ansObj = {};
// ---------------------------------------------
const subarrayFromI = (arr ,ans= [],current = 0) =>{
    if( ans.length >= 0){
        //  console.log(ans.join(" "));
         ansObj[ans.join(" ")] = 1;
    }
    if( current == arr.length) return;
    
    for( let j = current ; j < arr.length ; j++ ){
        ans.push(arr[j]);
        subarrayFromI(arr,ans,j+1);
        ans.pop()
    }
}
// ---------------------------------------------
arr = [1,2,2]
subarrayFromI(arr)
console.log(ansObj)

let newArr = [];
for (const key in ansObj) {
    newArr.push(key)
}

newArr.sort()
newArr.map( a => console.log(a))