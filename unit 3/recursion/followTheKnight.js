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
 testcase = "3 3 1";
 let [row,col,N] = testcase.split(" ").map(Number);
  
  let board = 
    [
      [0,0,0,0,0,0,0,0,0,0],
      [0,0,0,0,0,0,0,0,0,0],
      [0,0,0,0,0,0,0,0,0,0],
      [0,0,0,0,0,0,0,0,0,0],
      [0,0,0,0,0,0,0,0,0,0],
      [0,0,0,0,0,0,0,0,0,0],
      [0,0,0,0,0,0,0,0,0,0],
      [0,0,0,0,0,0,0,0,0,0],
      [0,0,0,0,0,0,0,0,0,0],
      [0,0,0,0,0,0,0,0,0,0]
    ];
  
  function chess(board,row,col,N){
      
    //----- checking if position is valid or not
    if(row < 0 || col < 0 || row > 9 || col > 9)  return;
    
    //----- check if no of moves remaining is zero
    if(N==0){
        board[row][col] = 1;
        return;
    }
        chess(board,row-2,col+1,N-1);
        chess(board,row-2,col-1,N-1);
        chess(board,row+2,col+1,N-1);
        chess(board,row+2,col-1,N-1);
        chess(board,row-1,col+2,N-1);
        chess(board,row-1,col-2,N-1);
        chess(board,row+1,col+2,N-1);
        chess(board,row+1,col-2,N-1);
  }
  chess(board,row,col,N);
//   console.log(board)

  let count = 0;

  for(let i = 0 ; i < 10 ; i++){
      for(let j = 0 ; j < 10 ; j++){
          if(board[i][j] == 1) count++
      }
  }
  console.log(count)