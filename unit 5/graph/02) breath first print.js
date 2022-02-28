// 02) breath first print.

const breathFirstPrint = (graph , src ) =>{
   const que = [src];
   let result = '';

   while( que.length > 0){
       const current = que.shift();
       console.log(current);
       result += `${current} `;
       for (const key of graph[current]) {
           que.push(key)
       }
   }
   console.log(result)
}


const graph = {
    a : ['b','c'],
    b : ['d'],
    c : ['e'],
    d : ['f'],
    e : [],
    f : []
}
const output = "a b c d e f";

breathFirstPrint( graph , "a")

