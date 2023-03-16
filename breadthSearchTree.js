class Node{
    constructor(value){
    this.value = value
    this.left = null
    this.right = null
    }
}

class BST{
    constructor(){
    this.root = null
    }
//1-create newnode
//2-if root === null then root = newNode
//let temp = this.root
//while loop
// if newNode === temp return undefined
// if< left else > right
// if null insert newNode else move to next

insert(value){
    //1-create newnode
const newNode = new Node(value)
//2-if root === null then root = newNode
// thats means we have an empty tree
if(this.root === null){
    this.root = newNode
    return this
}
//set a variable
let temp = this.root
//keep runing unless it hits  return statement
while(true){
    // trying to insert a node with the same value
    //already we have in the tree
    if(newNode.value === temp.value) return undefined
    //if it less we go left
    //else if its greater than 
    // we will move right
    if(newNode.value < temp.value){
        //if the left has no value
        if(temp.left === null){
        temp.left = newNode
        // return the entire tree
        return this
        }
        // if the left has a value
        temp = temp.left
    } else {
        if(temp.right === null){
            temp.right = newNode
            return this
        }
        temp = temp.right
    }
}
}
contains(value){
    if(this.root === null) return false
    let temp = this.root
    while(temp){
    if(value < temp.value){
        temp = temp.left

    }else if(value > temp.value){
        temp = temp.right

    }else{
      return true
    }
    }
    return false
}

//Breadth First Search
BFS(){
    // adding a variable to begin with the root
let currentNode = this.root
//need results array
let result = []
// need a queue array
let queue = []
//first of all before we loop in the tree
// we want to push the root or the current node
//in the queue(the root value)
queue.push(currentNode)
// start loop while the queue has a value > 0
while(queue.length){
// remove the value from begin
// and we have to do couple of thing
currentNode = queue.shift()
//first we will take the current value from that node and add it on the 
//results array
result.push(currentNode.value)
//second we will go left and right
// if there is a vlaue in left
// we will push that value to the queue 
if(currentNode.left) queue.push(currentNode.left)
// if there is a vlaue in right
// we will push that value to the queue 
if(currentNode.right) queue.push(currentNode.right)
}
return result
}
}

let myTree = new BST()
myTree.insert(4)
myTree.insert(2)
myTree.insert(7)
myTree.insert(1)
myTree.insert(3)
myTree.insert(1)
// myTree.insert(82)
console.log(myTree)


// let strArr = string.toLowerCase();
// let alphabet = 'abcdefghijklmnopqrstuvwxyz'.split('');

// for (let i = 0; i < alphabet.length; i++) {
//   if(strArr.indexOf(alphabet[i]) < 0){
//     return false;
//   }
// }
// return true;