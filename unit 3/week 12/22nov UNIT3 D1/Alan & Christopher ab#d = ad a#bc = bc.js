/*
Alan & Christopher ab#d = ad a#bc = bc
------------------------------------------------------------------------------------------------------------------
Description

Its the year 1940, and the British along with the Allied forces, are being brutally assaulted on the battle field, by Hitler's Nazi Germany. The Britishers need to crack the secret communication that takes place between the German troops, with the help of their encryption device "Enigma". Alan Turing, the famous Mathematician, is assigned the task, to break the German encryption code, with his computer device "Christopher".
The communication happens in the form of strings, and the strings are organized such that, given a string "S", when fed into a text editor "#" means backspace, on a conventional keyboard. Since, everyday, Britain is getting more behind in the war, Alan asks for your help. Help Alan, break the secret communication between German Troops.
Note that after backspacing an empty text, the text will continue empty.
------------------------------------------------------------------------------------------------------------------
Input

The first line of the input contains T, the number of test cases. Each test case consists of a single line, which contains the encrypted string S.
------------------------------------------------------------------------------------------------------------------
0 <= length of string <= 100
1 <= T <= 200
Sonly contain lowercase letters and'#'characters.
------------------------------------------------------------------------------------------------------------------
Output
The output for each test case, is the decrypted string, on a new line.
------------------------------------------------------------------------------------------------------------------
Sample Input 1 

2
ab#d
a#bc
------------------------------------------------------------------------------------------------------------------
Sample Output 1

ad
bc
------------------------------------------------------------------------------------------------------------------*/

const q3 = str =>{
    let stack = [];
    let output = "";
    for(let i = 0 ; i < str.length ; i++){
        if(str[i] !== "#"){
            stack.push(str[i])
        }
        else if(str[i] == "#"){
            stack.pop()
        }
    }
    // console.log(stack);
    stack.map( a=> {
        output += a;
    })
    console.log(output)
}

function runProgram(input) {
  a = input.split("\n");
  let t = +a[0];
  let line = 1;
  for(i = 0 ; i < t ; i++){
      str = a[line];
      line++;
    //   console.log(str)
    q3(str)
  }
  
  
}