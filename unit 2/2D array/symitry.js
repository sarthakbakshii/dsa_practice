// symitry
 
const q3 = arr =>{
      let row = arr.length;
      let col = arr[0].length;

      let hor = true
      for(let i = 0 ;i<row ; i++){
          for(let j = 0 ;j<col ; j++){
              if(arr[i][j] !== arr[row-1-i][j] ){
                  hor = false;
                  break;
              }
          }
          if(hor === false) { break }
      }

      let ver = true
      for(let i = 0 ;i<row ; i++){
          for(let j = 0 ;j<col ; j++){
              if(arr[j][i] !== arr[j][col-i-1] ){
                  ver = false;
                  break;
              }
          }
          if(ver === false) { break }
      }

      if(ver && hor){
        console.log("BOTH");
    }
    else if(ver){console.log("VERTICAL");}
    else if(hor){
        console.log("HORIZONTAL");
    }else{
        console.log("NO");
    }
      
    
}
let arr = [     
    [1,0,3,0,1],
    [1,0,3,0,1],
    [1,0,3,0,1],
    [1,0,3,0,1],
    [1,0,3,0,1],
]
q3(arr)