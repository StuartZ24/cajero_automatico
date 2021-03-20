let username = JSON.parse(localStorage.getItem('user'));//Obtenemos el nombre de usuario y lo guardamos en una variable

if(username == null){                   //Si el nombre de usuario no viene vacio
    location.href = 'index.html';       //lo redirigermos al login para que se pueda logearse
}