let PrevGreaterElement = (n,arr) =>{
    let output = "";
    let s = [];
    
    for( i = 0 ; i < n ; i++ ){
        while( (s.length > 0) && (s[s.length-1] >= arr[i] )  ){
            s.pop();
        }
        if( s.length == 0){ output += -1 + " "; }
        else { output += s[s.length-1] + " "; }
        
        s.push(arr[i]);
    }
    console.log(output)
    
}

PrevGreaterElement(5,[2,4,3,6,2])