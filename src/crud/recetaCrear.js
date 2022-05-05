const recetaCrear = (username, titulo, descripcion, ingredientes, dificultad, personas, tiempo)=>{
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
    fetch(`${urlApi}/recipes`, {
        method: "POST",
        headers: {
            "Content-type": "application/json; charset=UTF-8",
            "Authorization": 'BEARER '+token //Agregado
        },
        body: JSON.stringify(receta)
    })
    .then(response => response.json())
    .then(json => {
        alert('receta guardada ' + json.id);
       recetaCardHtml(json.id);
    })
    .catch(err =>console.log(err));
}