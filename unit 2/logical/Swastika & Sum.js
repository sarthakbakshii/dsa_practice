// Swastika & Sum Ended
// Description

// You are given a 2d array with n  rows and mcolumns where n and m are always odd. There are two different parts present in the 2d array and the sum of all the elements of the first part is referred as sum1 and that of the other is referred as sum2. You have to find the absolute difference between sum1 and sum2.

// Look at the given figure to have a better idea of the two different parts

// Image

// As seen, sum1 is formed by all the elements starting from top-right -> to middle column then bisects the figure vertically and then goes to the bottom left of the 2d array

// Similarly. sum2 is formed by all the elements in the top left -> to middle row then bisects the figure horizontally and then goes to the bottom right of 2d array

// Look at the sample test case for better understanding


// Input
// First line contains n and m

// Next n line contains m space separated integers which describe each row of the 2d array

// Constraints

// n, m <= 50


// Output
// Output the absolute difference between sum1 and sum2


// Sample Input 1 

// 3 5
// 1 2 3 4 5
// 6 7 8 9 10
// 11 12 13 14 15
// Sample Output 1

// 0
// Hint

// Explanation 0

// Here, sum1 = 5 + 4 + 3 + 8 + 13 + 12 + 11 = 56

// sum2 = 1 + 6 + 7 + 8 + 9 + 10 + 15 = 56

// abs(sum1-sum2) = 0

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
    console.log( Math.abs(sum1 - sum2))
}
// -----------------------------------------------
function runProgram(input) {
  inp = input.split("\n");
  let [r,c] = inp[0].split(" ").map(Number);
  let arr = [];
  let l = 1;
  for(i =0 ; i< r; i++){
      arr.push(inp[l].split(" ").map(Number));
      l++
  }
//   console.log(r,c,arr)
q4(r,c,arr)
  
  
  
}
if (process.env.USER === "") {
  runProgram(``);
} else {
  process.stdin.resume();
  process.stdin.setEncoding("ascii");
  let read = "";
  process.stdin.on("data", function (input) {
    read += input;
  });
  process.stdin.on("end", function () {
    read = read.replace(/\n$/, "");
    read = read.replace(/\n$/, "");
    runProgram(read);
  });
  process.on("SIGINT", function () {
    read = read.replace(/\n$/, "");
    runProgram(read);
    process.exit(0);
  });
}
