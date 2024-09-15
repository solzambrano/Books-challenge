
let linkAuthor=document.getElementById("limkAuthor");
let selectContainer=document.getElementById("select-container");

linkAuthor.addEventListener('click',()=>{
    fetch('http://localhost:3000/books/link/author')
    .then(res=>res.text())
    .then(html=>{
        let tempDiv = document.createElement('div');
            tempDiv.innerHTML = html;
            let newSelect = tempDiv.firstElementChild;
            newSelect.lastElementChild.className='col-md-8 pe-5'
            // Agregar un botón de eliminación individual a cada nuevo select
                let deleteButton = document.createElement('button');
                deleteButton.textContent = '-';
                deleteButton.className = 'delete-select col-md-1 btn btn-primary';
                deleteButton.addEventListener('click', function() {
                    selectContainer.removeChild(this.parentElement);
                });
                newSelect.appendChild(deleteButton);
                selectContainer.appendChild(newSelect);  
    })
})