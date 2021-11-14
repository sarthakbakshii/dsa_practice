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

// Bag of Letters Ended
// Description

// Alice is playing a game with his little brother Adam. Alice gives Adam, a stringA, and along with it a bag which contains characters made up of clay are kept.

// Adam has to make the stringA, given to him by Alice, with the help of these characters in the bag. Find out if he can make the string or not.

// Note: The stringAand the bag, both contain only small case characters


// Input
// The first line of the input containsN, the number of characters in the bag.

// The next line containsNcharacters, indicating the characters present in the bag.

// The next line containsMcharacters indicating the length of the stringA.

// The next line contains the string itself.

// Constraints

// 1 <=N, M<= 10^4


// Output
// For each test case, printYes, if Adam can make the string using the characters in the bag, else printNo


// Sample Input 1 

// 5
// aabbc
// 3
// abc
// Sample Output 1

// Yes
// Sample Input 2 

// 5
// aabbc
// 4
// abcd
// Sample Output 2

// No
// Hint

// In the first sample test , the bag contains the characters present in the stringaabbc,and the string Adam has to form isabc. It can be clearly seen that using the characters of the bag, the string can be formed. Therefore, the output isYes

// In the second test case, the string to be formed isabcd. But, the bag does not contain the characterd. Therefore, the string cannot be formed. Therefore, the output isNo

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




// =================================================== 5

// A football tournament Ended
// Description

// Masai School had hosted a Football tournament. You got hold of a profound description of the final match's process. On the whole, there are n lines in that description each of which described one goal. Every goal was marked with the name of the team that had scored it. Write a program to find the name of the team that won the finals. It is guaranteed that the match did not end in a tie.


// Input
// Input Format

// The first line contains an integer n — the number of lines in the description.

// Then follow n lines — for each goal the names of the teams that scored it.

// Constraints

// 1 ≤ n ≤ 100

// The names are non-empty lines consisting of uppercase letters whose lengths do not exceed 10 symbols. It is guaranteed that the match did not end in a tie and the description contains no more than two different teams.




// Output
// Print the name of the winning team. We remind you that in football the team that scores more goals is considered the winner.


// Sample Input 1 

// 5
// A
// ABA
// ABA
// A
// A
// Sample Output 1

// A

function footBallTournament(n, arr) {
    // console.log(arr)
    // arr = arr.join("");
    
    let obj = {}
    
    for(i=0;i<arr.length;i++){
        if(obj[arr[i]] == undefined)  obj[arr[i]]=1;
        else obj[arr[i]]++
    }
    //  console.log(obj)

    let max = 0
      for(key in obj){
          if(max < obj[key]) max= obj[key];
      }
    //   console.log(max)
    
    let output =""
    for(key in obj){
          if(max == obj[key]) output += key;
      }
     console.log(output)
    
    
}