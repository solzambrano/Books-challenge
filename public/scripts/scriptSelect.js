let selectContainer = document.getElementById("select-container");
let addAuthor = document.getElementById('add');
addAuthor.addEventListener('click',()=>{
     fetch('http://localhost:3000/authors/select')
       .then(res => res.text()) // Asegúrate de convertir la respuesta a texto
        .then(html => {
            let tempDiv = document.createElement('div');
            tempDiv.innerHTML = html;
              let newSelect = tempDiv.firstElementChild;
                
                // Agregar un botón de eliminación individual a cada nuevo select
                let deleteButton = document.createElement('button');
                deleteButton.textContent = 'X';
                deleteButton.className = 'delete-select col-md-1 btn btn-primary';
                deleteButton.addEventListener('click', function() {
                    selectContainer.removeChild(this.parentElement);
                });
                
                newSelect.appendChild(deleteButton);
                selectContainer.appendChild(newSelect);  
        })
  }).catch(err=>console.log(err))
