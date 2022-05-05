//Borrar recetas
const recetaBorrar = (id)=>{
    // Peticion para borrar
    const url = `http://localhost:8000/recipes/${id}`;
    fetch(url, {
        method: "DELETE",
        body: JSON.stringify(receta),
        headers: {
            "Content-type": "application/json; charset=UTF-8", 
            "Authorization": 'BEARER '+ token //Agregado
        }
    })
        .then(response => response.json())
        .then(json => {
           console.log('elemento borrado' , json);
        })
        .catch(err => console.log(err));
}



