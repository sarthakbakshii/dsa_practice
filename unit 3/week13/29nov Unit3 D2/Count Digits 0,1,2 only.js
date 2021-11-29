/*
Count Digits 

https://oj.masaischool.com/contest/2442/problem/04
Password : 97deb067
------------------------------------------------------------------------------------------------------------------
Description

You are given an array, stored in a variable with the sizearr
The size of the array is stored in a variable with the namen
You have to find the count of 0's ,1's and 2's
For example, consider the array asarr = [0 1 0 2 1 2 0 1 2 0], and the value stored in n = 10
Then, the required output will be4 3 3, as no. of 0's are 4, no. of 1's are 3, and no. of 2's are 3.

Note : You don't have to take the input
Just complete the given function, and print the output
------------------------------------------------------------------------------------------------------------------
Input

The first line of the input contains the value stored inN, the size of the array
The next line containsNspace separated numbers denoting the elements of the array
------------------------------------------------------------------------------------------------------------------
Output

Print the count of 0's, 1's and 2's separated with space as shown in the problem statement.
------------------------------------------------------------------------------------------------------------------
Sample Input 1 

10
0 1 0 1 1 1 0 2 2 0 
------------------------------------------------------------------------------------------------------------------
Sample Output 1

4 4 2
------------------------------------------------------------------------------------------------------------------
Hint

In the given array, 0 1 0 1 1 1 0 2 2 0

The no. of 0's are: 4
The no. of 1's are: 4
The no. of 2's are: 2
------------------------------------------------------------------------------------------------------------------*/

function countZerosOnesTwos(N,arr){
    let data = {};
    for(let i = 0 ; i < N ; i++ ){
        if(data[arr[i]] == undefined ) data[arr[i]] = 1;
        else data[arr[i]]++
    }
    console.log(data['0'] +" "+data['1'] +" "+data['2'])
}
