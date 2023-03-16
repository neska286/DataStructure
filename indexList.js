const LinkedList = require('./linkedList')

class LinkedListStack {
    constructor(){
        this.list = new LinkedList()
    }
push(value){
 this.list.addFirst(value)
}
pop(){
this.list.removeFromFront()
}
peak(){
return this.list.head.value
}
isEmpty(){
return this.list.isEmpty()
}
getSize(){
return this.list.getSize()
}
print(){
return this.list.print()
}
}

const stack = new LinkedListStack()
console.log(stack.isEmpty());

stack.push(20)
stack.push(10)
stack.push(30)
stack.print()
console.log(stack.getSize())