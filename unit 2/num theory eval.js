let gcd = (x,y) =>{
    while(y){
        var t = y;
        y = x%y;
        x = t;
    }
    return x;
}

let lcm = (a,b) =>{
    let ans = gcd(a,b);
    return (a*b)/ans
}

// console.log(lcm(3,5))


let question = (n2) =>{
    let sum = 0
    for(i = 1 ; i <= n2 ; i++){
        console.log(i, n2)
        // console.log(lcm(i,n2))
        // sum += lcm(i,n2)
    }
    // console.log(sum)
}
question(5)