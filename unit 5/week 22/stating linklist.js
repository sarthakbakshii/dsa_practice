// const list={
//     head:{
//         value:null,
//         next:{
//             value:1,
//             next:{
//                 value:2,
//                 next:{
//                     value:3,
//                     next:{
//                         value:4,
//                         next:null
//                     }
//                 }
//             }
//         }
//     }
// }
/*
console.log("list.head.next :",list.head.next)
console.log("list.head.value :",list.head.value)
console.log();
console.log("list.head.next.next :",list.head.next.next)
console.log("list.head.next.value :",list.head.next.value)
console.log();
console.log("list.head.next.next.next :",list.head.next.next.next)
console.log("list.head.next.next.value :",list.head.next.next.value)
console.log();
console.log("list.head.next.next.next.next :",list.head.next.next.next.next)
console.log("list.head.next.next.next.value :",list.head.next.next.next.value)

output :

list.head.next : { value: 1, next: { value: 2, next: { value: 3, next: [Object] } } }
list.head.value : null

list.head.next.next : { value: 2, next: { value: 3, next: { value: 4, next: null } } }
list.head.next.value : 1

list.head.next.next.next : { value: 3, next: { value: 4, next: null } }
list.head.next.next.value : 2

list.head.next.next.next.next : { value: 4, next: null }
list.head.next.next.next.value : 3
*/

// ===================================== starting

class LinkList{
    constructor(){
        this.head = null,
        this.tail =  null
    }
}

class LinkedListNode{
    constructor(data){
        this.data = data,
        this.next =  null,
        this.prev =  null
    }
    // constror
    //  methords

    size(){
        let count = 0;
        let node = this.head;
        while(node != null ){
            count++;
            node = node.next;
        }
        return count
    }

    inEmpty(){
        return this.size == 0?true:false
    }

     add_At_Last(data){
        let node = new LinkedListNode(data);

        // if head is empty then sytore data in head
        if(!this.head){
            this.head = node 
        }
        else{
            let temp = this.head
            while(temp.next !== null){
                temp = temp.next;
            }
            temp.next = node
        }

    }
    getFirst(){
        return this.head
    }
}

console.log("================================");
let list = new LinkedListNode(10);
let size = list.size();
let first = list.getFirst()

console.log("list => ",list);
console.log("size => ",size);
console.log("first => ",first);

console.log("================================");

list = new LinkedListNode(10);
list.add_At_Last(11);
list.add_At_Last(12);
list.add_At_Last(13);
size = list.size();
first = list.getFirst()

console.log("list => ",list);
console.log("size => ",size);
console.log("first => ",first);
console.log("================================");
/*
LinkedListNode { data: 10, next: null, prev: null }
0
LinkedListNode {
  data: 10,
  next: null,
  prev: null,
  head: LinkedListNode { data: 11, next: null, prev: null }
}
1
*/



function runFunc() {
    console.log(5 + "1");
    console.log("A" - 1);
    console.log("5" - 1);
    console.log(2 + "-2" + "2");
    console.log("Hello" - "World" + 78);
    console.log("Hello" + "78");
}
