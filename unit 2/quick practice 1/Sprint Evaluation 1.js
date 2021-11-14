// =================================    1

/*
Sample Input 1             ||             Sample Output 1
4                          ||              a-2
aman                       ||              m-1
                           ||              n-1


Sample Input 2             ||             Sample Output 2
4                          ||              a-2
maan                       ||              m-1
                           ||              n-1
*/

const q1 = str => {
    str = str.split("").sort();

    let obj = {};
    for (let i = 0; i < str.length; i++) {
        if(obj[str[i]] == undefined) obj[str[i]] =1;
        else obj[str[i]]++
    }
    // console.log(obj)
    for (const key in obj) {
        console.log(`${key}-${obj[key]}`)
    }
}

// q1("aman");
// console.log("-----------------")
// q1("maan")

// =================================    1

// =================================    2
/*
spiral transversal =>

1 2 3 4
5 6 7 8
9 10 11 12

1 5 9 10 11 12 8 4 3 2 6 7 

*/

const q2 = arr =>{
    
    const row = arr.length;
    const col = arr[0].length;

    let top = 0;
    let bottom = row-1;
    let left = 0;
    let right = col-1;

    let ring = row/2;
    let count =0;
    let maxCount = row*col;
    let result = "";

    for (let i = 0; i < ring; i++) {
        for (let i = top; i <= bottom && count<maxCount ; i++) {
            result += arr[i][left]+ " ";
            count++
        } left++;    

        for (let j = left; j <=right; j++) {
             result += arr[bottom][j]+ " ";
             count++
        } bottom--;

        for (let i = bottom; i >= top && count<maxCount ; i--) {
            result += arr[i][right]+ " ";
            count++
        } right--;

        for (let j = right; j >= left; j--) {
             result += arr[top][j]+ " ";
             count++
        } top++;
    }
    console.log(result)
}


// q2(
// [
//     [1,2,3,4],
//     [5,6,7,8],
//     [9,10,11,12]
// ]
// );

// =================================    2