
const way1 = a =>{
const b = parseInt(a, 2);
console.log(b);
}

const way2 = a =>{
    const b = a.toString();
    const p = b.length;
    let value = 0
    for(i=0;i<b.length;i++){
        power = p-i-1;
        value += b[i]* 2**power;
    }
    console.log(value);
}

way1(10001);
way2(10001);