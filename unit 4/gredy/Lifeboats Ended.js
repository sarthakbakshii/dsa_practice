/*Lifeboats 
===================================================
https://oj.masaischool.com/contest/2792/problem/02
Password : 4756a03a
===================================================
Description

Given n passengers who are going to board the ship 
for a journey. You are the captain of the ship and 
are responsible for the safety of the passengers.

You have an array W of size n which has weights of 
all the passengers. For ensuring the safety of the 
passenger, you are required to calculate the 
minimum number of lifeboats needed for the journey.

Each lifeboat can carry at most 2 people at the same 
time, provided the sum of the weights of those people 
is within the limit k. (Max holding capacity of a lifeboat).

It is ensured that each person can be carried by a lifeboat.
===================================================
Input
The first line of the input contains one integer 
t (1 ≤ t ≤ 10) — the number of test cases. 
Then t test cases follow.

The first line of each test case contains 2 
integers n and k (1 ≤ n, k ≤ 100000) — The number 
of people and the weight limit of a boat respectively.

The second line of each test case contains n 
integers (1 ≤ Wi ≤ k). The weight of each individual person.
===================================================
Output
For each test case, print the answer: 
The number of lifeboats required.
===================================================
Sample Input 1 

2
4 5
3 5 3 4
4 3
1 2 2 3
===================================================
Sample Output 1

4
3
===================================================*/
const solution = (n,k,arr) =>{
    
    let count = 0
    for(let i = 0 ; i < n ; i ++){
        console.log("test: ", arr[i], " index :",i);
        if(arr[i]+arr[i+1] <= k){
            console.log( arr[i],arr[i+1],"possible");
            count++
            arr.slice(i,2);
        }
        else {
            console.log( arr[i],"possible");
            count++
        }
    }
    console.log(count)
    
}

function life(n,k,arr){
      let i=0;
      let j=n-1;
      let count=0;
      while(i<=j){
          if(arr[i]+arr[j]<=k) i++
          j--;
          count++
      }
      return count
  }


function runProgram(input) {
    input=input.split('\n');
    let t=+input[0];
    let line=1;
    for(let i=0;i<t;i++){
        let[n,k]=input[line].split(" ").map(Number);
        line++;
        let arr=input[line].split(" ").map(Number).sort((a,b)=>a-b);
        line++;
        console.log(life(n,k,arr))
    }
  }
  