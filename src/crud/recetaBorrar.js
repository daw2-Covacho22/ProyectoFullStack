//Borrar recetas
const recetaBorrar = (id)=>{
    // Peticion para borrar
    fetch(`${urlApi}/recipes/${id}`, {
        method: "DELETE",
        headers: {
            "Content-type": "application/json; charset=UTF-8", 
            Authorization: 'Bearer ' + token
        }
    })
        .then(response => response.json())
        .then(json => {
           alert('Estas borrando la receta' + id);
        })
        .catch(err => console.log(err));
}



