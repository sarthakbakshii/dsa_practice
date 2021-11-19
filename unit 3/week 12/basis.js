let arr = [1,2,3,4,5]

let queue = []

function enqueue(data){
    queue.push(data)
}

enqueue(21)
enqueue(211)
enqueue(221)
enqueue(213)
console.log(queue)

function deqeueue(){
    queue.reverse().pop()
    queue.reverse()
}
deqeueue()
console.log(queue)
