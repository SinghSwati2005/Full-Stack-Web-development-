let notesContainer =document.querySelector(".notes-container");
let  createBtn = document.querySelector(".btn");
let notes= document.querySelectorAll(".input-box");

createBtn.addEventListener("click", ()=>{
    let inputBox = document.createElement("p");
    let i = document.createElement("i");
    inputBox.className="input-box";
    inputBox.setAttribute("Contenteditable", "true");
    i="fa-solid fa-pen-to-square";
    notesContainer.appendChild(inputBox).appendChild(i);
})

notesContainer.addEventListener("click", function(e){
    if(e.target.tagName==="i"){
        e.target.parentElement.remove();
    }
})