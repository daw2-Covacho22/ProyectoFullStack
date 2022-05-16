//Recibe los datos y los modifica
const recetaEditar = (id, username, titulo, descripcion, ingredientes, dificultad, personas, tiempo)=>{
    token = localStorage.getItem('token')
    receta = {
        "ingredients": ingredientes,
        "username": username,
        "title": titulo,
        "description": descripcion,
        "difficulty": dificultad,
        "persons": personas,
        "time": tiempo

    }
    //console.log(receta)
    fetch(`${urlApi}/recipes/${id}`, {
        method: "PUT",
        body: JSON.stringify(receta),
        headers: {
            "Content-type": "application/json; charset=UTF-8", 
            "Authorization": 'BEARER '+ token //Agregado
        }
    })
    .then(dato => dato.json())
    .then(receta => {
        console.log(receta)
        recetasListaHtml()

    })
    .catch(err => console.log(err));

}