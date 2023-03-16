// const allList = document.querySelectorAll('.list li')
// const content = document.getElementById('content')
// const btn = document.getElementById('addtoCart')
// let totalPrice =0;

// allList.forEach(list=>(
//    list.addEventListener('click',(eo)=>{
//     totalPrice += parseInt(list.getAttribute('price')) 
    
//     content.innerHTML += list.textContent + ' ';
//     if(content.innerHTML != ''){
//         btn.style.display = 'block'
//     }
//    })
// ))

// btn.addEventListener('click',(eo)=>{
//     console.log(parseInt(totalPrice))
// })

const input =document.getElementById('productInput')
// console.log(input)
const btn = document.getElementById('addProduct')
// console.log(btn)
const content = document.getElementById('content')
// console.log(content)
const data =[
    {id:1,name:"Product 1",desc:"blablabla"},
    {id:2,name:"Product 2",desc:"blablabla"},
    {id:3,name:"Product 3",desc:"blablabla"},
    {id:4,name:"Product 4",desc:"blablabla"},
]


//display data
function displayData(items){
content.innerHTML = " "
items.forEach(item => {
content.innerHTML += `<div onclick='deleteItem(${item.id})'> ${item.name} </div>`
});
}

//display it after window load
window.onload = function(){
displayData(data)
}
// add product or item
btn.addEventListener('click', addProduct)

function addProduct(){
 if(input.value == "") alert('please add product')
 let addedId = data.length ? data[data.length -1].id : 0
 console.log('id',data[data.length-1].id)
 data.push({id: ++addedId,name:input.value})
 const addedItem = data[data.length -1]


//  console.log(data)
 console.log('addedItem1',addedItem)
//  console.log('addedItem2',data.push({id: ++addedId,name:input.value}))
content.innerHTML += `<div onclick='deleteItem(${addedItem.id})'> ${addedItem.name} </div>`
input.value = ""
 
}
 function deleteItem(id){
console.log(id)
// const test = data.filter((item,index)=> index !== id)
// console.log('test',test)
const indx = data.map(item => item.id).indexOf(id)
console.log(indx)
// displayData(test)
if(indx !== -1) data.splice(indx,1)
displayData(data)
}
