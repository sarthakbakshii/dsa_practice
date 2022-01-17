/*
Dance Night! 
------------------------------------------------------------------------
https://oj.masaischool.com/contest/2699/problem/04
Password : 29243
------------------------------------------------------------------------
Description

Masai School will be hosting its Prom Night on 29th Feb.There would be 
M boys and N girls at the prom tonight. Each boy wants a girl who is 
strictly shorter than him. A girl can dance with only one boy 
and vice-versa.

Given the heights of all the boys and girls comment whether it 
is possible for all boys to get a girl.
------------------------------------------------------------------------
Input

The first line contains T denoting the number of test cases.
Each test case contains three lines.
The first line contains M and N.
The second line contains M integers each denoting the height of boy.
The third contains N integers each denoting the height of girl.
------------------------------------------------------------------------
Constraints

1<=T<=10
1<=N, M<=10000
1<=Height<=200
------------------------------------------------------------------------
Output

Print YES if it is possible for each boy to get a girl else print NO.
------------------------------------------------------------------------
Sample Input 1 

1
4 5
2 5 6 8
3 8 5 1 7
------------------------------------------------------------------------
Sample Output 1

YES
------------------------------------------------------------------------*/

const search = (n,m,b,g) => {
   
    let flag = "YES"
    if( m < n ) return "NO";
    
    for( let i = 0 ; i < n ; i ++){
        // console.log( "boy : ",b[i]," , girl : ", g[i])
        
        if( b[i] <= g[i] ){
             flag = "NO"
          break;
        }
    }
    
    return flag
}

function runProgram(input) {
  a = input.split("\n");
  
  let t = + a[0];
  let line = 1;
  for(let i = 0 ; i < t ; i ++ ){
      let [n,m] = a[line].split(" ").map(Number);
      line++;
      let boys = a[line].split(" ").map(Number).sort( (a,b) => a-b );
      line++;
      let girls = a[line].split(" ").map(Number).sort( (a,b) => a-b );
      line++;
      
    //   console.log(n,m,boys,girls)
      console.log( search(n,m,boys,girls) )
  }
  
}