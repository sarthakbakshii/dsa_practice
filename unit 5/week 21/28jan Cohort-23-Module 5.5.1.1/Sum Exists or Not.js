Sum Exists or Not Ended
Description

Given an array of non-negative integers, and a value 'sum', 
determine if there is a subset of the given set (array) with
 sum equal to given sum.

If there is a subset whose sum is equal to the required sum then print "yes" else print "no" without quotes.


Input
Input Format :

The first line of input contains an integer N - denoting size of the array.

The second line contains the N space seperated integers.

The third line of input will contain S - the required Sum value.

Constraints :

1<=n<= 18

1<=A[i]<=10^9


Output
Print "yes" or "no" without quotes.


Sample Input 1 

9
1 2 3 4 5 6 7 8 9
5
Sample Output 1

yes

function runProgram(input) {
  a = input.split("\n");
  let len = + a[0];
  let arr = a[1].split(" ").map(Number);
  let sum = +a[2];
  
  function sumExist(arr, len, sum){
      if(sum == 0 ) return true;
      if(sum < 0 || len < 0 ) return false;
      return sumExist(arr, len-1, sum) ||
             sumExist(arr, len-1, sum - arr[len-1])
  }
  
  const ans = sumExist(arr, len, sum)?"yes":"no";
  console.log(ans)
 
  
}