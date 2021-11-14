//------------------------------------| Q1 |-------------------------------------------
/*
a-1
b-2
c-3
d-4
e-5
---------------------------------------------------
*/

// const alphabets = " abcdefghijklmnopqrstuvwxyz";
// const q1 = a =>{
//     for (let i = 1; i <=a ; i++) {
        
//         console.log(`${alphabets[i]}-${i}`)
        
//     }
// }
// q1(23);

//--------------------------------------| Q2 |-------------------------------------------
/*
 You are given a number stored in variable with the name N

You have to map all the lowercase English characters, to a number starting from the value stored inN, and incrementing it by 1 at every step

For example, consider the value stored inN = 30

a-30
b-31
c-32
d-33
e-34
---------------------------------------------------
*/

// const alphabets = "abcdefghijklmnopqrstuvwxyz";
// const q2 = a =>{
//     for( i = a ; i <=(a+25) ; i++){
//         console.log(` ${ alphabets[i-a] } - ${ i }`)
//     }
// }
// q2(22);

//--------------------------------------| Q3 |-------------------------------------------
/*
You are given a number stored in a variable with the nameN

You are also, given a string, whose length is stored in a variable with the nameK, and the string is stored in a variable with the namestr

You have to map all lower case English characters, starting from the value stored inN.

For example, if the value stored inN = 30, then the mapping of the characters will be as follows

a-30
b-31
c-32
d-33
e-34

abc

30 + 31 + 32
*/

// const q3 = (a,b) =>{

//     const alphabets = "abcdefghijklmnopqrstuvwxyz";
//     let data = {};

//     let lastIndex = a+26;
//     for(i=a; i < lastIndex ; i++){

//         letter = alphabets[i-a];
//         data[letter] = i;
//     }

//     console.log(data);
//     console.log();

//     let sum = 0;

//     for (let i = 0; i < b.length; i++) {
//         let key = b[i];
//         sum += data[key];

//         console.log(key +" = "+ data[key])
        
//     }
//     console.log("\nsum = " + sum)
// }
// q3(30,"abc")

//--------------------------------------| Q4 |-------------------------------------------
/*

You are given a number stored in a variable with the name N

You are given another number stored in a variable with the nameK

You have to map all the numbers in the range of[1, N], including the values stored inN, such that the mapping begins fromK

For example, consider the value stored in N = 5, and K = 10, then the required output will be

1-10
2-11
3-12
4-13
5-14

*/

// const q4 = (a,b) =>{

//     for (let i = 1; i <= a; i++) {
//         console.log(i +" - " + b)  
//         b++  
//     }
// }
// q4(6,10)
