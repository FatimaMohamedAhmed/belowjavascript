/*
let student ={
    name: "kapila",
    age: 35,
    id: "it12",
     number: 9191,
     address: "yaqshid",
     sayHi:() =>{
         console.log("hi from inside")
     }
}
console.log(student.name)
*/
// let fruits = ["Aplle", "Mango", "Banana"]
// fruits.forEach(function(item){
// console.log(item)
// })
// let iskudar = fruits.join(" ")
// fruits.push("lemon")
// console.log(fruits)
// // remove last element
// fruits.pop()
// //remove first element
// fruits.shift()
// //add first element
// fruits.unshift("km")
// fruits.sort()
// console.log(fruits)
// fruits.reverse()
// // wax ku dar ama wax kajar
// fruits.splice(1, 0, "fm")

// console.log(iskudar)
// console.log(fruits)
// let ages=[14, 19, 23, 36]
// // filter waxa wayeh sida loop cml
// let newAges = ages.filter(function(result){
//     return result >14
// })
// console.log(newAges)

// let ages=[14, 19, 23, 36]
// // map waxa wyeh same loop
// ages.map((age) =>{
// console.log(ages)
// })
// const Element = document.getElementById("title")
// console.log(Element)
// const text = document.getElementsByTagName("p") [0]
// console.log(text)
// const className = document.getElementsByClassName("header") [0]
// console.log(className)
// const universal = document.querySelector("#title")
// console.log(Element)

// const element = document.querySelector("#title")

// element.innerHTML= "it is written by javascript"
// element.style.color ="red"
// element.style.backgroundColor = "blue"

// const element = document.querySelector(".btn")
// element.style.backgroundColor="yellow"
// element.style.color ="white"
// const text = document.querySelector("p")
// text.style.color = blue
// const title = document.querySelector(".title")
// const btn = document.querySelector(".btn")
// const btn2 = document.querySelector(".btn2")
// const bdy = document.querySelector(".bdy")
// btn.addEventListener("click",function(){
// title.style.color = "red"
// btn.style.color = "green"
// bdy.style. backgroundColor= "yellow"
// })
// btn2.addEventListener("click", resetColor)
// function resetColor(){
//     title.style.color = "black"
// }
// // btn.style.backgroundColor = "blue"
// btn2.style.backgroundColor = "yellow"
// title.style.color = "green"
// title.style.fontSize =  "30px"
// bdy.style.backgroundColor = "blue"
// const light = document.querySelector(".light-box")
// const button = document.querySelector(".btn")
// const btn2 = document.querySelector(".btn2")
// button.addEventListener("click", function(){
//     button.style.color = "red"
//     btn2.style.color = "black"
//     light.style.backgroundColor = "yellow"
  
// })
// btn2.addEventListener("click",function(){
//     light.style.backgroundColor = "transparent"
//     btn2.style.color = "red"
//     button.style.color = "black"
// })
// light.addEventListener("click", function(){
//     light.style.backgroundColor = "blue"
// })

// const imgone = document.querySelector(".imgone")
// const imgtwo = document.querySelector(".imgtwo")
// btnon.addEventListener("click",function(){
//    imgone.style.display= "none" 
//    imgtwo.style.display="block"
//    btnon.style.color="red"
//    btnoff.style.color="black"
// })
// btnoff.addEventListener("click",function(){
//     imgtwo.style.display= "none" 
//     imgone.style.display="block"/
//     btnon.style.color="red"
//     btnoff.style.color="black"
//  })
// const hdr = document.querySelector(".hdr")
// hdr.style.backgroundColor ="blue"
// hdr.style.color = "white"
// hdr.style.fontSize = "2em";
// const icon = document.querySelector("#icon")
// icon.style.fontSize = "2em"
// const menu = document.querySelector(".menu ul li")
// menu.addEventListener("click", function(){
//   icon.style.display = "block"
//    menu.style.display = "none"
   
// })
// icon.addEventListener("click", function(){
//     icon.style.display = "none"
//     menu.style.display = "block"
// })

// hdr.addEventListener("click",function(){
    
//     hdr.style.display = "none"
//      icon.style.display = "block"
    
// })
// hdr.addEventListener("click", function(){
//     hdr.style.display = "block"
//     icon.style.display = "none"
// })
 const iconbutton = document.querySelector("#iconbutton")
 const links = document.querySelector("#links")
 const icon = document.querySelector("#icon")
 iconbutton.addEventListener("click", function(){
     links.style.display = "flex"
     icon.style.display = "block"
     iconbutton.style.display = "none"
 })
 icon.addEventListener("click", function(){
     links.style.display = "none"
     icon.style.display = "none"
     iconbutton.style.display = "block"
 })
    