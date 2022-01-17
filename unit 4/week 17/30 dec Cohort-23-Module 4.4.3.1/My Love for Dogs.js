/*
My Love for Dogs
------------------------------------------------------------------------
https://oj.masaischool.com/contest/2699/problem/01
Password : 29243
------------------------------------------------------------------------
Description
I have brought home n dogs. Now, being a dog lover, I am taking care of the 
dogs and brought dog food for them. Being a guy with no idea what to buy, I 
brought some n packets of dog food (I atleast knew that each and every dog 
being a good junkie will completely eat a whole packet of dog food and 
 won't share anything with other dogs).

Each food packet has some calorie value c. If a dog with original strength 
s eats that packet, the strength of the dog becomes c*s. I did not know 
this fact and now all the dogs won't be able to eat the maximum strength 
packet and increase their strength (and annoying powers).

You are provided with the original strength of each dog and the calorie 
value of each of the n packets. Help me by telling me what is the maximum 
value of sum of the final strengths of the dogs that can be obtained 
if each dog is given a whole packet of dog food to eat.
------------------------------------------------------------------------
Input Format:

The first line of the input will consist of n, the number of cats as 
well as the number of food packets brought by me.

The second line will consist of n space separated integers si, 
the original strength of the dogs.

Third line consists of n space separated integers ci, the 
calorie value of food packets.
------------------------------------------------------------------------
Constraints:

1 ≤ n ≤ 1000000
1 ≤ si ≤ 1000000
1 ≤ ci ≤ 1000000
------------------------------------------------------------------------
Output

An integer which is the maximum value of sum of the final strengths 
of the dogs that can be obtained.
------------------------------------------------------------------------

Sample Input 1 

2
3 1
4 3
------------------------------------------------------------------------
Sample Output 1

15
------------------------------------------------------------------------*/

function runProgram(input) {
  a = input.split("\n");
  
  let t = + a[0];
  let A = a[1].split(" ").map(Number).sort( (a,b) => b - a )
  let B = a[2].split(" ").map(Number).sort( (a,b) => b - a )
  let sum = 0;
  for( let i = 0 ; i < t ; i ++ ){
      sum += A[i]*B[i]
  }
  console.log(sum)
  
}