/*
Hostel & Warden 
----------------------------------------------------------------------------------
https://oj.masaischool.com/contest/2759/problem/03
Password : 29409
----------------------------------------------------------------------------------
Description

It's party time in a hostel, and you are partying with your friends in the hostel's 
lobby. You can visualise the lobby as a 1-dimensional line (x-axis). All of you are 
scattered along that X-axis. Suddenly, you come to know that the warden is coming 
to the hostel. So, all of you want to hide inside a room. So, you will be given 
x-coordinates of hostel rooms as well as your current location 
(as x-axis coordinate). Anyone can stay at his position, move one step right 
from x to x + 1, or move one step left from x to x -1. Any of these moves 
consume1 minute. You have to find out the minimum time in which everyone 
in the lobby can go to any room and hide inside.
----------------------------------------------------------------------------------
Input
Input Format

First line of input contains N whichis the total number of students 
present in the lobby

Second line contains N space-separatedintegers representing current 
x-coordinates of students scattered in lobby

The third line also contains N spaceseparated integers representing 
x-coordinates of the rooms present in the lobby
----------------------------------------------------------------------------------
Constraints

N <= 1000000
-1000 <= x[i] <= 1000
----------------------------------------------------------------------------------
Output
Print the minimum time as per the given condition in question
----------------------------------------------------------------------------------
Sample Input 1 

3
4 -4 2
4 0 5
----------------------------------------------------------------------------------
Sample Output 1

4
----------------------------------------------------------------------------------
Hint

Sample 1 Explanation

Assign student at position x = 4 to room at position x = 4 : Time taken is 0 minutes

Assign student at position x=-4 to room at position x = 0 : Time taken is 4 minutes

Assign student at position x=2 to room at position x = 5: Time taken is 3 minutes

After 4 minutes all of the students are in the rooms. Since, there is no combination possible where the last student's time is less than 4,

So, answer = 4.
----------------------------------------------------------------------------------*/

function runProgram(input) {
  a = input.split("\n");
  let m = + a[0];
  let initial = a[1].trim().split(" ").map(Number).sort( (a,b) => a- b);
  let final = a[2].trim().split(" ").map(Number).sort( (a,b) => a- b);
  
  let n = initial.length
  
  
let max = 0
 for(let i = 0 ; i < n ; i++){
     let diff = Math.abs(initial[i] - final[i])
      max = Math.max(diff, max);
 }
  
  console.log( max )
  
  
}