// Make Leaderboard Ended
// Description

// You are given name and marks of N different students in a hackerrank contest. Your task is to write a program that makes leaderboard of the students under following conditions:

// - If two students get same marks they get same rank

// - The student placed next to the same marks students will get the rank skipping the intermediate ranks.

// Refer to the sample test case for better understanding

// Note : You cannot use built-in sort function. Using that can lead to disqualification. Write your own sorting algorithm


// Input
// Input Format :
// First line of input contains N

// Next N line contains name and marks respectively of N different students (where name and marks is separated by a space)



// Constraints :

// N < 100


// Output
// Output N names with their rank. Follow these rules for generating the list:

// 1. The students having more mark gets better rank

// 2. If students have similar mark, their rank will be same(In case of similar marks, the person whose name comes first in alphabetical order comes first in order. However their rank will be same)

// 3. The student placed next to the same marks students will get the rank skipping the intermediate ranks.


// Sample Input 1 

// 6
// rancho 45
// chatur 32
// raju 30
// farhan 28
// virus 32
// joy 45

// Sample Output 1

// 1 joy
// 1 rancho
// 3 chatur
// 3 virus
// 5 raju
// 6 farhan


function runProgram(input) {
  a = input.split("\n");
  let n = +a[0];
  let line = 1;
  

  
  let name = [];
  let score = []
  
  for(i = 0 ; i< n ;i++){
      let [name_ele,score_ele] = a[line].split(" ");
         name.push(name_ele);
         score.push(score_ele)
    
      line++;
    
  }
    //  console.log(name)
    //  console.log(score)
     
    score = score.map(Number)
    // ---------------------------------------------- sort by number
    for(i=0;i<n-1;i++){
        for(j=0;j<n-1-i;j++){
            if(score[j]<score[j+1]){
                temp = score[j];
                score[j] = score[j+1];
                score[j+1] = temp
                
                temp2 = name[j];
                name[j] = name[j+1];
                name[j+1] = temp2
                
            }
            //---------------------------sort by name
            else if(score[j]==score[j+1]){
                if(name[j]>name[j+1]){
                    temp3 = name[j];
                    name[j] = name[j+1];
                    name[j+1] = temp3
                    
                }
            }
            //---------------------------sort by name
        }
    }
    
    //  console.log(name)
    //  console.log(score)
    // ---------------------------------------------- sort by number
    
    
    
    // ------------------------------------------------- way 1
     
    //  let prev = score[0];
    //  let rank =1;
    //  let count =0;
    //  let arr =[]
     
    //  for(i=0;i<n;i++){
    //      if(prev == score[i]){
    //          count++;
    //          arr.push(rank)
    //      }
    //      else{
    //          prev = score[i];
    //          arr.push(rank+count);
    //          rank = rank + count
    //          count=1;
    //      }
    //  }
    // //  console.log(arr)
    
    // for(i=0;i<n;i++){
    //     console.log(arr[i],name[i])
    // }
    
    // ---------------------------------------------------- way 1
    
     // ---------------------------------------------------- way 2
    
//     var count = 0
//   var rank = 1
//     var previous = -1
    
//     for (var k= 0;k<n;k++){
//             if (score[k] == previous){
//                         console.log(rank,name[k])
//             }else{
//                     rank += count
//                     count = 0
//                     console.log(rank,name[k])
//             }
//             count++
//             previous = score[k]
    // }
    // ---------------------------------------------------- way 2
    
    // ---------------------------------------------------- way 3
    
    prev = -1;
    count = 1
    for(i=0;i<n;i++){
        if(score[i] == prev){
            console.log(count +" "+ name[i])
        }
        else{
            console.log(i+1 +" "+ name[i])
            count = i+1;
        }
        prev = score[i]
        
    }
    
    // ---------------------------------------------------- way 3
  
   
  
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
