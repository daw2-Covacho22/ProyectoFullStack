
const menuHtml = () => {
    if(localStorage.user == '' || localStorage.user == null){
        var userlog = ()=>{
            return `<a class="nav-link active" style="color: black;" aria-current="page" href="#" data-function="loginHtml()">
                        Login
                    </a>`
        }
        var logperson = ()=>{
            return `<a class="nav-link active" style="color: black;" aria-current="page" href="#" data-function="loginHtml()">
                        Login
                    </a>`
        }
        
    }else{
        userlog = ()=>{
            
            return `<a class="nav-link active" style="color: black;" aria-current="page" href="#">
                        ${username}
                    </a>`
        }
        logperson = ()=>{
            
            return `<a class="nav-link active" style="color: black;" aria-current="page" href="#">
                        Hola ${username}
                    </a>
                    <a class="nav-link active" style="color: black;" aria-current="page" href="#" data-function="logout()">
                        cerrar sesion
                    </a>`
        }
    }
    
    menuUI.innerHTML = ` 
    <nav class="navbar navbar-light bg-light" aria-label="First navbar example">
                <div class="container-fluid">
                    <a class="navbar-brand" style="color: black;" href="./index.html">¡Paco!</a>
                    <a class="logperson">${logperson()}</a>
                    <button class="navbar-toggler collapsed" type="button" data-bs-toggle="collapse"
                        data-bs-target="#navbarsExample01" aria-controls="navbarsExample01" aria-expanded="false"
                        aria-label="Toggle navigation">
                        <span style="color: black" class="navbar-toggler-icon"></span>
                    </button>

                    <div class="navbar-collapse collapse" id="navbarsExample01">
                        <ul class="navbar-nav me-auto mb-2">
                            <li class="nav-item">
                                <a class="nav-link active" style="color: black;" aria-current="page"
                                    href="index.html">Home</a>
                            </li>
                            <li class="nav-item dropdown">
                                <a class="nav-link dropdown-toggle" style="color: black;" href="listarecetas()"
                                    id="dropdown01" data-bs-toggle="dropdown" aria-expanded="false">Recetas</a>
                                <ul class="dropdown-menu" aria-labelledby="dropdown01">
                                    <li><a class="dropdown-item" data-function="recetasListaHtml()">Ver recetas</a></li>
                                    <li><a class="dropdown-item" data-function="misRecetasHtml()">Ver mis recetas</a></li>
                                    <li><a class="dropdown-item" data-function="recetaCrearHtml()">Añadir receta</a></li>
                                </ul>
                            </li>
                            <li class="nav-item dropdown menuUsuarios">
                                <a class="nav-link dropdown-toggle" style="color: black;" data-bs-toggle="dropdown" aria-expanded="false">
                                    Usuarios
                                </a>
                                <ul class="dropdown-menu" aria-labelledby="dropdown01" id='lista_usuarios'>
                                    <li><a class="dropdown-item"></a></li>
                                </ul>
                            </li>
                            <li class="nav-item dropdown">
                                <a class="nav-link dropdown-toggle" style="color: black;" href="#" id="dropdown01"
                                    data-bs-toggle="dropdown" aria-expanded="false">Ficheros</a>
                                <ul class="dropdown-menu" aria-labelledby="dropdown01">
                                </ul>
                            </li>
                            <li class="nav-item">
                                ${userlog()}
                            </li>
                        </ul>
                        <nav class="navbar navbar-light " style="background-color:#f8f9fa">
                            <form class="d-flex " style="width: 100%;">
                                <input class="form-control me-2" type="search " placeholder="Search "
                                    aria-label="Search " style="width: 80%;">
                                <button class="btn btn-outline-success " type="submit">Search</button>
                            </form>
                        </nav>
                    </div>
                </div>
            </nav>
  ` 

    
  menuUI.addEventListener('click', (element)=>{
    //console.log(localStorage.user)
    if(element.target.dataset.function == 'recetasListaHtml()'){
        recetasListaHtml();
    } else if(element.target.dataset.function == 'loginHtml()'){
        loginHtml();
    }else if(element.target.dataset.function == 'recetaCrearHtml()'){
        if(username == '' || username == null){
            alert('No tienes acceso')
        }else{
            if(username == 'admin'){
                recetaCrearHtml();
            }
        }
    }else if(element.target.dataset.function == 'logout()'){
        loginHtml();
        logout();
    }else if(element.target.dataset.function == 'misRecetasHtml()'){
        if(username == '' || username == null){
            alert('No tienes acceso')
        }else{
            misRecetasHtml();
        }
        
    }
})

}

