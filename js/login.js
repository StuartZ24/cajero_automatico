const form = document.getElementById('form');
const password = document.getElementById('password');

var user = "Stuardo Rodríguez";
var saldo = 1500;
var deposito = [];
var retiro = [];
var tipo = [];
var cantipo = [];

var constraints = {
    PIN: {
        // Is PIN required?
        presence: {
            message: "es requerido"
        },
        // PIN has to be an integer >= 0
        numericality: {
            onlyInteger: true,
            greaterThanOrEqualTo: 0,
            notInteger: "debe ser numerico",
            notGreaterThanOrEqualTo: "debe ser mayor o igual que cero",        
        },      
        // It must be 4 characters long
        length: {
            is: 4,
            message: "debe de ser de longitud 4"
        },
    },
}

form.addEventListener("submit", function(event) {
    event.preventDefault();
    let errores = Object.values(validate({PIN: password.value}, constraints) || {});

    var string = "";

    if (errores.length > 0) {
        for (let k = 0; k < errores.length; k++) {
            string += errores[k];
        }

        var nameArr = string.split(',');
        console.log(nameArr);  
        
        for (let i = 0; i < nameArr.length; i++) {
            swal("Error!", nameArr[i]+"!", "error");
        }        
    }else{
        localStorage.setItem('user',JSON.stringify(user));
        localStorage.setItem('saldo',JSON.stringify(saldo));
        localStorage.setItem('deposito', JSON.stringify(deposito));
        localStorage.setItem('retiro', JSON.stringify(retiro));
        localStorage.setItem('tipo', JSON.stringify(tipo));
        localStorage.setItem('cantipo', JSON.stringify(cantipo));
        location.href = 'page.html';
    }
});