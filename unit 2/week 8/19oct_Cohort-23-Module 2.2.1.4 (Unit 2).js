// ------------ 1
/*
19oct_Cohort-23-Module 2.2.1.4 (Unit 2).js

Sample Input 1 

10 3
-1 -1 -2 1 -2 4 1 9 3 9

Sample Output 1

21
*/

const q1 = (n,k,arr) =>{

 let grand = 0;
for (let i = 0; i < n; i++) {
        for (let j = i+1; j <= n; j++) {
                subarray = arr.slice(i,j)
                // console.log(subarray)
                let sum = 0; 
                 if(subarray.length == k){
                     

                        subarray.map( a =>{
                        sum += a;
                         });

                    // console.log(sum)
                 }
                 if(grand < sum) grand = sum

                
               
        }
    }
console.log(grand)

}

let arr = [-1,-1,-2,1,-2,4,1,9,3,9]
q1(10,3,arr);


// ================================= 2 =======================================
/*
Given a sorted array of integers, return indices of two numbers such that they add up to a target value.

Print -1 -1 if not found.
--------------------------------------
Sample Input 1 

3
4 9
2 7 11 15
5 10
1 2 3 5 5
2 100
48 49
-----------------------------
Sample Output 1

0 1
3 4
-1 -1

*/
const q2 = (n,k,arr) => {
    result = "-1 -1"
    for (let i = 0; i < n; i++) {
        for (let j = i+1; j < n; j++) {
                // subarray = arr.slice(i,j)
                // let sum = 0;
                // subarray.map( a =>{
                //     sum += a;
                // });
                // console.log(sum)

                // if(sum == k){
                //     console.log(i,j)
                // }

                if(arr[i]+arr[j]==k){
                    // console.log(arr[i],arr[j])
                    // console.log(i,j)
                    result = i+" "+j
                    return result
                }
               
        }     
    }
    return result;
}
arr = [2,7,11,15];
arr2 = [1,2,3,5,5];
arr3 = [48,49];

console.log( q2(4,9,arr) )
console.log( q2(5,10,arr2) )
// console.log( q2(2,100,arr3) )

// =================================================== 5

const q5 = (n,bag,k,str) => {
    let outcome = true;
    for (let i = 0; i < k; i++) {
        if(!bag.includes(str[i]))   
                 outcome = false;
    }
    if(outcome == true) console.log("Yes")
    else console.log("No")
}
// q5(5,[ 'a', 'a', 'b', 'b', 'c' ] ,3, [ 'a', 'b', 'c' ])
// console.log( q5(5,[ 'a', 'a', 'b', 'b', 'c' ] ,3, [ 'a', 'b', 'c' ]) )