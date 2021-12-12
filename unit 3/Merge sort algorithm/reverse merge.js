//============= DIVIDE AND CONQUER ================
// TL - 0( N )
// SC - N*Log( N )

arr = [9, 4, 7, 6, 3, 1, 5 ];
mergeSort(arr, 0, arr.length-1)
console.log(arr)

// so we will split split arr into 2 parts again and again
function mergeSort(arr, left, right ){
    
    if(left < right){
        const mid = Math.floor( (left + right) / 2 );
        mergeSort(arr, left, mid);      // <--- recursion
        mergeSort(arr, mid+1, right);   // <--- recursion
 
        merge(arr, left, mid, right)     // <--- merging
    }
}



function merge(arr, left, mid, right){

    let leftArr = [];
    let rightArr = [];
    for(let i = left; i <= mid; i++){
        leftArr.push(arr[i])
        // leftArr[i] = arr[i];
    }
    for(let i = mid+1 ; i <= right; i++){
        rightArr.push(arr[i])
        // rightArr[i] = arr[i];
    }

    let m = 0 ;
    let n = 0 ;
    let k = left ;
    while( m < leftArr.length && n < rightArr.length ){
        if( leftArr[m] >= rightArr[n] ){
            arr[k] = leftArr[m];
            m++;
            k++;
        }
        else{
            arr[k] = rightArr[n];
            n++;
            k++
        }
    }

    while ( m < leftArr.length) {
        arr[k] = leftArr[m];
        k++;
        m++
    }
    while ( n < rightArr.length ) {
        arr[k] = rightArr[n];
        k++;
        n++
    }
    // return arr
    // console.log(arr)
    
}


// function merge(arr, left, mid, right, arr2 = []){
//     let i = left;
//     let j = mid+1;
//     let k = left;
//     //  we are doing this till the time any one 
//     //  of the 2 splited arr gets epmty. 

//     while (i <= mid && j <= right) {
//             if ( arr[i] < arr[j] ){ 
//                 arr2[k] = arr[i];
//                 i++
//             }
//             else{
//                 arr2[k] = arr[j];
//                 j++
//             }
//         k++
//     }
//     // so when one splited partitrion arr gets empty 
//     // and sorted, then we will just directly
//     // place rest of the elemnt of second splited
//     // part over the arr2

//     if(i>mid){   // i.e, left arr is now empty
//        while (j <= right ) {  // copying all rest ele of 2nd part 
//             arr2[k] = arr[j];
//             k++; j++
//         }
//     }
//     else{      // i.e, Right arr is now empty
//         while (i <= mid)  {
//             arr2[k] = arr[i];
//             k++; i++
//         }
//     }

// }