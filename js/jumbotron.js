const userjumbo = document.getElementById('jumbotron'); //Aqui mandamos a buscar el div de jumbotron de bootstrap
const btnclose = document.getElementById('close');      //Aqui mandamos a buscar el boton de cerrar

let username = JSON.parse(localStorage.getItem('user')); //Obtenemos el nombre de usuario y lo guardamos en una variable
if(username != null){   //Si el nombre de usuario no viene vacio
    const h5 = document.createElement("h5"); //Creamos un elemento html de tipo h5
    var t = document.createTextNode("Usuario: "+ username); //Creamos el texto que va dentro del h5
    h5.appendChild(t); //y lo agregamos en el h5 creado
    userjumbo.appendChild(h5);//luego lo agregamos al div donde esta el jumbortron
} else {//Pero si el nombre de usuario viene vacio
    location.href = 'index.html';//lo redirigermos al login para que se pueda logearse
}

btnclose.addEventListener("click", function(evento){ // Aquí todo el código que se ejecuta cuando se da click al botón de cerrar
    localStorage.clear('user');         //Eliminamos el nombre del usuario del LocalStorage
    localStorage.clear('saldo');        //Eliminamos el saldo en el LocalStorage
    localStorage.clear('deposito');     //Eliminamos el arreglo deposito en el LocalStorage
    localStorage.clear('retiro');       //Eliminamos el arreglo retiro en el LocalStorage
    localStorage.clear('tipo');         //Eliminamos el arreglo tipo de pago en el LocalStorage
    localStorage.clear('cantipo');      //Eliminamos el arreglo cantidad de tipo en el LocalStorage
    location.href = 'index.html';       //Nos redirigira a la pagina de login
});