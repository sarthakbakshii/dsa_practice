/*
Nick and Hacks 
------------------------------------------------------------------------------------------------------------------
Description

Tom and Nick are good friends.Once Tom asked Nick exactly N 
rupees, but Nick has only 1 rupee in his bank account.

Nick wants to help his friend so he wrote two hacks First 
hack can multiply the amount of money he owns by 10,while 
the second can multiply it by 20. These hacks can be used any number of times.Can Nick help Tom with his hacks?
------------------------------------------------------------------------------------------------------------------
Input

The first line of the input contains a single integer T denoting the number of test cases.
The description of T test cases follows.The first and only line of each test case contains a single integer N.
------------------------------------------------------------------------------------------------------------------
Constraints :

1 <= T <= 100
1 <= N <= 10^12
------------------------------------------------------------------------------------------------------------------
Output

For each test case, print a single line containing the string "Yes" if you can make exactly N rupees or "No" otherwise.
------------------------------------------------------------------------------------------------------------------
Sample Input 1 

5
1
2
10
25
200
------------------------------------------------------------------------------------------------------------------
Sample Output 1

Yes
No
Yes
No
Yes
------------------------------------------------------------------------------------------------------------------*/

function runProgram(input) {
  a = input.split("\n");
  const t = + a[0];
  let line = 1;

  for(i = 0 ; i < t ; i++ ){
      let n = a[line];
      line++
      
      let ans = check(n);
      if(ans) console.log("Yes");
      else    console.log("No")
  }
  
  function check(n,start = 1){
        if(start > n)  return false;
        if(start == n) return true;
        
        return check(n,start*10) || check(n,start*20)
  }
  
  
}