let link=document.getElementById('linkAuthor');
let authorSelected=document.querySelector('select')
let selectAuthor=document.getElementById('selectAuthor')

document.addEventListener("DOMContentLoaded", (event) => {
  selectAuthor.style.display='none'
});

//al oprimir el boton add author, aparece el select de autores
link.addEventListener("click",(e)=>{
    if(e.target.innerText=='Add author'){
        e.target.innerText="Quit author"
        selectAuthor.style.display='flex'
    }else{
        e.target.innerText="Add author" 
        selectAuthor.style.display='none'
        authorSelected.value='Selected author'
    }
})