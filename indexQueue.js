const LinkedList  = require('./linkedList')

class LinkedListQueue{
    constructor(){
        this.list = new LinkedList()
    }
  enqueue(value){
    this.append(value)
  }
  dequeue(){
    return this.list.removeFromFront()
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