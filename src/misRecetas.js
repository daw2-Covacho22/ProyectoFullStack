//Lista de las recetas del usuario 
const misRecetasHtml = () => {
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

    tituloPaginaHtml('Lista de Mis Recetas')
    var miListaHtml =
        `
        <div class="container-fluid">
            <div class="container mb-5">
                <div class="row">
                    <div class="col-12 col-md-6 offset-md-3">
                        <div class="list-group">
                
        `

    fetch(`${urlApi}/recipes/me/list`,{
        method: 'GET',
        redirect: 'follow',
        headers:{
            Authorization: 'Bearer ' + token
        }
    })
    .then(dato=>dato.json())
    .then(recetas=>{
        console.log(recetas)
        recetas.forEach(mireceta => {
            miListaHtml+=
            `
                            <!-- RECETA -->
                            <a href="#" class="sprint2 list-group-item list-group-item-action" aria-current="true" data-index="${mireceta.id}">
                            <div class="d-flex w-100 justify-content-between" data-index="${mireceta.id}" >
                                <h5 class="mb-1" data-index="${mireceta.id}">${mireceta.title}</h5>
                                <small>${mireceta.persons} personas</small>
                            </div>    
                            <div class="d-flex w-100 justify-content-between">
                                <p class="mb-1" data-index="${mireceta.id}">Autor: ${mireceta.username}</p>
                                <div class="hover-zoom" data-id="${mireceta.id}">
                                    ${iconosHtml()}
                                </div>
                            </div>
                        </a>
                `
        });
        miListaHtml+=
            `
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            `
        mainUI.innerHTML=miListaHtml;
        })
    .catch((error)=>{console.log(error)})
}

//Listar Recetas Búsqueda y/o Paginación
//No sé donde llamarlo
const recetaBusqueda = () => {
    fetch(`${urlApi}/recipes?page=0&limit=10&search_field=description&search_content=durante&search_order=desc`,{
        method: 'GET',
        redirect: 'follow',
        headers:{
            Authorization: 'Bearer ' + token
        }
    })
    .then(response => response.text())
    .then(result => console.log(result))
    .catch(error => console.log('error', error));
}


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
    }
})