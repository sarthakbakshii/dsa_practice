arr = [4, 5, 3, 7, 1];
indexArr = [0,1,2,3,4];

quicksort(arr,indexArr, 0 , arr.length -1 )
console.log(arr,indexArr)

function quicksort(arr,indexArr, left , right ){

    if( left < right){
        
        let index = patition( arr,indexArr, left, right);
        quicksort(arr,indexArr, left, index -1);
        quicksort( arr,indexArr, index+1 , right);
    }
}

function patition(arr,indexArr, left, right){

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

            let temp2 = indexArr[i];
            indexArr[i] = indexArr[j];
            indexArr[j] = temp2;
        }
    }

    let temp1 = arr[left];
    arr[left] = arr[j];
    arr[j] = temp1;

    let temp2 = indexArr[i];
            indexArr[i] = indexArr[j];
            indexArr[j] = temp2;


    return j;
}