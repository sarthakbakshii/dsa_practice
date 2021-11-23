let nextGreaterElement = (n,arr) =>{
    let output = "";
    let s = [];
    
    for( i = n-1 ; i >=0 ; i-- ){
        while( (s.length > 0) && (s[s.length-1] <= arr[i] )  ){
            s.pop();
        }
        if( s.length == 0){ output += -1 + " "; }
        else { output += s[s.length-1] + " "; }
        
        s.push(arr[i]);
    }
    console.log(output.split(" ").reverse().join(" ").trim())
    
}

nextGreaterElement(7,[1,4,2,7,3,8,4])

// 4 7 7 8 8 -1 -1