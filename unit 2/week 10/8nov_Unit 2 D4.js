// arr = [1,3,2,4];

// const q1 = (arr,n) =>{
//     let output = ""
//     // for( i = 0 ; i < n ;i ++){
//     //     backup = -1;
//     //     for(j = i+1; j<n;j++){
//     //         if(arr[i]<arr[j]){
//     //             backup = arr[j];
//     //             break;
//     //         }
//     //     }
//     //     output += backup +" "
//     // }
//     // console.log(output)
    
//     let s = [];
//     s.push(arr[0]);

//     for(let i = 1 ; i < n ; i++){
//         if(s.length == 0){
//             s.push(arr[i]);
//             continue;
//         }
//         while( s.length== 0 == false && s[s.length -1] < arr[i]){
//             output += arr[i] +" ";
//             s.pop();
//         }
//         s.push(arr[i])
//     }

//     while(s.length != 0){
//         output += -1 +" ";
//         s.pop();
//     }
//     console.log(output)
// }

// q1(arr,4)


// var l = 4;

// for(i = 1 ; i <= l ; i ++){
//     output = "";
//     for(j = 1 ; j <= l ; j ++){

//         if(i == 1 || i == l) output += "*" +" "
//         else                    output = "*"
//     }
//     console.log(output)
// }

// ---------------------------------------------


let a = 10/3;
let [sec1,sec2] = a.toString().split(".")
sec1 = sec1+"."
sec2 = sec2.substr(0,5)
a = sec1.concat(sec2)
console.log(a)