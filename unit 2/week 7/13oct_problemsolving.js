var n = 29;
var r =Math.sqrt(n);
console.log(r);
flag = true;
for (let i = 2; i <= r; i++) {
    if(n%i==0){
        flag = false; break
    }
}
   if(flag ==true) console.log("prime")
   else console.log("not")