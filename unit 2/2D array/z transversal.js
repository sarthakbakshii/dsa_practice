// Z => 1 2 3 5 7 8 9 

function zTraversal(n,arr){
    
    output = "";

    for(i=0;i<1;i++){
        for(j=0;j<n;j++){
            output+= arr[i][j] +" ";
        }
    }

    for(i=1;i<(n-1);i++){
        
            output+= arr[i][(n-1)-i] +" ";
        
    }
    
    for(i=(n-1);i<n;i++){
        for(j=0;j<n;j++){
            output+= arr[i][j] +" ";
        }
    }
    console.log(output)
  
}

const arr =[
    [1,2,3],
    [4,5,6],
    [7,8,9],
]
zTraversal(4,arr)