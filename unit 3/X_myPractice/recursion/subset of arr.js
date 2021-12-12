let ansArr = [];

// ---------------------------------------------
const subarrayFromI = (arr ,ans= [],current = 0) =>{
    if( ans.length >= 0){
         console.log(ans.join(" "));
         

    }
    if( current == arr.length) return;
    
    for( let j = current ; j < arr.length ; j++ ){
        ans.push(arr[j]);
        subarrayFromI(arr,ans,j+1);
        ans.pop()
    }
}
// ---------------------------------------------
let n = 3;

let arr = [];
for(let i = 1; i <=n ; i++ ){
    arr.push(i)
}
subarrayFromI(arr)

/*
1
1 2
1 2 3
1 3
2
2 3
3
*/


