let addAuthor=document.getElementById("addAuthor");
let formAuthor=document.getElementById("formAuthor");
let cancelAuthor=document.getElementById("cancelAuthor");
let cancel =document.getElementsByClassName("cancel");
let selectAuthor= document.getElementById('selectAuthor')
let link=document.getElementById('linkAuthor');


document.addEventListener("DOMContentLoaded", (event) => {
  selectAuthor.style.display='none'
  formAuthor.style.display='none';
  cancelAuthor.style.display='none';
});
link.addEventListener("click",(e)=>{
    if(e.target.innerText=='link author'){
        e.target.innerText="unlink author"
        selectAuthor.style.display='flex'
    }else{
        e.target.innerText="link author"
        selectAuthor.style.display='none'
    }
})
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