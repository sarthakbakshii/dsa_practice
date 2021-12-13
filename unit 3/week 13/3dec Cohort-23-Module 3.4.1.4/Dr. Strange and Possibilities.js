/*Dr. Strange and Possibilities
------------------------------------------------------------------------------------------------------------------
https://oj.masaischool.com/contest/2484/problem/04
Password : 29167
------------------------------------------------------------------------------------------------------------------
Description

Dr. Strange has n distinct integers from 1 to n. He uses his mind power and time stone to calculate all the possible subsets using the given n integers. Generate all the possible subsets.
------------------------------------------------------------------------------------------------------------------
Input

The first line of the input contains one integer n (1 ≤ n ≤ 10).
------------------------------------------------------------------------------------------------------------------
Output

Print each possible subset in a new line.
Elements within the set must be in non-decreasing order. All the subsets must be distinct and sorted in ascending order or lexicographically. For an empty subset just print a blank line.
------------------------------------------------------------------------------------------------------------------
Sample Input 1 

3
------------------------------------------------------------------------------------------------------------------
Sample Output 1

   <------ this is a blank space requeried as output
1 
1 2 
1 2 3 
1 3 
2 
2 3 
3 
------------------------------------------------------------------------------------------------------------------*/

/*const subSequence = (str,ans="",current = 0) =>{
    if( ans.length > 0) {
        // console.log(ans);
        console.log(ans.split("").join(" "))
    }
    if( ans == str.length) return;
    
    for( let j = current ; j < str.length ; j++ ){
        ans += str[j];
        subSequence(str,ans,j+1);
        ans = ans.slice(0,-1)
    }
}*/

const subSequence = (arr,stack=[],current = 0) =>{
    if( stack.length > 0) {
        // console.log(stack);
            console.log(stack.join(" "))
            
    }
    if( current == arr.length) return;
    
    for( let j = current ; j < arr.length ; j++ ){
        stack.push( arr[j] );
        subSequence(arr,stack,j+1);
        stack.pop()
    }
}


function runProgram(input) {
    
  let arr = [];
  for(let i = 1 ; i <= Number(input) ; i++ ){
      arr.push(i)
  }
  
    console.log()  //---this is cheating output requires on extra blank,so  did it
    subSequence(arr)

}