




/*
x o x
o x x
o o o

o

*/

// function ticTacToe(arr){
    
//     winner = "";

//     if(winner == ""){
//                     for(i = 0 ; i<3 ; i++){
//                             let output = ""
//                             for(j = 0 ; j<3 ; j++){
//                                 output += arr[i][j];
                                
//                             }
//                          //console.log(output)
//                                 if(output == "ooo")
//                                         winner = "o";
//                                 else if(output == "xxx")
//                                         winner = "x"
//                                 else 
//                                     winner = "";
//                         }
//     }
//     if(winner == ""){
//                             for(i = 0 ; i<3 ; i++){
//                             let output = ""
//                             for(j = 0 ; j<3 ; j++){
//                                 output += arr[j][i];
                                
//                             }
//                         // console.log(output)
//                                  if(output == "ooo")
//                                         winner = "o";
//                                 else if(output == "xxx")
//                                         winner = "x"
//                                 else winner = "";
//                         }
//     }

//     if(winner == ""){
//                         let output = ""
//                         for (let i = 0; i < 3; i++){
//                             for (let j = 0; j < 3; j++){
//                                      if ((i + j) == (3 - 1)) {
//                                             output += arr[i][j];
//                                     }
//                             }
//                         }
//                         //console.log(output);
//                                  if(output == "ooo")
//                                         winner = "o";
//                                 else if(output == "xxx")
//                                         winner = "x"
//                                 else winner = "";                        
//     }
//     if(winner == ""){
//                         let output = ""
//                         for (let i = 0; i < 3; i++){
//                             for (let j = 0; j < 3; j++){
//                                      if (i == j) {
//                                             output += arr[i][j];
//                                     }
//                             }
//                         }
//                         //console.log(output);
//                                  if(output == "ooo")
//                                         winner = "o";
//                                 else if(output == "xxx")
//                                         winner = "x"
//                                 else winner = "";                        
//         }
//     if(winner == "")
//         console.log("Tie")
//     else
//     console.log(winner)
  
// }



// const a = [
//         ['x','o','x'],
//         ['o','o','x'],
//         ['o','o','x']
// ];

//  ticTacToe(a)




//////-----------------------------------------------------------------



// function rotateBy90(m, matrix){
//     for (let i = (m-1); i >=0; i--) {
//         let output = "";
//         for( j = 0 ; j < m; j++){
//                 output += matrix[j][i] +" "
//         }  
//         console.log(output)    
//     }
  
// }



// const arr = [
//     [1, 2, 3, 4],
//     [5, 6, 7, 8],
//     [1, 2, 3, 4],
//     [5, 6, 7, 8]
// ];
// rotateBy90(4,arr);

// const arr = [
//     [1, 2, 3, 4],
//     [5, 6, 7, 8],
//     [1, 2, 3, 4],
//     [5, 6, 7, 8]
// ];

// n=arr.length
// d1 = "";
// d2 = "";
// for (let i = 0; i < n; i++) {
//             for (let j = 0; j < n; j++) {
  
//                 // Condition for secondary diagonal
//                 if ((i + j) == (n - 1)) {
//                     d1 += arr[i][j];
//                 }
//                 if (i == j) {
//                     d2 += arr[i][j];
//                 }
//             }
//         }
// console.log(d1)
// console.log(d2)

//--------------------------

const pyramid = a =>{
    
    for(i = 0 ; i <a;i++){
        let out = "";
        for(k = a;k>i;k--){
            out += " "
        }
        for(j=0 ; j<=i ; j++){
            out += "* "
        }
        console.log(out)
    }
}
pyramid(10);


console.log();console.log()

for(i=1;i<10;i++){
    let out = "";
    for(j=1;j<=i;j++){
        if(j==1 || j==i){
                out += "*"
        }else{
            out += " "
        }
        
    }
    for(j=i;j<9;j++){
        out += "  "
    }

     for(j=1;j<=i;j++){
        if(j==1 || j==i){
                out += "*"
        }else{
            out += " "
        }
        
    }
    out += "  ";

    for(j=1;j<=15;j++){
        if(i==1 ||i==9)
           out += "*";
        else{
            if(j==1)
            out += "*"
        }
    }
    out += "  ";
    out += "  ";

    

    console.log(out)


    
}
console.log();console.log()


for(i=1;i<=10;i++){
            let out = "";
//---------------------------------------------| b |-----------------------------------
            for(j=1;j<=5;j++){
                if(i==5 || i==10){
                    out += "* "
                }else{
                    if(i<5){
                        if(j==1){
                            out +="* "
                        }else{
                            out += "  "
                        }
                        
                    }

                    if(i>=5){
                        if(j==1 || j == 5){
                            out +="* "
                        }else{
                            out += "  "
                        }
                        
                    }
                    
                }
            }
//---------------------------------------------| b |-----------------------------------
            out += "  ";
//---------------------------------------------| s |-----------------------------------
            for(j=1;j<=5;j++){
                    if(i==5 || i==10 || i==1){
                        out += "* "
                    }else{
                            if(i<5){
                                    if(j==1){
                                        out +="* "
                                    }else{
                                        out += "  "
                                    }
                                
                            }
                            if(i>=5){
                                if(j == 5){
                                    out +="* "
                                }else{
                                    out += "  "
                                }
                                
                            }
                    }               
            }
//---------------------------------------------| s |-----------------------------------
            out += "  ";
//---------------------------------------------| d |-----------------------------------
            for(j=1;j<=5;j++){
                if(i==5 || i==10){
                    out += "* "
                }else{
                    if(i<5){
                        if(j==5){
                            out +="* "
                        }else{
                            out += "  "
                        }
                        
                    }

                    if(i>=5){
                        if(j==1 || j == 5){
                            out +="* "
                        }else{
                            out += "  "
                        }
                        
                    }
                    
                }
            }
//---------------------------------------------| d |-----------------------------------
            out += "  ";
//---------------------------------------------| k |-----------------------------------
            out += "*";

            if(i<=5){
                for(j=1;j<=(5-i);j++){
                        out += "  "
                    }
                out += "*"
                    
             }
             else{
                 for(j=1;j<=(i-5);j++){
                        out += "  "
                    }
                out += "*"
             }
            

                   

        
            console.log(out)

}
console.log();
console.log()


//========================================================
const tree = () =>{
  const upperHalf = () =>{
              for(i=1;i<=10;i++){
                let star = "";
                let space = "";

                for(j=1;j<=(12-i);j++){
                  space = space + " ";
                }
                for(j=1;j<=i;j++){
                    star += "* ";
                }
                console.log(space + star);
                }
    }
    const middle = () =>{
              for(i=5;i<=10;i++){
                let star = "";
                let space = "";

                for(j=1;j<=(10-i);j++){
                  space = space + " ";
                }
                for(j=1;j<=(i+2);j++){
                    star += "* ";
                }
                console.log(space + star);
                }
    }
    const end = () =>{
              for(i=5;i<=10;i++){
                let star = "";
                let space = "";

                for(j=1;j<=8;j++){
                  space = space + " ";
                }
                for(j=1;j<=3;j++){
                    star += "* ";
                }
                console.log(space + star);
                }
    }

    upperHalf();
    middle();
    middle();end()
}
//========================================================
tree()