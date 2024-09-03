let addAuthor=document.getElementById("addAuthor");
let formAuthor=document.getElementById("formAuthor");
let selectAuthor= document.getElementById('selectAuthor')
let link=document.getElementById('linkAuthor');
let authorSelected=document.querySelector('select')


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
const addInput=(input)=>{
            input.lastElementChild.className= "col-md-8 pe-5"
            let deleteButton = document.createElement('button');
                deleteButton.textContent = '-';     
                deleteButton.className = 'delete-input col-md-1 btn btn-primary';
                deleteButton.type = 'button'
                deleteButton.addEventListener('click', function() {
                    formAuthor.removeChild(this.parentElement);
                });
                input.appendChild(deleteButton);
                formAuthor.appendChild(input)
}
/**esta parte es la del input */
addAuthor.addEventListener('click',(e)=>{
fetch('http://localhost:3000/books/input')
       .then(res => res.text()) // Asegúrate de convertir la respuesta a texto
        .then(html => {
            let tempDiv = document.createElement('div');
            tempDiv.innerHTML = html;
            let newInput = tempDiv.firstElementChild;
            addInput(newInput)
        })
})