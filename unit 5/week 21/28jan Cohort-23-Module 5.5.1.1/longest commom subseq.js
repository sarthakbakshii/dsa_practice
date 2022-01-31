Sample Input 1 

AEDFHR
ABCDGH

Sample Output 1

3

function similarText(str1,str2,l1,l2){
    
    let dp = new Array(l1+1);
    for(let k = 0 ; k < dp.length ; k++){
        dp[k] = new Array(l2+1).fill(0)
    }
    
    for(let i = 1 ; i < l1 +1 ; i ++){
        for(let j = 1 ; j < l2 +1 ; j++){
            
            if(l1 == 0 || l2 == 0) dp[i][j] = 0;
            else if( str1[i - 1] == str2[j - 1]) dp[i][j] = dp[i-1][j-1] + 1;
            else dp[i][j] = Math.max(dp[i][j-1], dp[i-1][j] )
        }
    }
    return dp[l1][l2];
    
}



function runProgram(input) {
  a = input.split("\n");
  let str1 = a[0].trim();
  let str2 = a[1].trim();
  let l1 = str1.length;
  let l2 = str2.length;

    console.log(similarText(str1,str2,l1,l2))
    
  
}