class MyMap{
    constructor(){
        this.items={}
        this.size=0
    }

//set
set(key,value){
if(!this.items.hasOwnProperty(key)){
    this.size++
}
this.items[key] = value
}
//get
get(key){
return this.items[key]
}
//delete
delete(key){
    if(this.items.hasOwnProperty(key)){
        this.size--
    }

   return  delete this.items[key]
}
//size
size(){
return this.size
}
//has(key) return true or false
has(key){
return this.items.hasOwnProperty(key)
}
//print
print(){
    // for(const [key,value] of this.items) {
    //     console.log(`${key}:${value}`);
    //  }
    for(let i=0;i<this.items.length ; i++){
        console.log(i,this.items[i])
    }
}
}

const map = new MyMap()
map.set('a',1)
map.set('b',2)
map.set('c',3)
map.get('b')
// console.log(map)
// console.log(map.get('c'))
// map.set('c',97)
// console.log(map.get('c'))
// console.log(map.delete('c'))
// console.log(map.size)
map.print()
