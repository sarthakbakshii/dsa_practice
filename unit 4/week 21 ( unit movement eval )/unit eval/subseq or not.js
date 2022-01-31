// Sample Input 1 

// 2
// abc
// adbce
// ax
// xaa
// Sample Output 1

// YES
// NO

const testRun = (s1,s2) =>{
    
    let greater = s1.length>s2.length ? s1:s2;
    let smaller = s1.length<=s2.length ? s1:s2;
    
    let j = 0;
    for(let i = 0; i < greater.length && j< smaller.length;i++ ){
        if(  greater.charAt(i) == smaller.charAt(j) ) j++
    }
    
    if( j == smaller.length) return "YES"
    return "NO"
    
}
