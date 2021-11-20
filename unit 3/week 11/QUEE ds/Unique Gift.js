// Unique Gift 

// Description

// You are visiting a friend at her housewarming party. When you arrive at her house, you see a queue of people standing outside waiting to go inside. Everybody is holding a present in their hands, and since there aren't many gift shops nearby, most of them end up buying the same gift for her. As more and more people keep joining the queue, you are curious to find the first unique gift in the line. You sit and examine the row after a new person arrives; when he does, you examine the queue from front to back to find out which is the first different gift and add it to your list.

// Note-If after a new person arrives no gift is unique in the queue add '#' to the output


// Input
// The first line contains the number of test cases (t)

// The next t lines contains a string of alphabets arranged randomly, each alphabet represents a unique gift.


// 1 <= length of the string <= 20

// 1<=t<=10000


// Output
// You have to output t stringsafter processing the stream of lowercase alphabets from the input strings


// Sample Input 1 

// 2
// abadbc
// abcabc
// Sample Output 1

// aabbdd
// aaabc#
// Hint

// For the first test case-

// The first person brings gift 'a,' and since it's the first gift, it's unique, so add 'a' to the output. The 2nd person gets 'b' which is unique but still not the first unique gift in the queue, adding 'a' to the output. 3rd person brought 'a' again, and now the first unique gift becomes 'b', so adding it to the output. This process continues until the last person joins the queue.

// --------------------------------------------------------------------------------------


const q1 = str =>{
    // ---------------------------------------------
    let que = [];
    let front = 0;
    let rear = 0;
            
    function enque(ele){
        que[rear] = ele;
        rear++
    }
    function deque(){
        if(front == rear){
            return -1
        }
        que[front] = -Infinity;
        front++
    }
    function queLength(){
        return rear - front;
    }

    // --------------------------------------------
    output = ""
   

    var test = 100
    for(let i = 0 ; i < str.length ; i++){
         let length = queLength();
        if( i == 0){
            enque(str[i]);
            // output += str[i] +" "
            // console.log(que,length,que[front]) 
        }
        else{

            if(!que.includes(str[i])){
                enque(str[i])
            }
            if( str[i] == que[front]){
                deque()
            }
            

        }
        if(que[front] == undefined){
            output += "#"
            // console.log(que,length,"#") 
        }
        else{
            output += que[front]
            // console.log(que,length,que[front]) 
        }
        
    }
    console.log(output)
}
// q1("abadbc")
// q1("abcabc")

// ----------------------------------------------

function runProgram(input) {
  a = input.split("\n");
//   console.log(a)
  
  let t = +a[0] ;
  let line = 1;
  for(let i = 0 ; i < t ; i++){
      let str = a[line];
      line++;
      
    //   console.log(str);
      q1(str)
  }
  
  
  
}
runProgram(`2
abadbc
abcabc`
)