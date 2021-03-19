$(function() {
	$( "#PINform" ).draggable();
});

$( "#PINcode" ).html(
	"<form action='' method='' name='PINform' id='PINform' autocomplete='off' draggable='true'>" +
		"<input id='PINbox' type='password' value='' name='PINbox' disabled />" +
		"<br/>" +
		"<input type='button' class='PINbutton' name='1' value='1' id='1' onClick=addNumber(this); />" +
		"<input type='button' class='PINbutton' name='2' value='2' id='2' onClick=addNumber(this); />" +
		"<input type='button' class='PINbutton' name='3' value='3' id='3' onClick=addNumber(this); />" +
		"<br>" +
		"<input type='button' class='PINbutton' name='4' value='4' id='4' onClick=addNumber(this); />" +
		"<input type='button' class='PINbutton' name='5' value='5' id='5' onClick=addNumber(this); />" +
		"<input type='button' class='PINbutton' name='6' value='6' id='6' onClick=addNumber(this); />" +
		"<br>" +
		"<input type='button' class='PINbutton' name='7' value='7' id='7' onClick=addNumber(this); />" +
		"<input type='button' class='PINbutton' name='8' value='8' id='8' onClick=addNumber(this); />" +
		"<input type='button' class='PINbutton' name='9' value='9' id='9' onClick=addNumber(this); />" +
		"<br>" +
		"<input type='button' class='PINbutton clear' name='-' value='clear' id='-' onClick=clearForm(this); />" +
		"<input type='button' class='PINbutton' name='0' value='0' id='0' onClick=addNumber(this); />" +
		"<input type='button' class='PINbutton enter' name='+' value='enter' id='+' onClick=submitForm(PINbox); />" +
	"</form>"
);

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

function addNumber(e){
	//document.getElementById('PINbox').value = document.getElementById('PINbox').value+element.value;
	var v = $( "#PINbox" ).val();
	$( "#PINbox" ).val( v + e.value );
}
function clearForm(e){
	//document.getElementById('PINbox').value = "";
	$( "#PINbox" ).val( "" );
}
function submitForm(e) {
	if (e.value == "") {
        swal("Error!", "Ingrese un PIN!", "error");
		alert("Enter a PIN");
	} else {
        let errores = Object.values(validate({PIN: e.value}, constraints) || {});

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
            if (e.value != 1234) {
                swal("Error!", "Pin Incorrecto!", "error");
            } else {
                localStorage.setItem('user',JSON.stringify(user));
                localStorage.setItem('saldo',JSON.stringify(saldo));
                localStorage.setItem('deposito', JSON.stringify(deposito));
                localStorage.setItem('retiro', JSON.stringify(retiro));
                localStorage.setItem('tipo', JSON.stringify(tipo));
                localStorage.setItem('cantipo', JSON.stringify(cantipo));
                location.href = 'page.html';            
            }
        }        
		$( "#PINbox" ).val( "" );
	};
};