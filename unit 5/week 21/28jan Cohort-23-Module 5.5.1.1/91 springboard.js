/*
91 springboard
---------------------------------------------------------
https://oj.masaischool.com/contest/2933/problem/01

Description

The floor of 91 springboard is covered by h × w square tiles, 
where there are h rows of tiles from front (first row) to 
back (last row) and w columns of tiles from left to right. 
Each tile has value of 1 to 100 written on it.

You have to walk on tiles such that sum of numbers is as 
high as possible, subject to the following restrictions:

You start by choosing any tile in the first row, and collects
 the value on that tile. Then, you move to a tile in the 
 next row, collects the value on the tile, and so on until 
 you reach the last row.

When you move from one tile to a tile in the next row, 
you can only move to the tile just below it or diagonally 
to the left or right.

Given the values of h and w, and the value on each tile, 
write a program to compute the maximum possible sum you 
can grab in one single trip from the first row to the last row.
---------------------------------------------------------
Input
Input Format :

The first line consists of a single integer T, 
the number of test cases.

In each of the test cases, the first line has 
two integers. The first integer h is the number 
of rows of tiles on the floor. The second integer 
w is the number of columns of tiles on the floor.

Next, there are h lines of inputs. The i-th line 
of these, specifies the value in each tile of the 
i-th row from the front. Each line has w integers, 
where each integer m (0 <= m <= 100) is the number 
on that tile. The integers are separated by a space character.
---------------------------------------------------------
Constraints:

1 <= T <= 100
1 <= w <= 100
1 <= h <= 100
---------------------------------------------------------
Output
The output should consist of T lines, one for each 
test case. Each line consists of a single integer, 
which is the maximum possible sum you can grab, in 
one single trip from the first row to the last row 
for the corresponding test case.
---------------------------------------------------------
Sample Input 1 

1
6 5
3 1 7 4 2
2 1 3 1 1
1 2 2 1 8
2 2 1 5 3
2 1 4 4 4
5 2 7 5 1
---------------------------------------------------------
Sample Output 1

32
---------------------------------------------------------*/


const springboard = (arr, row, col, dp, curr = 0) =>{
      
    if(curr == row ) {
    //   console.log(dp);
        let max = 0
        for(let j = 0 ; j < col ; j++ ){
          if(max  < dp[curr-1][j] ) max = dp[curr-1][j]
        }
        console.log(max)
        return
    }
    
    for(let i = 0 ; i <= col-1 ; i ++){
        if(curr == 0) dp[curr][i] = arr[curr][i];
        else{
            if(i == 0)          dp[curr][i] = arr[curr][i] + Math.max( dp[curr-1][i],dp[curr-1][i+1])  
            if(i == col-1)      dp[curr][i] = arr[curr][i] + Math.max( dp[curr-1][i-1],dp[curr-1][i])   
            if(i>0 && i<col-1)  dp[curr][i] = arr[curr][i] + Math.max( dp[curr-1][i-1],dp[curr-1][i],dp[curr-1][i+1]) ;   
        } 
    }
     
    return springboard(arr, row, col, dp, curr + 1) 
}

function runProgram(input) {
  a = input.split("\n");
  let t = + a[0];
  let line = 1;
  
  for( let i = 0 ; i < t ; i ++){
      let [row,col] = a[line].split(" ").map(Number);
      line++;
      
      let arr = []
      for(let j = 0 ; j < row ; j ++){
          arr.push( a[line].split(" ").map(Number) );
          line++
      }
      
      let dp = new Array(row)
      for(let i = 0 ; i < row; i++){
          dp[i] = new Array(col).fill(-1)
      }
      
      springboard(arr, row, col, dp)
        
  }
  
}