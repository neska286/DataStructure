/**
Tree Definitions(non linear data structure)
Root=> first node in the tree 
=> node 0
Child=> branch of node
=>1,2,3, are children of node
Parent=> ehat branched from
=>1 is parent for 4,5
Ancestors=> parents to root
Leaves=> nodes has no children
sub-tree=> part of tree makes tree
Height=> number of levels
=>2
Depth=> number of levels from node to root
=>depth(1)=1
=>depth(5)=2

*************
Tree Implementaion
=>node
    =>value
    =>parent
    =>children
 */

    /**
     * 
steps for insert node in Binary tree
1-create a new node for example 27
2-I have two senarios
3-first if i have already a node for example 47
{I copmared the new node with the root 
if the root < new node will add the new node 
at the right
if the root > new node will add the new node
at the left
(if< left else > right)
after comparison :
In our case 47 will be greater than 27
so we have another two senarios
first if the right side is empty,
second if the right side is not empty
we have to do this in a loop 
and we don't know how many times we will do this 
so we use while loop
(if null insert newnode else move to next
    and compare again)
3-3.1- if I didn't have a root
{
so the root will be equal to null
so make the root equal to node
}
4-we need a variable named temp
to compare all varables by the root
5-value== value,if i had a node already equal in a tree
for example 76
we compare the new node with the temp 
varaiable 
  

/*
create newNode(1)
if root === null then root = newNode(3-3.1)
let temp = this.root
While loop(3)
if newNode === temp return undefined(5)
if< left else > right
if null insert newNode else move to next
/
*/
class Node{
    constructor(value){
        this.value = value
        this.left=null
        this.right=null
    }
}
// class name Binary Search Tree
class BST{
 constructor(){
    this.root = null
 }
 //insert Method
 //first create a node 
 //seconde we have two senario's
   // first if the tree is empty
   // second if the tree is not empty
 insert(value){
    //initialize new node with a value
    //with left and right pointer with null value
 const newNode = new Node(value)
 //tree is empty
  if(this.isEmpty()){
    this.root = newNode
  }else{
    // tree is not empty
    //we will start at the node
    //comparing the node with the new value
    //for exapmle if the node equal 10
    //if the new node is equal 5
    // so we compare 10 with 5
    //it will be at left from 10
    // if node > root it will be right the root
    // if the tree contain more than root
    //to make recuression possible
    this.inserNode(this.root,newNode)
  }

 }
  //insertNode
  //accept the root and newNode as arguments
  //we use the root becouse it will begin with the root
  //in each recursive call
 inserNode(root,newNode){
    //will add in the left side
    //check first if the left child node is empty
 if(newNode.value < root.value){
   if(root.left === null){
   //insert the new node as a left child
   root.left = newNode
   }else{
   // if the root left is not empty
   // if the left child exsist 
   // we recurisvly call insert node
   //passing in the left child as the new root
   // and the new node as is
   //this recursive node will sure we will find or add new node
   this.inserNode(root.left,newNode)
   }
   //newNode.value > root.value
   //will add in the right side
   //check first if the right childe node is empty
    }else{
    if(root.right === null){
   root.right = newNode
    }else{
     this.inserNode(root.right,newNode)
    }
    }
 }

 // search method
 //will accept the root value of the tree
 //and value to search as an arrgument
 //the implemnation of this methode will be
 //depend on two senarios' 
 //if the tree is empty or not
 search(root,value){
//if the tree is empty
if(!root){
 return false
 //tree is not empty
 //we have to trace on all tree starting form root to leave value
}else{
// start searching fromm the root
if(root === value){
return true
// if the value not equal the root
}else{
//check that the value is less than root
// so will focus on the left side of the tree
//then check that the value eqaul the exsisting node
//if the value is greater than root
// wiil focus on the right side of the tree
if(root.value === value){
return true
}else if(value < root.value){
return this.search(root.left,value)
}else{
return this.search(root.left,value)
}
}
}
 }
 preOrder(root){
    if(root){
    console.log(root.value)
    this.preOrder(root.left)
    this.preOrder(root.right)
    }
 }

 inOrder(root){
if(root){
    this.inOrder(root.left)
    console.log(root.value)
    this.inOrder(root.right)
}
 }
 postOrder(root){
    if(root){
        this.postOrder(root.left)
        this.postOrder(root.right)
        console.log(root.value)
    }
 }

 isEmpty(){
return this.root === null
 }
}

let myTree = new BST()
console.log(myTree)
console.log(`Is Tree is empty ${myTree.isEmpty()}`)
myTree.insert(10)
myTree.insert(5)
myTree.insert(15)
myTree.insert(3)
myTree.insert(7)

// console.log(myTree.search(myTree.root ,20))
// console.log(myTree.root ,5)
// console.log(myTree.root ,15)
myTree.postOrder(myTree.root)