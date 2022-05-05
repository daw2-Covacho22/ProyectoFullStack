const homeHtml = ()=>{
    cargando()
    tituloPaginaHtml('Las recetas de <br>Paco Cinero')
    mainUI.innerHTML = `
    <div class="container-fluid">
        <div class="container">
            <div class="col-12 col-md-6 offset-md-3">
                <img class="img-fluid" src="https://cdn.aarp.net/content/dam/aarp/health/caregiving/2018/03/1140-nutrients-food-loved-ones-caregiving-esp.jpg" alt="">
                <div class="d-grid gap-2">
                    <button data-function="recetasListaHtml()" class="mt-5 btn btn-primary btn-lg" type="button">Lista de recetasListaHtml</button>
                </div>
            </div>
        </div>
    </div>
    `
    mainUI.addEventListener('click', (element)=>{
        if(element.target.dataset.function == 'recetasListaHtml()'){
            recetasListaHtml();
        }
        
    })
}

const cargando = ()=> {return `<div class="spiner-border d-flex justify-content-center" roles="status">
<span class="sr-only">Cargando...</span>
</div>`}