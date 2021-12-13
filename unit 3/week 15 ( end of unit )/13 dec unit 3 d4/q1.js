
const per = (arr, c =0) => {

    if(c == arr.length){
        console.log(arr);
        return;
    }
    for(let i = c ; i< arr.length ; i++){
        swap(arr,i,c);
        per(arr, c+1 );
        swap(arr,i,c);
    }
}

const swap = (arr,i,j) =>{
    temp = arr[i];
    arr[i] = arr[j];
    arr[j] = temp;
}



let arr = [1,2,3];
per(arr)