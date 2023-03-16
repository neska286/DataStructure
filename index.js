// Array

let arr = [1,2,3,'vishes']
arr.push(5)// add element in the last index in array
arr.pop()// remove element in the last index in array
arr.shift()//remove the first elemtn in array and return it
arr.unshift(1)//elemnts to insert in the start of the array

// for(let ele of arr){
//     console.log('ele',ele)
// }

// map, filter, reduce ,concat, slice and splice

// Array -Big-O time complexity
// insert/remove from end - o(1)
//insert /remove from beginning - o(n) linear
//Access - o(1)
//Search - o(n)
//push/pop -o(1)
//shift/unshift/concat/slice/splice-o(n)
//forEach/map/filter/reduce-o(n)

//****************************** ********************************************* */

//Object

const obj = {
    name:'Bruce',
    age:35,
    sayMyName: function(){
        console.log(this.name)
    }
}
obj.foot = true
delete obj.foot

// console.log(obj.name) // dotNotaion
// console.log(obj['age'])//braket notaioncon
// console.log(obj)
// obj.sayMyName()

//Object.keys(obj) returns an array of the object property names
//Object.values(obj) return an array of the objects values
//Object.entries(obj) returns an array of the [key,values] pair

// console.log(Object.keys(obj))
// console.log(Object.values(obj))
// console.log(Object.entries(obj))


