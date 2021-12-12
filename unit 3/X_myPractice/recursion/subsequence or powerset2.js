const subarrayFromI = (str,ans="",current = 0) =>{
    if( ans.length > 0) console.log(ans);
    if( current == str.length) return;
    
    for( let j = current ; j < str.length ; j++ ){
        ans += str[j];
        subarrayFromI(str,ans,j+1);
        ans = ans.slice(0,-1)
    }
}