// 2^3 = 2 * 2^2 = 2 * 2 * 2^1;

// ie, a^n = a * a^n-1;  n == 1, return n;

const power = (a,n,t = 0) => {
    if( n == t) return 1;
    return a*power(a,n,t+1)
}
console.log(power(2,3))