/*
Follow The Knight

------------------------------------------------------------------------------------------------------------------
https://oj.masaischool.com/contest/2420/problem/05
------------------------------------------------------------------------------------------------------------------
Description

You are very good at playing chess since childhood and you knew the rules very much.
You have a  10 X 10 chessboard and you want to explore all the possible squares on the
board that the knight can be at in exactly N moves.It is placed at (i,j) coordinate 
initially. For a 10X10 chessboard (1,1) will be the top left corner and (10,10)
will be the bottom right corner.
You can refer the following diagram, the knight can move to any 
of the squares marked as X in 1 move.
------------------------------------------------------------------------------------------------------------------
Input

Input will consist of three space seperated integers i,j and N
------------------------------------------------------------------------------------------------------------------
Constraints

N < 10
------------------------------------------------------------------------------------------------------------------
Output

Print a single integer denoting the number of blocks on the chessboard that the knight can be at in exactly N moves.
------------------------------------------------------------------------------------------------------------------
Sample Input 1 

3 3 1
------------------------------------------------------------------------------------------------------------------
Sample Output 1

8 
------------------------------------------------------------------------------------------------------------------*/ 
const coordinates = [
  [-2, -1],
  [-2, 1],
  [-1, -2],
  [1, -2],
  [2, -1],
  [2, 1],
  [-1, 2],
  [1, 2],
];

let chess = [];
for (let i = 0; i < 10; i++) {
  chess.push(new Array(10).fill(0));
}
let count = 0;
function runProgram(input) {
  let [row, col, N] = input.split(" ").map(Number);
  row = row - 1;
  col = col - 1;
  followTheKnight(row, col, N);
  console.log(count);
}

function followTheKnight(row, col, n) {
  if (row > 9 || row < 0 || col > 9 || col < 0) {
    return;
  }
  if (n == 0) {
    if (chess[row][col] == 0) {
      count++;
      chess[row][col] = 1;
    }
    return;
  }
  for (let i = 0; i < coordinates.length; i++) {
    let [a, y] = coordinates[i];
    followTheKnight(row + a, col + y, n - 1);
  }
}

runProgram(`1 1 2`);
