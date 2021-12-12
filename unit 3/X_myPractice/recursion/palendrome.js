const palendrome = (str, left = 0 , right = str.length-1) => {
    
    console.log(str, left , right )
    console.log(str[left] , str[right] )

    if( left >= right) return true;

    if( str[left] != str[right] ) return false;

    
    return palendrome(str, left +1, right-1 )
    
    
}
console.log( palendrome("racecar") )
console.log()
console.log( palendrome("raccar") )
console.log()
console.log( palendrome("racesdcar") )
