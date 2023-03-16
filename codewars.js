//****************************** Problem Solving ********************************************* */
//Exes and Ohs
//the same amount of 'x's and 'o's
function XO(str) {
    //code here
   let  numberOfX = 0
   let numberOfO = 0
    for(let i = 0 ; i< str.length ; i++){
     console.log('res',str[i])
     if(str[i] === 'x' || str[i] === 'X'){
        numberOfX++
     }
     if(str[i] === 'o' || str[i] === 'O'){
        numberOfO++
     }
    }
    if( numberOfX === numberOfO){
        return true
    }else{
        return false
    }
}
// console.log('res',XO('zpzpzpp'))

//****************************** Problem Solving ********************************************* */
//Correct the mistakes of the character recognition software
function correct(string){
	// your code here
//    return string.replace(/0/g, "O").replace(/1/g, "I").replace(/5/g, "S")
s = string.split('')
for(let i =0 ; i< s.length ; i++){
    if(s[i] === '5') s[i]= 'S'
    else if(s[i]==='0') s[i]='O'
    else if(s[i]==='1') s[i]='I'
}
return s.join('')
}
// console.log('res',correct('L0ND0N'))

//****************************** Problem Solving ********************************************* */
//Descending Order
function descendingOrder(n){
    //...
    let arr = n.toString().split('')
    console.log('arr',arr)
    // let max = Math.max(...arr)
    // console.log('max',max)
    // let maxArr =[];
    // for(let i = 0 ; i< arr.length;i++){
    //     console.log('i',arr[i])
    //     if(max >= arr[i])
    //     maxArr.push(arr[i])

    // }
    // return maxArr
    return arr.sort().reverse().join('')
  }

//  console.log('res',descendingOrder(42145))


//****************************** Problem Solving ********************************************* */
// A Needle in the Haystack
function findNeedle(haystack) {
    // your code here
    // for(let i =0 ; i< haystack.length ; i++){
    //     console.log('haystack',haystack[i],i)
    //     if(haystack[i] === "needle"){
    //         return `found the needle at position ${i} `
    //     }
    // }
    return `found the needle at position` + haystack.indexOf("needle")
  }

console.log('res',findNeedle(['3', '123124234', undefined, 'needle', 'world', 'hay', 2, '3', true, false]))

//****************************** Problem Solving ********************************************* */
//What is between?
function between(a, b) {
    // your code here
  // let num =0
  // let arr =[]
  // // i=0; i<4
  // //i=1
  // for(let i=0 ; i<b ;i++){
  //   //num = 0+1=1
  //   num += a
  //   arr.push(num)
  // }
  // return arr
  let arr =[]
  //i=1;1<=4
  //i=2;2<=4
  //i=3;3<=4
  //i=4 ; 4<=4
  for(let i =a; i<=b;i++){
    console.log('i',i)
    //[1,2,3,4]
    arr.push(i)
  }
  return arr
  }
// console.log('res',between(1,4))

//****************************** Problem Solving ********************************************* */
function getPassingTests(results) {
return results.filter(result=> (result.grade >= 10))
}

const data = [{
  id: 1,
  grade: 10
}, {
  id: 2,
  grade: 4
}, {
  id: 3,
  grade: 18
}]
// console.log(getPassingTests(data))

//****************************** Problem Solving ********************************************* */
//Disemvowel Trolls
function disemvowel(str) {
  // return str.replace(/[aeiou]/gi,'');
  const vowels = 'aeiou';
  let newArr = str.split('')
  return newArr.filter(letter=>( !vowels.includes(letter)
  )).join('')
}
// console.log('res',disemvowel('This website is for losers LOL!'))

//****************************** Problem Solving ********************************************* */
//7 kyu Sort array by string length
function sortByLength(array) {
  // Return an array containing the same strings, ordered from shortest to longest
                             //3         4 => -1 (Beg)
                             //1
   return array.sort((a,b)=> a.length - b.length)
  
};
//['Beg',"I","Life","To"]
// console.log('res',sortByLength(["Beg", "Life", "I", "To"]))
// //["Beg"]

//****************************** Problem Solving ********************************************* */
var maxSequence = function(arr){
  // let maxNumber = Math.max(...arr)
 
  let maxSum = -Infinity
  let currentSum = 0
  // i=0 ; 0 < 9
  // i=1;1<9
for (let i = 0; i < arr.length; ++i) {
                         // arr[0]=-2 , 0+(-2)
                         //arr[1]=1,-2+1 = -1
   currentSum = Math.max(arr[i], currentSum + arr[i])//-2//1

   maxSum = Math.max(currentSum,maxSum) //(-2 , -8) //-2
                                        //(1,-2)//1
}
  
return maxSum
 
}

// console.log(maxSequence([-2, 1, -3, 4, -1, 2, 1, -5, 4]))
// const a=[1,2];
// a[0]=10;
// a[1]=20;
// a[2]=30;
// console.log(a)

//****************************** Problem Solving ********************************************* */
//Detect Pangram
function isPangram(string){
  //...
let strArr = string.toLowerCase();
console.log(strArr)
let alphabet = 'abcdefghijklmnopqrstuvwxyz'.split('');
console.log(alphabet)
for(let i = 0; i < alphabet.length ; i++){
  if(strArr.indexOf(alphabet[i] < 0)){
   return false
  }
}
return true
}
// console.log(isPangram("The quick brown fox jumps over the lazy dog."))

//****************************** Problem Solving ********************************************* */
//Counting Duplicates

//convert the string to lowerCase then to  array
//loop over the array
//
// function duplicateCount(str){
//   // let obj={}
 
//   // for(let i = 0; i< str.length ;i++){
//   //   let letter = str.charAt(i)
//   //   console.log(letter)
//   //   obj[letter] = isNaN(obj[letter])? 1 : obj[letter]+1
    
//   // }
//   // return obj
//   let newArr = str.split('')
//   let letters = []
//   let count = 1
  
//   for(let i = 0 ; i< newArr.length ; i++){
//     if(newArr[i]== newArr[i+1]){
//       count++
//     }else{
//       let value = `${count}`
//       letters = [value]
//       count =1
//     }
//   }
//   console.log(typeof letters)
//   return letters.join('')

// }
function duplicateCount(text){
  //...
 return text.toLowerCase().split('').filter((val, i, arr) => {
    // return arr.indexOf(val) !== i && arr.lastIndexOf(val) === i;
    console.log(val)
    //arr.indexOf(val)= 0 !== 0
  }).length;
}
// console.log(duplicateCount("abcdeee"))
// var obj={}
// var repeats=[];
// str='banana'

// for(x = 0, length = str.length; x < length; x++) {
//     var l = str.charAt(x)
//     obj[l] = (isNaN(obj[l]) ? 1 : obj[l] + 1);
// }

function MinusPlus(s,n){
let arr = s.split(' ')
console.log(arr)
for(let i =0 ; arr.length ; i++){
 console.log(arr[i])
}
}
  // console.log(MinusPlus("minus plus minus"))

//   let arr = s.split(' ')
// let sign = " " //-+-
// console.log(arr)
// //  i=0 ; 0 < 3 
// // i=1 ; 1<3
// for (let i = 0; i < arr.length; i++) {
//   const element = arr[i];
//   console.log(element)
//   // element = minus
//   if(element === 'minus'){
//     let result = element.replace('minus','-')
//     console.log('result', result)
//     sign +=result
//   }else{
//     let plus = element.replace('plus','+')
//     console.log('result', plus)
//     sign +=plus
//   }
  
// }
// return sign

//reverse string
function reverString(s){
  let rev = ''
  for(let i = s.length-1; i>=0 ;i-- ){
    rev +=s[i]
  }
  return rev
}

// console.log(reverString('hello'))

//****************************** Problem Solving ********************************************* */
//Counting sheep.
function countSheeps(arrayOfSheep) {
  // TODO May the force be with you
  let count = 0;
  for(let i =0 ; i< arrayOfSheep.length ;i++){
    if (arrayOfSheep[i]) count++
  
}
return  `There are ${count} sheeps in total`
}
var array1 = [true,  true,  true,  false,
  true,  true,  true,  true ,
  true,  false, true,  false,
  true,  false, false, true ,
  true,  true,  true,  true ,
  false, false, true,  true ];

  // console.log('res',countSheeps(array1))

  //****************************** Problem Solving ********************************************* */
  //Vowel Count
  function getCount(str) {
    let count =0
    let vowels = ["a","e","i","o","u"]
    for(let i =0 ; i< str.length ; i++){
     for(let j= 0 ; j< vowels.length ;j++){
      if(str[i] === vowels[j]){
        count ++
      }
     }
    }
    return count
  }
// console.log('res',getCount("Iamhungry"))


 //****************************** Problem Solving ********************************************* */
 function getAverage(marks){
  //TODO : calculate the downward rounded average of the marks array
  let count = 0
  for(let i =0 ; i< marks.length ; i++){
     count += marks[i]
  }
 
  let res = count/marks.length
   console.log(res)
  return Math.floor(res)
}

// console.log('res',getAverage([2,2,2,2]))

//****************************** Problem Solving ********************************************* */
let arrObj =[
  {key:1, value:10},
  {key:2, value:20},
  {key:3, value:30},
]

let formattedArray = arrObj.map((obj)=>{
  let newArrObj ={}
  newArrObj[obj.key] = obj.value
  return newArrObj
})
// console.log(formattedArray)

function removeChar(str){
  //You got this!
  let str1 = str.slice(1,-1)
  console.log(str1)
 };
//  console.log('res',removeChar('eloquent'))

let friends = [
  {
    name:'Anna',
    books:['bible','Harry Potter'],
    age:21
  },
  {
    name:'Bob',
    books:['War and peace','Romeo and Juiet'],
    age:26
  },
  {
    name:'Alice',
    books:['The lord of the Rings','The Shining'],
    age:18
  }
]

let allBooks = friends.reduce((acc,curr)=>{
 return [...acc,...curr.books]
},['Alphabet'])
// console.log(allBooks)
function hello() {
  var x =1
  if (test=true){ 
  var y=2
  let z=3
}
console.log(x,y,z)
}
  