//===================================================== q5

const q5 = str =>{
    str = str.split("")
    // console.log(str);

    let stack = [];

    for( i = 0 ; i < str.length ; i++){
        if( str[i] == "(" || str[i] == "{" | str[i] == "[" ){
            stack.push(str[i])
        }
        else if( str[i] == ")" || str[i] == "}" | str[i] == "]" ){
            // ----------------------------------------------------------

            if( stack[stack.length -1]=="(" && str[i] == ")"  ){
                stack.pop();
            }
            else if( stack[stack.length -1]=="{" && str[i] == "}"  ){
                stack.pop();
            }
            else if( stack[stack.length -1]=="[" && str[i] == "]"  ){
                stack.pop();
            }
            else{
                return "Not Balanced";

            }

            // ---------------------------------------------------------
            
        }
    }
    if(stack.length > 0){
       return "Not Balanced"; 
    }
    return "Balanced"
    console.log(stack)

  
}
q5("{([])()}")
console.log(q5("([]"))
