
const UpdateColor=document.getElementById("changecolor")
const Add=document.getElementById("addchild")
const Remove=document.getElementById("removechild")

function ChangeColor(){
    document.getElementById("reactangle").style.backgroundColor=="red"?document.getElementById("reactangle").style.backgroundColor="aqua":document.getElementById("reactangle").style.backgroundColor="red"
    
}

function AddChild(){
 const rect=document.getElementById("reactangle")
 const square=document.getElementById("square")
 square.style.width="300px"
 square.style.height="300px"
 square.style.border="1px solid black"
 square.style.display="flex"
 square.style.position="relative"
 square.style.margin="auto"
 square.style.backgroundColor="pink"
 rect.appendChild(square)
//document.getElementById(addchild).appendChild(rect)
}

function RemoveChild(){
    console.log("removed")
    document.getElementById("reactangle").innerHTML=""
    
}