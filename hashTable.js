//Set to store a key-value pair
//Get to retrieve a value given its key
//Remove to delete a key value pair
//Hashing function to convert a string key to a numeric index
class HashTable{
    constructor(size){
        this.table = new Array(size)
        this.size = size
    }

    //convert string key to numeric index
hash(key){
    let total = 0
    for(let i=0;i<key.length;i++){
        //charCodeAt tell me the index of the char
        total +=key.charCodeAt(i)
    }
    // to ensure that the index will be within the range
    //if the size is 50 , the index will be between 0-49
    return total%this.size
}
set(key,value){
    //where to store key,value pair so create index
    const index = this.hash(key)
    // //add to every value a key
    // this.table[index]=value
    //built an empty array to push key,value to index in an array
    //first check that the place is empty
    if(!this.table[index]){
    this.table[index] = []
    }
    this.table[index].push([key,value])
    // return this
}
get(key){
    const index = this.hash(key)
    // return this.table[index]
    //if there is value in this index
    if(this.table[index]){
        //looping in the small array [[],[]]
     for(let i=0;i< this.table[index].length;i++){
      if(this.table[index][i][0]=== key){
      return this.table[index][i][1]
    }
     }   
    
    }
    //if there is no any key in this index 
    return -1
}
remove(key){
    const index = this.hash(key)
    this.table[index] = undefined
}
keys(){
let allKeys=[]
for(let i =0 ; i< this.table.length;i++){
if(this.table[i]){
    for(let j=0;j< this.table[i].length;j++){
allKeys.push(this.table[i][j][0])
    }
}

}
return allKeys
}
display(){
    for(let i = 0 ; i < this.table.length;i++){
        if(this.table[i]){
            console.log(i,this.table[i])
        }
    }
}
}
const table = new HashTable(50)

// table.set("name","nermen")
// table.set("age",25)
// table.set("mane","boty")
// table.set("washers",50)
// table.set("bolts",1400)
// console.log(table.keys())
// // console.log(table.get("lumber"))
// table.display()

//itemInCommonArray

function ItemInCommon(arr1,arr2){
    //this solution gives O(n*2)
    // for(let i= 0 ; i< arr1.length;i++){
    //  for(let j= 0 ; j<arr2.length; j++){
    //     if(arr1[i]== arr2[i]){
    //         return true
    //     }
       
    //  }
    // }
    // return false

    //this solution gives O(n)
    let obj={}
    for(let i=0;i<arr1.length;i++){
        obj[arr1[i]]=true
    }
    for(let j=0;j<arr2.length;j++){
        if(obj[arr2[j]]) return true
    }
    return false
}
console.log('res', ItemInCommon([1,3,5],[2,4,5]))

let max = testArray[0];
for (let i = 1; i < testArrayLength; ++i) {
  if (testArray[i] > max) {
    max = testArray[i];
  }
}