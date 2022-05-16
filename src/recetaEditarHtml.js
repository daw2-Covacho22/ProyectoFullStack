 //HTML de editar
 //Recibe el id
const recetaEditarHtml = (id)=>{
    //console.log(id)


    /*var opciones = (dificultad)=>{
        if(dificultad==easy){
            return `
            <select class="form-control" id="exampleFormControlSelect1">
                <option selected>${receta.difficulty}</option>
                <option>medium</option>
                <option>hard</option>
            </select>`
        }else if(dificultad==medium){
            return `<select class="form-control" id="exampleFormControlSelect1">
                <option>easy</option>
                <option selected>${receta.difficulty}</option>
                <option>hard</option>
            </select>`
        }else if(dificultad==hard){
            return `<select class="form-control" id="exampleFormControlSelect1">
                <option>easy</option>
                <option>medium</option>
                <option selected>${receta.difficulty}</option>
            </select> `
        }
    }*/
    mainUI.innerHTML = 'cargando...'
    fetch(`${urlApi}/recipes/${id}`, {
        method: "GET"
    })
    .then(dato=>dato.json())
    .then(receta=>{
        //console.log(id)
        var dificultad = `${receta.dificulty}`
        tituloPaginaHtml(`<em class="fs-5">${receta.title}</em>`)
        mainUI.innerHTML = 
        `
            <div class="container mb-5">
                <div class="row">
                    <div class="col-12">
                        <div class="card col-12 col-md-6 offset-md-3">
                            <img class="card-img" src="https://img2.rtve.es/v/6444605?w=1600&preview=1647367416435.jpg" alt="">
                            <div class="card-body" data-id="${id}">
                                <div>
                                    <lable for="text">Nombre de usuario</lable>&nbsp &nbsp<i class="me-2 text-success fa-solid fa fa-pencil"></i>
                                    <input type="text" class="form-control" id="e-username" value="${receta.username}"></input>
                                </div>
                                <div>   
                                    <lable for="text">Título</lable>&nbsp &nbsp<i class="me-2 text-success fa-solid fa fa-pencil"></i>
                                    <input type="text" class="form-control" id="e-title" value="${receta.title}">
                                </div>
                                <div>   
                                    <lable for="text">Descripción</lable>&nbsp &nbsp<i class="me-2 text-success fa-solid fa fa-pencil"></i>
                                    <textarea type="text" class="form-control" id="e-description">${receta.description}</textarea>
                                </div>
                                <div>   
                                    <lable for="text">Ingredientes</lable>&nbsp &nbsp<i class="me-2 text-success fa-solid fa fa-pencil"></i>
                                    <input type="text" class="form-control" id="e-ingredients" value="${receta.ingredients}">
                                </div>
                                <div>   
                                    <lable for="text">Dificultad</lable>&nbsp &nbsp<i class="me-2 text-success fa-solid fa fa-pencil"></i>
                                    <select class="form-control" id="exampleFormControlSelect1" >
                                        <option id="e-dificulty">${receta.difficulty}</option>
                                        <option>easy</option>
                                        <option>medium</option>
                                        <option>hard</option>
                                        
                                    </select>
                                    
                                </div>
                                <div>   
                                    <lable for="text">Personas</lable>&nbsp &nbsp<i class="me-2 text-success fa-solid fa fa-pencil"></i>
                                    <input type="text" class="form-control" id="e-persons" value="${receta.persons}">
                                </div>
                                <div>   
                                    <lable for="text">Tiempo</lable>&nbsp &nbsp<i class="me-2 text-success fa-solid fa fa-pencil"></i>
                                    <input type="text" class="form-control" id="e-time" value="${receta.time}">
                                </div>
                            </div>
                            <button class="btn btn-primary m-2 btn-modificar" type="submit" id="btn-modificar" data-function="update()">Actualizar</button>
                        </div>
                    </div>
                </div>
            </div>`
            //console.log("id de la receta " + receta.id)
    })

}


 //Click en receta DE LISTA
 mainUI.addEventListener('click', (elemento)=>{
     //Si clickamos en modificar
    //Recogemos todos los datos y se los pasamos a la funcion editar
    if(elemento.target.dataset.function=="update()"){
        var id = document.querySelector('.card-body').dataset.id
        //console.log(id + " lo que le paso ")
        var username = document.querySelector('#e-username').value
        var titulo = document.querySelector('#e-title').value
        var descripcion = document.querySelector('#e-description').value
        var ingredients = document.querySelector('#e-ingredients').value
        //console.log(ingredients)
        ingredients = ingredients.split(",")
        //console.log(ingredientes)
        var dificultad = document.querySelector('#e-dificulty').value
        var personas = document.querySelector('#e-persons').value
        var tiempo = document.querySelector('#e-time').value
        recetaEditar(id, username, titulo, descripcion, ingredients, dificultad, personas, tiempo);
        alert("modificando")
    }
})
