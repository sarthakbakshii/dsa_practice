const happynaumber = (a,counter = 0) => {
    a = a.toString();
    let sum = 0;
    result = false;

    if(counter <10){

            for(i = 0 ; i < a.length ; i++){
                sum += a[i]*a[i];
            }
            // console.log(sum)
            if(sum===1) return result = true;
            else{
                counter++;
                happynaumber(sum,counter)
            }
        }
    return result

}

// console.log(happynaumber(19))

function ruby(a, counter = 0) {
    a = a.toString()
    // console.log(a)

    let sum =0;
    result = false;
    if( counter < 10){
            for (let i = 0; i < a.length; i++) {
            sum += a[i]**2
                
            }
            // console.log(sum)
            if( sum == 1){
                return result = true
            }
            else{
                counter++;
                ruby(sum,counter)
            }
        }

    return result;
}
// ruby(21)
console.log(ruby(19))

// -------------------------------------------------------------------
const spiralTransversal = (row,col,arr) =>{
    let top = 0 ;
    let bottom = row -1;
    let left = 0;
    let right = col - 1;

    let count = 0; const maxCount = row*col;
    const ring = row/2;
    let output = "";
    
    for(i = 0 ; i < ring ; i++){
        for(i = bottom ; i >= top && count < maxCount ; i--){
             output += arr[i][left] +" " ;
              count++;
        }
        left++;

        for(j = left ; j<= right && count < maxCount ; j++){
             output += arr[top][j] +" " ; 
             count++;
        }
        top++;

        for(i = top ; i <= bottom && count < maxCount ; i++){
             output += arr[i][right] +" " ; 
             count++;
        }
        right--;

        for(j = right ; j >= left  && count < maxCount ; j--){
             output += arr[bottom][j] +" " ;
              count++;
        }
        bottom++;
    }
    console.log(output)
}

let spralArr = [
    [3,4,5,6,7],
    [2,13,14,15,8],
    [1,12,11,10,9]
]
// spiralTransversal(3,5,spralArr)

// ---------------------------------------------------------

const sumOfDigit = (row,col,arr) => {
    let sum = 0;
    for(i = 0 ; i < row ; i++){
        
        for(j = 0 ; j < col ; j++){
            // console.log(arr[i][j])
            num = arr[i][j].toString()
            // console.log(num) 
            for(k = 0 ; k <num.length ; k++){
                sum += Number(num[k])
            }
            
        }
        
    }
    console.log(sum)

}
let sumOfDigitArr = [
    [3,4,5,6,7],
    [2,13,14,15,8],
    [1,12,11,10,9]
]
//  sumOfDigit(3,5,sumOfDigitArr)

// -----------------------------------------------------------------
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
const q2Array = [
    [3,2,1],
    [4,5,6],
    [9,8,7]
]
// query1(q1Array)
// query2(q2Array)