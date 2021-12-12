arr = [9, 4, 7, 6, 3, 1, 5 ];
quicksort(arr, 0 , arr.length -1 )

function quicksort(arr, left , right ){

    if( left < right){
        
        let index = patition( arr, left, right);
        quicksort(arr, left, index -1);
        quicksort( arr, index+1 , right);
    }
}
console.log(arr)

function patition(arr, left, right){

    i = left;
    j = right;
    let pivot = arr[left];

    while (i< j) {
        while(arr[i] <= pivot && i < right){
            i++;
        }
        while (arr[j] > pivot && j > left) {
            j--;
        }
        if( i < j) {
            let temp = arr[i];
            arr[i] = arr[j];
            arr[j] = temp;
        }
    }

    let temp1 = arr[left];
    arr[left] = arr[j];
    arr[j] = temp1;

    return j;
}