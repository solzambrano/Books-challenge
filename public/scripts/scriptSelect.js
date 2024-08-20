let idSelect =document.getElementById('plus');
let selectContainer =document.getElementById("select-container")
console.log(selectContainer);

idSelect.addEventListener('click',()=>{
     fetch('http://localhost:3000/authors/select')
       .then(res => res.text()) // Asegúrate de convertir la respuesta a texto
        .then(html => {
            console.log('html',html)
            let tempDiv = document.createElement('div');
            tempDiv.innerHTML = html;
            selectContainer.appendChild(tempDiv.firstElementChild);
        }).catch(err=>console.log(err))

})