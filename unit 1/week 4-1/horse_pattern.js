function pattern(n){
    for(let i = 1; i <= Math.ceil(n/2) ; i++){
        output = " ".repeat(Math.ceil(n/2)-2 )
        for(let j = 1; j <= i ; j++){
            output+=  " "
        }
        for(let j = Math.ceil(n/2); j >= i ; j--){
            output +=  "@"
        }
        for(let j = Math.ceil(n/2); j > i ; j--){
            output +=  "@"
        }
        console.log(output)
    }

    for(let i = 1; i <= n ; i++){
        let output = "";
        if(i == 1) output += "*".repeat(n);
        else{
            for(let j = 1 ; j <= n ; j++){
                if(j == 1 || j == n){
                    output += "*";
                }
                else output += " "
            }
        }
        console.log(output)
    }

}

pattern(3)