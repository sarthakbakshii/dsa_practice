

function diagonalOrder( arr)
    {
        R = arr.length;
        C = arr[0].length;
        /* through this for loop we choose each
        element of first column as starting point
        and print diagonal starting at it. arr[0][0],
        arr[1][0]....arr[R-1][0] are all starting points */
        for (var k = 0; k < R; k++) {
            console.log(arr[k][0] + " ");
 
            // set row index for next
            // point in diagonal
            var i = k - 1;
           
            //  set column index for
            // next point in diagonal
            var j = 1;
 
            /* Prvar Diagonally upward */
            while (isValid(i, j))
            {
                console.log(arr[i][j] + " ");
 
                i--;
                
                // move in upright direction
                j++;
            }
 
            console.log("<br>");
        }
 
        /* through this for loop we choose each element
           of last row as starting point (except the
           [0][c-1] it has already been processed in
           previous for loop) and print diagonal
           starting at it. arr[R-1][0], arr[R-1][1]....
           arr[R-1][c-1] are all starting points */
 
        // Note : we start from k = 1 to C-1;
        for (var k = 1; k < C; k++) {
            document.write(arr[R - 1][k] + " ");
 
            // set row index for next
            // point in diagonal
            var i = R - 2;
           
            // set column index for
            // next point in diagonal
            var j = k + 1;
 
            /* Print Diagonally upward */
            while (isValid(i, j))
            {
                console.log(arr[i][j] + " ");
 
                // move in upright direction
                i--;
                j++;
            }
 
            document.writeln("<br>");
        }
    }
 
    function isValid( i,  j)
    {
        if (i < 0 || i >= R
            || j >= C || j < 0)
            return false;
        return true;
    }
 
    // Driver code
            var arr = [
            [ 1, 2, 3, 4 ],    
            [ 5, 6, 7, 8 ],
            [ 9, 10, 11, 12 ], 
            [ 13, 14, 15, 16 ],
            [ 17, 18, 19, 20 ],
        ];

        diagonalOrder(arr);