/*
Masai Coding Competition.js

Description

There is a coding Tournament where 4 clubs are going to compete. Since the team selection is very critical in this competition,Rohit asked Harshit to help him in the team selection process.
There is a long queue of students from four clubs. Each student of a club have a different roll number. Whenever a new student will come, he will search for his clubmate from the end of the queue. As soon as he will find any of the club-mate in the queue, he will stand behind him, otherwise he will stand at the end of the queue. At any moment Harshit will ask the student, who is standing in front of the queue, to come and give his name and Harshit will remove him from the queue. There are Q operations of one of the following types:

E a b: A new student of club a whose roll number is b will stand in queue according to the method mentioned above.

D: Harshit will ask the student, who is standing in front of the queue, to come and put his name and Harshit will remove him from the queue

------------------------------------------------------------------------------------------------------------------
Input

First line contains an integer Q denoting the number of operations.
Next Q lines will contains one of the 2 types of operations.

------------------------------------------------------------------------------------------------------------------
Constraints :

Number of dequeue operations will never be greater than enqueue operations at any point of time.

1<=Q<=100000
1<=a<=4
1<=b<=50000
------------------------------------------------------------------------------------------------------------------
Output
For each 2nd (D) type of operation, print two space separated integers, the front student's club and roll number.
------------------------------------------------------------------------------------------------------------------

Sample Input 1 

5
E 1 1
E 2 1
E 1 2
D
D
------------------------------------------------------------------------------------------------------------------
Sample Output 1

1 1
1 2

------------------------------------------------------------------------------------------------------------------

Hint

Explanation :

E 1 1( This meansE club_Number roll_Number)

The 2 types of operations are :

E club_Number roll_Numbe:Insert in the queue
If the same club member already present in the queue, then insert the new entry  next to that
Otherwise, Insert at the last
D:Print and Remove the front of the queue


Test Case Explanation :

E 1 1     ===>  Insert in the Queue = [ (1,1) ]

E 2 1    ===>   Since Club Member 2 is not present in the queue, Then in this case , insert this entry in last  Queue = [(1,1) , (2,1) ]

E 1 2    ===>   Since Club Member 1 is already present, In this case insert the entry next to it Queue =[(1,1) , (1,2) ,(2,1) ]

D         ====>  Remove Front of queue and print  (1,1)  Now, Queue = [(1,2) ,(2,1) ]

D         ====>Remove Front of queue and print  (1,2)  Now, Queue = [(2,1) ]



Thus Final Output is :

(1,1)

(1,2)
 ------------------------------------------------------------------------------------------------------------------
 */

function runProgram(input) {
 
    input=input.split('\n');
    const t=+input[0];
    const q1=[];
    const q2=[];
    const q3=[];
    const q4=[];
    const masterQ=[];
    for(let i=1;i<=t;i++){
        let query=input[i].split(' ');
        //console.log(query)
        if(query[0]==='E'){
            // add(q1,q2,q3,q4,masterQ,query)
            add(query)
        }else{
           //console.log(remove(q1,q2,q3,q4,masterQ,query)) ;
           console.log(remove(query)) ;
        }
        
    }
    
    
    function add(query){
     let groupName=+query[1];
     let person=+query[2];
     if(groupName===1){
         q1.push(person);
     } else if(groupName===2){
         q2.push(person);
     }else if(groupName===3){
         q3.push(person);
     }else if(groupName===4){
         q4.push(person);
     }
     if(masterQ.includes(groupName)===false)  masterQ.push(groupName);
    }
    

     function remove(query){
        let frontGroup=masterQ[0];
        if(frontGroup===1){
            let person=q1.shift();
            if(q1.length===0) masterQ.shift();
            return frontGroup+" "+person;
        } else if(frontGroup===2){
            let person=q2.shift();
            if(q2.length===0) masterQ.shift();
            return frontGroup+" "+person;
        }else if(frontGroup===3){
            let person=q3.shift();
            if(q3.length===0) masterQ.shift();
            return frontGroup+" "+person;
        }else if(frontGroup===4){
            let person=q4.shift();
            if(q4.length===0) masterQ.shift();
            return frontGroup+" "+person;
        }
    }
    
    
    
    
  }

//  refine code  ----------------------------------------------------------------- refine code

function runProgram(input) {
 
    input=input.split('\n');
    const t=+input[0];
    const q1=[];
    const q2=[];
    const q3=[];
    const q4=[];
    const masterQ=[];
    for(let i=1;i<=t;i++){
        
        let query=input[i].split(' ');
        //console.log(query)
        if(query[0]==='E')      add(query) ;
        else                    console.log(remove()) ;
        
    }
    function add(query){
        let clubName = +query[1];
        let rollNum  = +query[2];
        
        if(clubName == 1) q1.push(rollNum);
        else if(clubName == 2) q2.push(rollNum);
        else if(clubName == 3) q3.push(rollNum);
        else if(clubName == 4) q4.push(rollNum);
        
        if(!masterQ.includes(clubName)) masterQ.push(clubName);
    }
    function remove(){
        let clubName = +masterQ[0];
        let rollNum = -Infinity;
        if (clubName == 1){
            rollNum = q1.shift();
            if(q1.length == 0) masterQ.shift()
        }
        else if (clubName == 2){
            rollNum = q2.shift();
            if(q2.length == 0) masterQ.shift()
        }
        else if (clubName == 3){
            rollNum = q3.shift();
            if(q3.length == 0) masterQ.shift()
        }
        else if (clubName == 4){
            rollNum = q4.shift();
            if(q4.length == 0) masterQ.shift()
        }
        return clubName+" "+rollNum
    }
    
  }