/*
Pair less than K
-------------------------------------------------
* Description

You are given an array A of N integers, and an integer K.
Find the maximum value of S, such S that S = a[i] + a[j], and S < K. If no such value exists, then print -1.
Refer the sample test case for better understanding.
-------------------------------------------------

* Input

The first line of the input contains T, the number of test cases.
The first line of each test case contains N, the number of elements in the array.
The next line contains N space separated integers, denoting the values in the array.
The next line contains the value K.
------------------------------------------------

* Constraints

1 <= T <= 10
1 <= N <= 10^4
1 <= A[i] <= 10^4
------------------------------------------------

* Output

Print the maximum value of S, according to the conditions given in the problem statement, on a new line.
------------------------------------------------

* Sample Input 1 

2
5
1 2 3 4 5
7
3
30 10 20
15
-----------------------------------------------

* Sample Output 1

6
-1
-----------------------------------------------
* Hint

In the sample test case, in the first test case, the value of K is 7. 
The value of S, when i = 0, and j = 4, is 6, which is less than K, 
and largest possible value satisfying all the constraints. Therefore, the output is 6.
In the second test case, no possible value of S exists which satisfies 
all the required conditions, therefore the output is -1.
*/

const q2 = (arr,n,k) =>{

    // way 1 - {2 pointer}
    arr = arr.sort( (a,b) => a-b);

    left = 0 ;
    right = n-1 ;
    max = -1;
    while(left<right){
        sum = arr[left] + arr[right];
        if(sum>=k) right--;
        else if(sum<k){
            if(sum>max) max = sum;
            left++
        }
    }
    console.log(max)

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
}

q2([1,2,3,4,5],5,7);
q2([30,10,20],3,15)
