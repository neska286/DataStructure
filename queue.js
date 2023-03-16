// Queue Implementation


// enqueue(element)- add an element to the queue
// dequeue()- remove the oldest element from the queue
// peek()- get the value of the element at the front of the queue without removing it
//isEmpty()-check if the queue us empty
//size()-get the number of elements in the queue
//print()-visualize the elements in the queue


// using this shift methods will take time complexcity
// class Queue {
//     constructor(){
//         this.items=[]
//     }
//     enqueue(element){
//         this.items.push(element)
//     }
//     dequeue(){
//         return this.items.shift()
//     }
//     isEmpty(){
//         return this.items.length === 0
//     }
//     peek(){
//         if(this.isEmpty()){
//             return this.items[0]
//         }
//         return null
//     }
//     size(){
//         return this.items.length
//     }
//     print(){
//         console.log(this.items.toString())
//     }
// }
// const queue = new Queue()
// console.log(queue.isEmpty());
// queue.enqueue(10)
// queue.enqueue(20)
// queue.enqueue(30)
// queue.print()

// implement Queue using Implementation Optimised

class Queue {
    constructor(){
        this.items={}
        this.rear =0 // tail
        this.front =0 // head
    }
 // add an element to the queue
    enqueue(element){
    this.items[this.rear] = element
    this.rear++
    }

    dequeue(){
        if(this.isEmpty()) return 
        delete this.items[this.front]
        this.front++
        const item = this.items[this.front]
        return item
    }


// elemnt front of the queue
peek(){
   return  this.items[this.front]
}
// number of elements to get the size of the queue
size(){
  return   this.rear - this.front
}
// empty queue
isEmpty(){
    // return this.rear - this.front === 0
    return this.size() === 0
}
    //print the object
    print(){
        console.log(this.items)
    }
}
const queue = new Queue

queue.enqueue(10)
queue.enqueue(20)
queue.enqueue(30)
console.log(queue.dequeue())
queue.print()