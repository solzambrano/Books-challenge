let addAuthor=document.getElementById("addAuthor");
let formAuthor=document.getElementById("formAuthor");

//input de autores
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