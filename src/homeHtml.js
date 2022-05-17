//Funcion que muestra el inicio de la pantalla
const homeHtml = ()=>{
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
    //Si hacemos click en recetasListaHtml llama a la funcion
    mainUI.addEventListener('click', (element)=>{
        if(element.target.dataset.function == 'recetasListaHtml()'){
            recetasListaHtml();
        }
        
    })
}


//Cuando hago f5 e inicio de nuevo la pagina que no me aparezca el usuario
//aparece como si la sesión estuviese cerrada
if(username == '' || username == null){
    localStorage.clear()
}