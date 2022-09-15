let btn1 = document.getElementById("btn")
const colors = ["red", "blue" ,"green","orange","grey","lightblue","white"]
let color = document.querySelector(".color")

function change(){
    let randamnum = Math.floor(Math.random() * 7) -1
    console.log(randamnum)
    document.body.style.backgroundColor = colors[randamnum]


}