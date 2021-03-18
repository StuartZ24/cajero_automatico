const form = document.getElementById('form');
const password = document.getElementById('password');

var user = "Stuardo Rodríguez";
var saldo = 1500;
var deposito = [];
var retiro = [];
var tipo = [];
var cantipo = [];

form.addEventListener('submit', function(event){
    event.preventDefault();
    /*let users = Array(
        {
            usuario: "Stuardo Rodríguez", 
            clave: password.value,
        }

    );*/
    localStorage.setItem('user',JSON.stringify(user));
    localStorage.setItem('saldo',JSON.stringify(saldo));
    localStorage.setItem('deposito', JSON.stringify(deposito));
    localStorage.setItem('retiro', JSON.stringify(retiro));
    localStorage.setItem('tipo', JSON.stringify(tipo));
    localStorage.setItem('cantipo', JSON.stringify(cantipo));
    location.href = 'page.html';


});