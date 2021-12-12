


const board = [
    [0,0,0,0],
    [0,0,0,0],
    [0,0,0,0],
    [0,0,0,0]
];
const nQueen = (board, row, n) => {
    if( row >= board.length){
        console.log(board)
        return true;
    }
    for(let i = 0 ; i < n; i++){
            if( isSafe(board, row, i) ){
                board[row][i] = 1;
                 if(  nQueen(board, row+1, n)  ){
                        return true;
                    }
                board[row][i] = 0;
            }
    }
    return false;
};

const isSafe = (board , row , col) => {
    const n = board.length;
    //-------vetical check
    for(let i = 0 ; i < row; i++){
        if(board[i][col] == 1) {
            return false;
        }
    }

    // -------- horizontal check
    for(let i = row-1, j = col- 1 ; i >= 0 && j >= 0 ; i-- , j--){
        if( board[i][j] == 1){
            return false;
        }
    }
    for(let i = row-1, j = col+ 1 ; i >= 0 && j <= n ; i-- , j++){
        if( board[i][j] == 1){
            return false;
        }
    }

};

// ====================
nQueen(board, 0, 4)