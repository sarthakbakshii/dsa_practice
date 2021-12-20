const sum = (arr,i = 0, s = 0) =>{
    if( i === arr.length) {
        return s;
    }
    s += arr[i]
    return sum (arr, i+1 , s)
}

function reunProgram(inp){
    a = inp.split("\n");
    const t = +a[0];
    let line = 1;

    for( let i = 0 ; i < t ; i ++){
        let n = + a[line];
        line++;
        let arr = a[line].split(" ").map(Number);
        line++

        // console.log(n, arr)
        console.log( sum (arr) );
    }
}


reunProgram(
`3
5
6 3 8 2 -4
5
-10 -7 10 2 -2
5
-4 -5 6 -3 9`)