const query1 = arr => {
    const row = arr.length;
    const col = arr[0].length;
    let output = ""

    for(i = 0 ; i<row ; i++){
        if(i%2 == 0)
        for(j=0 ; j<col ; j++) output += arr[i][j] + " ";

        else
        for(j= col-1 ; j>=0 ; j--) output += arr[i][j] + " ";
    }
    console.log(output)
}
const query2 = arr => {
    const row = arr.length;
    const col = arr[0].length;
    let output = ""

    for(i = 0 ; i<row ; i++){
        if(i%2 == 0)
        for(j= col-1 ; j>=0 ; j--) output += arr[i][j] + " ";

        else
        for(j=0 ; j<col ; j++) output += arr[i][j] + " ";
    }
    console.log(output)
}

const q1Array = [
    [1,2,3],
    [6,5,4],
    [7,8,9]
]
// 1 2 3 4 5 6 7 8 9 
const q2Array = [
    [3,2,1],
    [4,5,6],
    [9,8,7]
]
// 1 2 3 4 5 6 7 8 9
query1(q1Array)
query2(q2Array)