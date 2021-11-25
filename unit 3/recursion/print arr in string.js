// print arr in string

function absDiff(n,arr){
    if( n <= 1 ) return arr[0]
    return arr[n-1] + " " + absDiff(n-1,arr)
}

console.log( absDiff(5,[3,5,6,1,8]) )
//   8 1 6 5 3