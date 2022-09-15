let btn1 = document.getElementById("btn")
const colors = ["red", "blue" ,"green","orange","grey","lightblue","white" ,"purple"]
let color = document.querySelector(".color")
let name1 = document.getElementById("name")

function change(){
    let randamnum = Math.floor(Math.random() * colors.length) 
    document.body.style.backgroundColor = colors[randamnum]
    name1.innerHTML = colors[randamnum]

}
