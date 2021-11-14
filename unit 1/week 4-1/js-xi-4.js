const a =[1,2,3,4,5];
const av = arr =>{
    let sum = 0;
    if(arr.length>0){
        const sumOfArr = arr.map(key =>sum += key);
        return (sum/arr.length);
    }else
        return sum;
}
console.log(av(a));