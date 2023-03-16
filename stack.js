//****************************** Problem Solving ********************************************* */
 class Stack {
    constructor(){
        this.items =[]
    }
    // Add elements to Stack

    push(element){
     this.items.push(element)
    }

    // Remove elements from Stack
    pop(){
        return this.items.pop()
    }
    // Get the last element In Stack without removing it
    peek(){
        return this.items[this.items.length-1]
    }
    // Check that the Stack is Empty
    isEmpty(){
        return this.items.length === 0
    }
    // know the size for the stack
    size(){
        return this.items.length
    }
    // print the stack
    print(){
        console.log(this.items.toString())
    }
 }
 const stack = new Stack()
 stack.push(20)
 stack.push(10)
 stack.push(30)
//  stack.print()
// console.log(stack.size())
// console.log(stack.peek())
console.log(stack.pop())
stack.print()
