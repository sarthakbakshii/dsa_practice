// 1) depth first print

const depthFirstPrint = (graph , src ) =>{
    const stack = [];
    let result = "";

    stack.push(src);
    while( stack.length > 0){
        const current = stack.pop();
        console.log(current);
        result += `${current} `;

        for (const neighbor of graph[current]) {
            stack.push(neighbor);
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
const output = "a c e b d f ";

depthFirstPrint( graph , "a")

