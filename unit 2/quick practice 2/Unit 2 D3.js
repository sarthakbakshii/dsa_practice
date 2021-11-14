//  question 1
// const q1 = (a,b,n) =>{
//     let out = 1;
//     for(let i = 0 ; i < n ; i++){
//         out *= a[i]*b[i]
//     }
//     console.log(out)
// }
// q1([1,2,3],[2,3,1],3)

// question2

// const q2 = (arr,n,k) =>{

    // way 1 - {2 pointer}
    // arr = arr.sort( (a,b) => a-b);

    // left = 0 ;
    // right = n-1 ;
    // max = -1;
    // while(left<right){
    //     sum = arr[left] + arr[right];
    //     if(sum>=k) right--;
    //     else if(sum<k){
    //         if(sum>max) max = sum;
    //         left++
    //     }
    // }
    // console.log(max)

    // way 2 - {brute force}
    // max = -1
    // for(let i = 0 ; i < n ; i++){
    //     for( let j = i+1 ; j < n ; j++){
    //         if(arr[i]+arr[j]<k){
    //         // console.log(arr[i] , arr[j]  , "|=|", arr[i]+arr[j]);
    //         if(arr[i]+arr[j] > max) { max = arr[i]+arr[j]}
    //         }
    //     }
    // }
    // console.log(max)
// }

// q2([1,2,3,4,5],5,7);
// q2([30,10,20],3,15)

//  question 3
const q3 = (arr,n,k) =>{

    // way 1 - {2 pointer}
    let left= 0 ;
    let right = 0;
    while(right<n){
        let diff = arr[right] - arr[left];

        if(diff == k) {
            return answer = "Yes"
        }
        else if(diff > k) { left ++}
        else { right++ }
        
    }
    return answer = "No"

    // way 2 - {brute force}
    // for(let i = 0 ; i < n ; i++){
    //     for( let j = i+1 ; j < n ; j++){
    //         diff = arr[j] - arr[i]; 
    //         if(diff==k) return "Yes"
    //     }
    // }
    // return "No"
}
console.log( q3([1,2,3,4,5],5,3) )
console.log( q3([1,2,3,4,5],5,8) )
console.log( q3([-8, -7, 5, 6, 6, 9],6,0))