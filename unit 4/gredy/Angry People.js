/*
Angry People
------------------------------------------------------------------------
https://oj.masaischool.com/contest/2699/problem/03
Password : 29243
------------------------------------------------------------------------
Description

You have a circular dining table and N angry people.You need to place 
them on the table.Each person has a anger value.

You can place them in any order on the circular table.Once you place 
them you need to calculate the Danger value of your arrangement.

The danger value of the arrangement is the maximum difference of 
anger values of all the adjacent seated persons.You need to keep 
this danger value as low as possible.
------------------------------------------------------------------------
Input Format

The first line contains N.
The second line contains the anger values of N persons.
------------------------------------------------------------------------
Constraints

3<=N<=1000
1<=Hunger Value<=1000
------------------------------------------------------------------------
Output format

Print the minimum possible danger value.
------------------------------------------------------------------------
Sample Input 1 

4
5 10 6 8
------------------------------------------------------------------------
Sample Output 1

4
------------------------------------------------------------------------
Hint

The optimal arrangement is :

5

/             \

6                  8

\           /

10

The adjacent pair values are 1 for(6-5),3 for(8-5),4 for(10-6),2 for(10-8).
Since danger value is the maximum value so it's 4.
------------------------------------------------------------------------*/

function runProgram(input) {
  a = input.split("\n");
  const n = + a[0];
  const arr = a[1].split(" ")
              .map(Number)
              .sort( (a,b) => a - b);
  
//   console.log(n,arr)
  let odd = [];
  let eve = [];
  for(let i = 0 ; i < n ; i++ ){
      if( i %2 == 0) eve.push(arr[i]);
      else odd.push(arr[i]);
  }
  
//   console.log(odd,eve)
  
  for(let i = eve.length - 1 ; i >= 0 ; i --){
      odd.push(eve[i])
  }
  
//   console.log(odd)
  
  let max = 0;
  for(let j = 0 ; j < odd.length  ; j++){
      if( Math.abs(odd[j+1]-odd[j]) > max ) max = Math.abs(odd[j+1]-odd[j])
  }
  console.log(max)
  
  
}