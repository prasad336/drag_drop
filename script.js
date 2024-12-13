let left=document.querySelector("#left");
let right=document.querySelector("#right");
let list=document.getElementsByClassName("list");

let selected=null; 
for (let omkar of list) {
    omkar.addEventListener("dragstart",function(e){
        selected=e.target;
    })
 }
 right.addEventListener("dragover",function(e){
    e.preventDefault();
 })
 right.addEventListener("drop",function(e){
    if(selected){
        right.appendChild(selected);
        selected=null;
    }
 })

 left.addEventListener("dragover",function(e){
    e.preventDefault();
 })
 left.addEventListener("drop",function(e){
    if(selected){
        left.appendChild(selected);
        selected=null;
    }
 })
 
