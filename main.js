
//****************************** Problem Solving ********************************************* */
function filter_list(l) {
    // Return a new array with the strings filtered out
    // return l.filter(ele =>  typeof ele == 'number')
    let newArr =[]
    for (let i = 0; i < l.length; i++) {
        const element = l[i];
        console.log('elemnt',element)
        if(typeof(element)  == 'number'){
            newArr.push(element)
        }    
    }
    return newArr
  }
//   console.log('result',filter_list([1,'a','b',0,15]));

  //****************************** Problem Solving ********************************************* */
//   leetCode practice on stack
const isValid = function(s) {
    let stack = [] //Lifo
    const hashMap = {
        "(":")",
        "[":"]",
        "{":"}"
    }
  for(let ch of s){
    console.log('ch',ch)  //first ch will be (
    console.log('hashMap',hashMap[ch]) // first ch will be )  
        if(hashMap[ch]){
        stack.push(hashMap[ch]) // add both of them in sack ['(',')']
        // check that the stack is not empty && stack[1]=')' === '('
        }else if(stack.length > 0 && stack[stack.length -1] === ch){ // check if the last one in stack as the perivous on
         stack.pop()
        }else {
            return false
        }
  }
  return stack.length === 0
    
};
// console.log('res',isValid("()[]{}"))
//for loop
// get current element
// create stack to add the curr elements
//obj[indexOfCurrent]

//****************************** Problem Solving ********************************************* */
//155-Min Stack (leetCode)

//create stack
//inital stacks
// class MinStack {
//     constructor(){
//         this.stack=[]
//         this.minStack=[]
//     }

//     // push elements
//     push(ele){
      
//         if(!this.stack.length){
//             this.minStack.push(ele)
//             this.stack.push(ele)
//         }else{
//             let min = Math.min(ele,this.minStack[this.minStack.length-1])
//            this.minStack.push(min)
//            this.stack.push(ele)
//         }
//     }

//     //pop elemnts
//     pop(){
//         if(!this.stack.length) return null
//         this.minStack.pop()
//         return  this.stack.pop()
        
//     }
//     // get the first element in the stack
//     top(){
//        return  this.stack[this.stack.length-1]
//     }
//     //get the min element in the stack
//     getMin(){
//        return  this.minStack[this.minStack.length-1]   
//     }
// }

//****************************** Problem Solving ********************************************* */
//225- Implement Stack using Queues (leetCode)

class MyStack {
    constructor(){
        this.items={}
        this.head = 0
        this.tail =0
    }
    //enqueue
    push(item){
        this.items[this.tail] = item
        this.tail++
    } 
    //dequeue
    pop(){
        delete this.items[this.head]
        this.head++
        const item = this.items[this.head]
        return item
    }
    // Returns the element on the top of the stack.
    top(){
     return this.items[this.head]
    }
    empty(){
        return this.head - this.tail === 0
    }
    print(){
        console.log(this.items)
    }
}
const myStack = new MyStack()

myStack.push(10)
myStack.push(20)
myStack.push(30)
myStack.pop()
myStack.print()