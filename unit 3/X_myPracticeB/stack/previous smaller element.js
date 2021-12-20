// PREVIOUS SMALLER ELEMENT

arr = [ 1,3,3,4,1,1]
// OUTPUT => -1 1 1 3 -1 -1 
n = arr.length

const previousSmallerEle  = (arr,n) => {

    let output = ""
    let stack = [];

    for( let i = 0 ; i < n ; i ++ ){

        while ( (stack.length >0 ) && ( stack[ stack.length -1 ] >= arr[i]) ) {
            stack.pop()
        }
        if( stack.length == 0) {
            output += "-1 ";
        }
        else {
            output += stack[ stack.length - 1] + " "
        }

        stack.push( arr[i] )
    }
    console.log(output)
}

previousSmallerEle(arr,n)


