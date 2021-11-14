// ==================== 1================================
/*
Given a column title as appear in an Excel sheet, return its corresponding column number.

it is guaranteed that string consists of characters from 'A' - 'Z'.

For example:

    A -> 1
    B -> 2
    C -> 3
    ...
    Z -> 26
    AA -> 27
    AB -> 28 
    ...

Input:
1<=T<=10
1<= |Si| <= 10

Output:
output a single integer for all test case , the solution to the problem

Sample Input 1:      Sample Output 1

3
A                   1
AB                  28
ZY                  701
*/


function q5(s)
{

    let result = 0;
    for (let i = 0; i < s.length; i++)
    {
        result *= 26;
        result += s[i].charCodeAt(0) - 'A'.charCodeAt(0) + 1;
    }
    return result;
}
   

// console.log(q5("A"))
// console.log(q5("AB"))
// console.log(q5("ZY"))
// ;



// =================================== 3 ==================================
/*

Input =>
First line contains n and m
Next n line contains m space separated integers which describe each row of the 2d array

Constraints =>
n, m <= 50


Output =>
Output the absolute difference between sum1 and sum2


Sample Input 1 ---------->
3 5
1 2 3 4 5
6 7 8 9 10
11 12 13 14 15

Sample Output 1 --------->
0

Hint =>  

Explanation 0
Here, sum1 = 5 + 4 + 3 + 8 + 13 + 12 + 11 = 56
sum2 = 1 + 6 + 7 + 8 + 9 + 10 + 15 = 56
abs(sum1-sum2) = 0

*/

const q4 = (row,col,arr) =>{
    let top = 0;
    let bottom = row-1;
    let left = 0;
    let right = col -1;
    let sum1 = 0;
    let sum2 = 0;
    let row_half = Math.floor(row/2);
    let col_half = Math.floor(col/2);


        // ----------------  sum 1
        for(let i = top ; i<= row_half ;i++){
            sum1 += arr[i][left]
        }
        left++

        for(let j= left; j<= right; j++){
            sum1 += arr[row_half][j] 
        }
        row_half++;

        for(let i = row_half ; i<= bottom ; i++ ){
            sum1 += arr[i][right] 
        }
        // right--
         // ----------------  sum 1

        // ----------------  sum 2

        for(let j = right; j >= col_half ; j--){
            sum2 += arr[top][j] 
        }
        top++
        for( let i = top ; i <= bottom ;i++){
            sum2 += arr[i][col_half] 
        }
        col_half--;
        left--
        for(let j = col_half; j >= left ; j--){
            sum2 += arr[bottom][j]
        }

        // ----------------  sum 2

        
 
    // console.log(sum1)
    // console.log(sum2)
    console.log(Math.abs(sum1 - sum2))
}

let arrQ4 = [
      [1,2,3,4,5],
      [6,7,8,9,10],
    [11,12,13,14,15],
    [16,17,18,19,20],
    [21,22,23,24,25]
]

// q4(5,5,arrQ4)

// =============================== 1 ====
const q1 = (arr,k) => {
    let n = arr.length
    let maxl = 1;
    for(let i = 0 ; i < n ;i++){
        for(let j = i+1 ; j< n ; j++){
            
            subarr = arr.slice(i,j);
            sum = arr.slice(i,j).reduce( (a,c) => a+c)
            if( sum%k == 0)
            if(maxl < subarr.length) maxl = subarr.length

            
            
            console.log(subarr,maxl, sum)
        }
        
    }

//     console.log(arr.slice(0,n-1).reduce( (a,c) => a+c) )
//     console.log(arr.reduce( (a,c) => a+c))
 }
q1([2,3,4,6,3,2,4,5,8,5,3],3)