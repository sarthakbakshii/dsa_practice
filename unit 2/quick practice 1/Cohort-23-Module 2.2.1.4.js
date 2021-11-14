//--------------------------------------------------------- 1

//Given an array of integers and a number k, find the maximum sum of a subarray of size k.
const q1 = (arr,k) =>{

    let n = arr.length;
    let sum = 0;

    for(i = 0; i<k;i++){
        sum += arr[i]
    }
    let max = sum ;

    let left = 0;
    let right = k;

    while(right<n){
        sum += arr[right] - arr[left];
        if(max < sum ) { max= sum};

        left++; right++
    }
    console.log(max)

}
let arr = [-1,-1 ,-2 ,1 ,-2, 4, 1, 9, 3, 9]
q1(arr,3)