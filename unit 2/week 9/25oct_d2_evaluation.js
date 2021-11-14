// ----------------------------------- 1
// 1
// 3
// 1 2 3
// 2 3 1

// 36

const q1 = (arr1,arr2) =>{

    let out = 1;
    for(let i = 0;i<arr1.length ;i++){
        out = out * arr1[i]
    }
    for(let i = 0;i<arr2.length ;i++){
        out = out * arr2[i]
    }
    console.log(out)
}
// ar1 = [1,2,3];
// arr2 = [2,3,1];
// q1(ar1,arr2)


// ---------------------------------------------- 2
// 5
// 1 2 3 4 5
// 7

// 3
// 30 10 20
// 15



// 6
// -1


const q2 = (arr,k,n) =>{
    arr = arr.sort( (a,b) => a-b)
    
    
    

    // max = -1;
    // for(let i = 0 ; i< n ; i++){
    //     let sum = 0;
        
    //     for(let j = i+1;j<n ; j++){
    //         // console.log(arr[i],arr[j])
    //         sum = arr[i] + arr[j];
    //         // console.log(sum)
    //         if(sum < k && sum> max)
    //          { max = sum }
    //     }
    // }
    // console.log(max)

    // left = 0;
    // right = n-1;
    // max = -1

    while(left<right){
        sum = arr[left]+arr[right];
        if(sum>=k) { right-- }
        else if(sum<k){
            if(sum > max) { max = sum};
            left++
        }
    }
    console.log(max)
}
// a = [1,2,3,4,5];
// b = [10,20,30];
// // q2(a,7,5)
// console.log(q2(a,7,5))
// console.log(q1(b,15,3))

// ----------------------------------------------------------------------- 3

const q3 = (arr,n,k) =>{

    left = 0
    right = n-1;
    while(left<right){
        diff = arr[right] -arr[left];
        if(diff==k){return "Yes"}
        else if(diff>k){ right-- }
        else { left++ }
    }
    return "No"
}

// console.log( q3([1, 3, 2, 4, 5],5,3) )
// console.log( q3([1, 2, 3, 4, 5],5,8) )

// ------------------------------------------------------
// num = [0,1,2,3,4]
// index = [0,1,2,2,1]
// [0]
// [0,1]
// [0,1,2]
// [0,1,3,2]
// [0,4,1,3,2]

// num = [1,2,3,4,0]
// index = [0,1,2,3,0]
// [1]
// [1,2]
// [1,2,3]
// [1,2,3,4]
// [0,1,2,3,4]


const litcode = (num,index) =>{
    let target = [];
    for(let i=0;i<num.length;i++){
        start = target.slice(0,index[i]);
        end = target.slice(index[i],num.length);
        
        start.push(num[i]);
        
        target.push(num[i]);

        arr = start.concat(end)
        


        // console.log(start,end)
        console.log(arr)
    }
}

// let num = [0,1,2,3,4]
// let index = [0,1,2,2,1]
// litcode(num,index)

num = [1,2,3,4,0]
index = [0,1,2,3,0]
litcode(num,index)


