const login = () => {
    //console.log(user)
    token = localStorage.getItem('token');
    fetch(`${urlApi}/users`, {
        method: 'GET',
        Authorization: token,
        redirect: 'follow'
    })
        .then(response => response.text())
        .then(result => console.log(result))
        .catch(error => console.log('error', error));

    user = {
        "username": "admin",
        "email": "admin@admin.com",
        "password": "$2b$10$oN1K03f5kjqa23HGei5vZ.1OjB5frIw7vw8F0KuvT1LUobUMVLLIG"
    };
    
    
    var contrasenya = document.getElementById('password').value
    var usuario = document.getElementById('usuario').value
    if (contrasenya != user.password || user.username != usuario) {
        //alert('password o usuario incorrecto')
        
        document.querySelector('#user').innerHTML = `<div class="alert alert-danger" role="alert">
            password o usuario incorrecto
        </div>`
    } else {   
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

                
                user = JSON.parse(localStorage.getItem('user')).username;
                var log = 'Hola ' + user
                document.querySelector('#user').innerHTML = log;
                document.querySelector('#token').innerHTML = token;
                
    


            })
            .catch(err => console.log(err));
    }

}