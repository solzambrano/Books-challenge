let addAuthor=document.getElementById("addAuthor");
let formAuthor=document.getElementById("formAuthor");
let cancelAuthor=document.getElementById("cancelAuthor")
let cancel =document.getElementsByClassName("cancel")

document.addEventListener("DOMContentLoaded", (event) => {
  formAuthor.style.display='none';
  cancelAuthor.style.display='none';
});

addAuthor.addEventListener("click",()=>{
    formAuthor.style.display="block";
    cancelAuthor.style.display='block';
})

Array.from(cancel).forEach(element => {
    element.addEventListener("click",()=>{
        formAuthor.style.display='none';
        cancelAuthor.style.display='none';
    })
})