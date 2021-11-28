/*  sum of element in array of integers
------------------------------------------------------------------------------------------------------------------
Sample Input 1 

3
5
6 3 8 2 -4
5
-10 -7 10 2 -2
5
-4 -5 6 -3 9
------------------------------------------------------------------------------------------------------------------
Sample Output 1

15
-7
3
------------------------------------------------------------------------------------------------------------------*/

// ------------ test run 
let arrTest1 = [6,3,8,2,-4];
let arrTest2 = [-10,-7,10,2,-2];
let arrTest3 = [-4,-5,6,-3,9];

function sum (arr,i = 0){
    if( arr[i] == undefined) return false
    // console.log(arr[i])
    return arr[i] + sum (arr,i+1)

}
console.log(sum(arrTest1))
console.log(sum(arrTest2))
console.log(sum(arrTest3))