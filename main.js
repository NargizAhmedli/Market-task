let boxes=document.querySelectorAll(".box");
let basketbox=document.querySelector(".basket-box");
let itemdrop;
boxes.forEach(box=>{
    box.ondragstart=function(){
        itemdrop=this;
    }
    basketbox.ondragover=(el)=>{
        el.preventDefault();
    }
    basketbox.ondrop=()=>{
        basketbox.appendChild(itemdrop)
    }
})

let right=document.getElementById('right');
let add=document.getElementById('add');
add.onclick=function(){
    let basketbox=document.createElement('div');
    basketbox.classList.add('basket-box');
    right.appendChild(basketbox);
}
