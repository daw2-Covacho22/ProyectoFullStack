//pinta una receta a partir de un id
const recetaCardHtml = (id)=>{
    //console.log(id);
    let migaUrl = [
        {
            nombre:'home',
            function: 'homeHtml()'
        },
        {
            nombre:'recetas',
            funcion:'recetasListaHtml()'
        }
    ]
    mainUI.innerHTML = 'cargando...'
    fetch(`${urlApi}/recipes/${id}`)
    .then(dato=>dato.json())
    .then(receta=>{
        migaUrl.push({nombre:receta.title,funcion:''})
        //console.log("migaUrl: " ,migaUrl)
        tituloPaginaHtml(`<em class="fs-5">${receta.title}</em>`)
        mainUI.innerHTML = 
        `
        <div class="container-fluid">
            <div class="container mb-5">
                <div class="row">
                    <div class="col-12">
                        <div class=" card col-12 col-md-6 offset-md-3">
                            <img class="card-img" src="https://img2.rtve.es/v/6444605?w=1600&preview=1647367416435.jpg"
                            alt="">
                            <div class="card-body" data-id="${receta.id}">
                                <div class="d-flex justify-content-between">
                                    <h5 class="card-title">${receta.title}</h5>
                                    <i data-funcion="editar" data-id="${receta.id}"></i>
                                </div>
                                <p class="card-text">${receta.description}</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>`
    })
}


//Click en receta DE LISTA
mainUI.addEventListener('click', (elemento)=>{
    elemento.preventDefault()
    if(elemento.target.dataset.funcion=='editar'){
        let id=elemento.target.dataset.id;
        recetaEditar(id)
    }else if(elemento.target.dataset.funcion=='eliminar'){
        let id=elemento.target.dataset.id;
        recetaBorrar(id)
    }
})