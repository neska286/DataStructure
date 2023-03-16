//Linked List is consists of node(data,pointer) +  the linked list itself

class Node{
    constructor(value){
     this.value = value
     this.next = null
    }
}

class LinkedList {
    constructor(){
        this.head = null
        this.size = 0
        this.tail =null
    }

    isEmpty(){
        return this.size === 0
    }
     getSize(){
        return this.size //ae3ed 3add el 3anaser el mawgoda
     }
     //insert node when the list is empty
     //inserts specified content at the beginning of the selected elements
     //o(1)
      // Add a value at beginning of list addStart
     prepend(value){
        //create node(value+pointer)
        const node = new Node(value)
        // if the list is empty we must add pointer header point at the first node in the list
        if(this.isEmpty()){
            this.head = node
        }else{
            //if list is not empty
            node.next = this.head //newly added node
            this.head = node
        }
        this.size++
        
     }
     //adding an element at the end of the list
     //O(n)
     //addEnd
     append(value){
        // step one create a new node
        const node = new Node(value)
        // we begin to create two senarios(emptyList) or list is not empty
        //if list is empty
        if(this.isEmpty()){
            this.head = node 
        }else{
         let prev = this.head
         while(prev.next){
            prev = prev.next     
         }
         prev.next = node
        }
        this.size++
     }
     //insert node at a certain index
     // first senario if the index less than zero or greater than the index itself
     insert(value,index){
        //handle  senario one
        if(index<0 ||index > this.size ){
            return
        }
        //handel seconde senario if the index = 0
         if(index === 0){
            this.prepend(value)
         }else{
            //handle third senario
            //index is valid and greater than zero
            //in the middle of the list
            const node = new Node(value) // create node
            let prev = this.head  //create pointer start from the head
            for(let i=0;i<index-1;i++){ // i wnat this pointer can loop in all list but must start from head
                prev = prev.next
            }
            node.next = prev.next// connect with the prev node
            prev.next = node //connect with the node
            this.size++
         }
     }

     //handle remove from list
     removeFrom(index){

        //handle first senario 
        if(index < 0 || index >= this.size){
            return null
        }
        let removedNode
        if(index===0){
            removedNode = this.head
            this.head = this.head.next
        }else{
            let prev = this.head
            for(let i =0 ; i< index-1;i++){
                prev = prev.next
            }
            removedNode = prev.next
            prev.next = removedNode.next
        }
        this.size--
        return removedNode.value
     }
     removeValue(value){
        //first senario if the list is empty
        if(this.isEmpty()){
            return null
        }
        //second senario if the value is the first value
        if(this.head.value === value){
            this.head = this.head.next
            this.size--
            return value
        }
        //third senario if value in the middle of the list
     }
     // insert-- change the value inside the node
     set(value,index){
        let current = this.head
        for(let i= 0 ; i < index-1; i++){
            current = current.next
            current.value = value
        }
    
     }
    //  get(index){
    //     let curr = this.head
       
    //     for(let i=0;i< index ; i++){
    //         curr = curr.next
          
    //     }
    //    let currValue = current.value
       
    //  }
    // add new node in the start of linked list
    addFirst(value){
     //stepOne create new node to add value and next
     const node = new Node(value)
     if(this.isEmpty()){
        this.head = node
        this.tail =node
     }else{
        node.next = this.head // make the next is head ha7'ly el node el gedida teshawer 3ala el head
        this.head = node // make the head eshawer 3ala el node
     }
     this.size++ //n++
    }
    addLast(value){
        const node = new Node(value)
        if(this.isEmpty()){
          this.head = node
          this.tail = node
        }else{
        this.tail.next = node
        this.tail = node
        }
        this.size++
    }
    addMiddle(value,index){
        if(index < 0 || index > this.size){
            return 
        }
        if(index === 0){
            this.prepend(value)
         }else{
        let node = new Node(value)
        let curr = this.head
        for(let i =0 ; i< index-1;i++){
            curr = curr.next
            
        }
        node.next = curr.next
        curr.next = node
        this.size++
    }
    }

    deleteFirst(){
        if(this.isEmpty()){
            return null
        }
        this.head = this.head.next
        this.size--
    }
    deleteLast(){
        if(this.isEmpty()){
            return null
        }
        let current = this.head
        for(let i = 0 ; i < this.size-1 ; i++){
           current = current.next
        }
        this.tail = current
        this.tail.next = null
        this.size--

    }
    deleteMiddle(index){
        if(this.isEmpty()){
            return null
        }
        let curr = this.head
        for(let i = 0; i <index-1;i++){
            curr = curr.next
        }
        curr.next = curr.next.next
        this.size--
    }
    removeFromFront(){
        if(this.isEmpty()){
            return null
        }
        const value = this.head.value
        this.head = this.head.next
        this.size--
        return value
    }
    removeFromEnd(){
        if(this.isEmpty()){
            return null
        }
        const value = this.tail.value
        if(this.size ===1){
            this.head=null
            this.tail=null
        }else{
            let prev = this.head
            while(prev.next !==this.tail){
                prev = prev.next
            }
            prev.next = null
            this.tail = prev
        }
        this.size--
        return value
    }
    search(value){
    if(this.isEmpty()){
        return -1
    }
    let i =0
    let current = this.head
    while(current){
     if(current.value === value){
        return i
     }
     current = current.next
     i++
    }
    return -1
    }
     print(){
        if(this.isEmpty()){
            console.log('List is empty')
        }else{
            let curr = this.head
            let listValues =''
            while(curr){
                listValues += `${curr.value}`
                curr = curr.next
            }
            console.log(listValues)
        }
     }
}
module.exports = LinkedList

// const list = new LinkedList()
// console.log('linkedList is empty',list.isEmpty());
// console.log('linkedList is size',list.getSize());
// list.print()
// list.prepend(10)
// list.print()
// list.prepend(20)
// list.prepend(30)
// list.print()


// list.print()
// list.append(10)
// list.print()
// list.append(20)
// list.append(30)
// list.print()
// list.print()
// list.addMiddle(10,0)
// list.print()
// list.addMiddle(20,1)
// list.print()
// list.addMiddle(30,2)
// list.print()
// list.addMiddle(40,3)
// list.print()





// console.log(list.getSize())
// list.addLast(60)
// list.print()