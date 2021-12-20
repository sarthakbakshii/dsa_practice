
// e^x = 1 + x + ( x^2 / 2!) + ( x^3 / 3!) + (x^4 / 4!) ...

// x^n =  1 + x + ( x^2 / 2!) + ( x^3 / 3!) + (x^4 / 4!) ... (x^n / n!)

const power = (x,n) => {
    if(n == 0) return 1;
    return x * power(x, n-1)
}

const fact = n => {
    if(n == 1) return 1;
    return n * fact(n-1);
}

const ectopowerX = (x,n) => {
    if( n == 0) return 1;
    p = power(x,n);
    f = fact(n);
    return  p/f + ectopowerX(x, n-1);

    // return ans
}
let ans = ectopowerX(4,2);

console.log( ans.toFixed(4))