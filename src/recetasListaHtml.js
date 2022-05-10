
//consulta con la API
const recetasListaHtml = ()=>{
    
    if(username == '' || username == null){
        var rol
    }else{
        if(username == 'admin'){
            var rol = username
        }
    }
    if(rol=='admin'){
        var iconosHtml = ()=>{
            return `
            <i class="me-2 text-success fa-solid fa fa-pencil" data-function="editar()"></i>
            <i class="me-2 text-danger fa-solid fa fa-trash" data-function="borrar()"></i>
            `
        }
    }else{
        iconosHtml = ()=>''
    }



    tituloPaginaHtml('Lista de Recetas')
    var listaHtml =
    `
    <div class="container-fluid">
        <div class="container mb-5">
            <div class="row">
                <div class="col-12 col-md-6 offset-md-3">
                    <div class="list-group">
                    <div class="d-flex w-100 justify-content-between" style="background-color:#f8f9fa">
                            <form class="d-flex " style="width: 100%;">
                            <select id="opciones" class="form-select option" aria-label="Default select example">
                                <option selected>Selecciona la opción de busqueda</option>
                                <option value="title">Titulo</option>
                                <option value="username">Autor</option>
                                <option value="persons">Personas</option>
                                <option value="time">Tiempo</option>
                            </select>
                                <input class="form-control me-2" id="valor" type="search " placeholder="Search"
                                    aria-label="Search">
                                <button class="btn btn-outline-success buscar" type="submit">Search</button>
                            </form>
                    </div>
            
    `

    
    fetch(`${urlApi}/recipes`)
    .then(dato=>dato.json())
    .then(recetas=>{
        recetas.forEach(receta => {
            listaHtml+= 
            `
                        <!-- RECETA -->
                        <a href="#" class="sprint2 list-group-item list-group-item-action" aria-current="true" data-index="${receta.id}">
                        <div class="d-flex w-100 justify-content-between" data-index="${receta.id}" >
                            <h5 class="mb-1" data-index="${receta.id}">${receta.title}</h5>
                            <small>${receta.persons} personas</small>
                        </div>    
                        <div class="d-flex w-100 justify-content-between">
                            <p class="mb-1" data-index="${receta.id}">Autor: ${receta.username}</p>
                            <div class="hover-zoom" data-id="${receta.id}">
                                ${iconosHtml()}
                            </div>
                        </div>
                    </a>
            `
        });
        listaHtml+=
        `
                        </div>
                    </div>
                </div>
            </div>
        </div>
        `
        return listaHtml;
        
    })
    .then((listaHtml)=>{
        mainUI.innerHTML=listaHtml;
    })
    .catch(()=>{
        console.log('error al cargar');
    })
}

//Listener

    //Click en receta DE LISTA o modificar o eliminar
    mainUI.addEventListener('click', (elemento)=>{
        if(elemento.target.dataset.index){
            let id= elemento.target.dataset.index;
            recetaCardHtml(id);
        }else if(elemento.target.dataset.function){
            let id=elemento.target.parentNode.dataset.id;
            if(elemento.target.dataset.function=='borrar()'){
                recetaBorrar(id)
            }else if(elemento.target.dataset.function=='editar()'){
                recetaEditarHtml(id)
            }
        }else if(elemento.target.type == 'submit'){
            console.log('enviar')
            var opcion = document.querySelector('#opciones').value
            var valor = document.querySelector('#valor').value
            console.log(opcion)
            console.log(valor)
            busquedaRecetas(opcion, valor)

        }
    })