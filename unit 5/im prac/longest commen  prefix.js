// 14. Longest Common Prefix
// Write a function to find the longest common prefix string amongst an array of strings.

// If there is no common prefix, return an empty string "".

 

// Example 1:

// Input: strs = ["flower","flow","flight"]
// Output: "fl"
// Example 2:

// Input: strs = ["dog","racecar","car"]
// Output: ""
// Explanation: There is no common prefix among the input strings.
 

// Constraints:

// 1 <= strs.length <= 200
// 0 <= strs[i].length <= 200
// strs[i] consists of only lower-case English letters.

var longestCommonPrefix = function(strs) {
     let first = strs[0];
     let ans = ""
     let l = 1
    for(let j = 0 ; j < first.length ; j++ ){
        
        let temp = first.substr(0,l);
        for(let i = 0 ; i < strs.length ; i++){
            // console.log( "string : ", strs[i] , ", checking for : ", temp);
            if(  strs[i].indexOf(temp) == -1 ){
                return ans
            }

        }
        ans = temp
        
       
        
        
        l++
    }
   return  ans 

};

let strs = ["flower","flow","flight"];
strs = ["dog","racecar","car"]

console.log( longestCommonPrefix(strs) );