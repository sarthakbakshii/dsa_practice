/*
FLOOR OF NUMBER
--------------------------------------
descreption

greatest ele in arr, smaler than or equal to target
---------------------------------------
ex = [ 11,14,16,22,23]

celing( arr, target = 14 ) output : 14 , index: 1
celing( arr, target = 15 ) output : 14 , index: 1
celing( arr, target = 16 ) output : 16 , index: 2
celing( arr, target = 17 ) output : 16 , index: 2
celing( arr, target = 21 ) output : 16 , index: 2
celing( arr, target = 23 ) output : 23 , index: 4
celing( arr, target = 106 ) output : -1 , index: -1
--------------------------------------
*/


let arr = [ 11,14,16,22,23];
let n = 5;
let k = 106;


arr = arr.sort( (a,b) => a - b );

const floor = (arr, n, k, low = 0, high = n-1) => {

    if( k > arr[n-1] ) {
        return -1;
    }
    
            while (low <= high ) {
                let mid = low + Math.floor( (high - low ) / 2);
                if( arr[mid] == k) return mid;
                if( arr[mid] < k) low = mid + 1;
                else high = mid - 1;
            }
            return high
    
}
console.log( floor(arr, n , k) )