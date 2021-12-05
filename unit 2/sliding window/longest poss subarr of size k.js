/*Description -

Given an array of integers of length n and a positive integer K, the task is to find the count of the longest possible subarrays with the sum of its elements not divisible by K.



Input Format -

First line contains n and k separated by space

Second line contains strings of length n.

Constraints -

1 <= n <=10^6

1 <= k <= 100


Output =
Print count of sub arrays.


Sample Input 1 

4 3
2 3 4 6

Sample Output 1

1

Hint -

Sample 1 Explanation

There is only one longest possible subarray of size 3 i.e. {3, 4, 6} having a sum 13, which is not divisible by K = 3.

*/

const q1 = (n,k,arr) => {

    let sum =0;
    let max =0;

    for(i=0;i<n;i++){
        sum += arr[i]
    }

    if(sum%k!==0){
        console.log(1)
    }
    else{
        let l1 = l2 = 0;

        for( j = 0 ;j<n ;j++){
            if(arr[i]%k !== 0){
                l1 = n-j-1;
                break;
            }
        }
        for(j= n-1 ;j >= 0 ;j--){
            if(arr[i]%k !== 0){
                l2 = n-j+1;
                break;
            }
        }

        let length = Math.max(l1,l2);
        let s=0;
        let count = 0;
        for(i = 0 ; i<length ;i++){
            s += arr[i]
        }

        if(s%k !== 0){ count++ };

        let left = 0 ; let right = length;

        while(right<n){
            s += arr[right] - arr[left];
            if(s%k !==0){ count++ }

            left++;
            right++;
        }
        console.log(count)
    }
    
    
}

// let arr = [2,4,3,5,1]

// q1(5,3,arr);