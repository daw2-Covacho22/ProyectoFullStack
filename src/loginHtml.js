const loginHtml = () => {
    tituloPaginaHtml('Login')
    mainUI.innerHTML =
        `<div class="container mb-5 general">
                <div class="row">
                    <div class="col-12 col-md-6 offset-md-3">
                        <div class="card">
                            <div class="card-body">
                                <div id="user"></div>
                                <input type="text" class="form-control m-2" id="usuario" value="admin" placeholder="admin">
                                <input type="password" class="form-control m-2" id="password" placeholder="password" value="$2b$10$oN1K03f5kjqa23HGei5vZ.1OjB5frIw7vw8F0KuvT1LUobUMVLLIG">
                                <button class="btn btn-primary m-2" type="submit" id="btn-login">Login</button>
                                <button class="btn btn-primary m-2" type="button" id="btn-logout">Logout</button>
                                <div id="token">Aquí el token</div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>`
}




const login = () => {
    useradd = document.getElementById('usuario').value 
    passadd =  document.getElementById('password').value 
    //console.log(user)
    token = localStorage.getItem('token');
    user = {
        "username": useradd,
        "email": "admin@admin.com",
        "password": passadd
    };
    // Peticion para login
    fetch(`${urlApi}/auth/login`, {
            method: "POST",
            body: JSON.stringify(user),
            headers: {
                "Content-type": "application/json; charset=UTF-8",
            }
        })
        .then(response => response.json())
        .then(json => {
            token = json.token;
            refreshToken = json.refreshToken;

            //almacenamos token en nuestro ordenador
            localStorage.setItem('user', JSON.stringify(user));
            localStorage.setItem('token', token);


            username = JSON.parse(localStorage.getItem('user')).username;
            var log = 'Hola ' + username
            document.querySelector('#user').innerHTML = log;
            document.querySelector('#token').innerHTML = token;
            menuHtml()
            if (username == 'admin') {
                userslista()
            }
        })
        .catch(err => {
            console.log(err) 
            document.querySelector('#user').innerHTML = `<div class="alert alert-danger" role="alert">
                password o usuario incorrecto
            </div>`
        });

}



const logout = () => {

    localStorage.clear()
    document.querySelector('#token').innerHTML = 'Sesión cerrada'
    menuHtml()

    /*console.log(user)
    user = {
		"username": user,
		"refreshToken": refreshToken
    };
    console.log(user)
    url = `http://localhost:8000/auth/logout`;
    fetch(url, {
        method: "POST",
        body: JSON.stringify(user)
    })
    .then(response => response.json())
    .then(json => {
        console.log(json)
        //pero así ya la cierra
        console.log(localStorage)
        document.querySelector('#token').innerHTML = 'Sesión cerrada'
        console.log(localStorage)
    })
    .catch(err => console.log(err));*/
}

const userslista = () => {
    //dropdown-toggle

    fetch(`${urlApi}/users`, {
            method: 'GET',
            redirect: 'follow',
            headers: {
                Authorization: 'Bearer ' + token
            }
        })
        .then(response => response.json())
        .then(result => {
            result.forEach(usuarios => {
                console.log(usuarios.username)
                var usuariosLista = document.getElementById('lista_usuarios')
                console.log(usuariosLista)
                usuariosLista.innerHTML += `<li><a class="dropdown-item">${usuarios.username}</a></li>`


            })

        })
        .catch(error => console.log('error', error));
    menuHtml()
}


//Eventos
mainUI.addEventListener('click', (elemento) => {
    if (elemento.target.id == 'btn-login') {
        login()
    }
    if (elemento.target.id == 'btn-logout') {
        logout()
    }
});