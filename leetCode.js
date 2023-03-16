//****************************** Problem Solving ********************************************* */
//232. Implement Queue using Stacks
 class MyQueue {
    constructor(){
        this.pushStack=[],
        this.popStack=[]
    }

    push(val){
        this.pushStack.push(val)
    }

    pop(){
        //check that popstack is empty
      if(!this.popStack.length){
        // check that push stack has values
        while(this.pushStack.length){
            // add values from push stack to pop stack
            this.popStack.push(this.pushStack.pop())
        }
      }
      // then we can remove it
       return this.popStack.pop();
    }

    peak(){
        if(!this.popStack.length){
            while(this.pushStack.length){
            this.popStack.push(this.popStack.pop())
            }
        }
        return this.popStack[this.popStack.length -1]

    }
    empty(){
    return !this.popStack.length && !this.pushStack.length
    }
 }

 //****************************** Problem Solving ********************************************* */
 //706. Design HashMap

 class MyHashMap{
 constructor(size){
    this.table = new Array(size)
    this.size = size
 }
 hash(key){
    let total =0
    for(let i=0 ; i<key.length;i++){
        total += key.charCodeAt(i)
    }
    return total%this.size
 }
 put(key,value){
    const index = this.hash(key)
if(!this.table[index]){
    this.table[index]=[]
}
this.table[index].push([key,value])
 }
//  get(key){
//     const index = this.hash(key)
//     // return this.table[index]
//     //if there is value in this index
//     if(this.table[index]){
//         //looping in the small array [[],[]]
//      for(let i=0;i< this.table[index].length;i++){
//       if(this.table[index][i][0]=== key)
//       return this.table[index][i][1]
//      }   
//      return undefined
//     }
//     //if there is no any key in this index 
//     return undefined
// }
get(key){
    const index = this.hash(key)
if(this.table[index]){
const sameKeyItem = this.table[index].find(item=> item[0]===key)
if(sameKeyItem){
    return sameKeyItem[1]
}
}
return undefined
}
remove(key){
const index = this.hash(key)
if(this.table[index]){
const sameKeyItem = this.table[index].find(item=>item[0]===key)
if(sameKeyItem){
this.table[index].splice(this.table[index].indexOf(sameKeyItem))
}
}
}
 }

//****************************** Problem Solving ********************************************* */
//226 Invert Binary tree

//1-if root is null , return null
//2-create temp varaible and assign it to root.left
//3- change root.left to equal root.right
//4- change root.left to equal to temp
//5-inverTree(root.left)
//6-inverTree(root.right)

//Time Complexity: O(n)

var inverTree = function(root){
    if(root === null) return null;
    let temp = root.left
    root.left = root.right
    root.left = temp
   invertTree(root.left) 
   invertTree(root.right) 
 return root
}

//****************************** Problem Solving ********************************************* */
//100. Same Tree

//create currenNode to equle the root
//create result array
//create queue array
var isSameTree = function(p, q) {
    let currentNode  = p[0]
    let results = []
    let queue = []
    queue.push(currentNode)
    while(queue.length){
        currentNode = queue.shift()
    }
   
    
};
console.log(isSameTree([1,2,3],[1,2,3]))
