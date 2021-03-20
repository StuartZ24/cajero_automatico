//Creamos por medio de JavaScript el formulario del codigo de PIN con el metodo html en JQuery
$( "#PINcode" ).html( //ya que el metodo html vendria siendo el innerHTML en Javascript
	"<form action='' method='' name='PINform' id='PINform' autocomplete='off' draggable='true'>" + //Declaracion del formulario
		"<input id='PINbox' type='password' value='' name='PINbox' disabled />" +//input donde ira el pin o password
		"<br/>" +
		"<input type='button' class='PINbutton' name='1' value='1' id='1' onClick=addNumber(this); />" + //boton numerico 1
		"<input type='button' class='PINbutton' name='2' value='2' id='2' onClick=addNumber(this); />" + //boton numerico 2
		"<input type='button' class='PINbutton' name='3' value='3' id='3' onClick=addNumber(this); />" + //boton numerico 3
		"<br>" +
		"<input type='button' class='PINbutton' name='4' value='4' id='4' onClick=addNumber(this); />" + //boton numerico 4
		"<input type='button' class='PINbutton' name='5' value='5' id='5' onClick=addNumber(this); />" + //boton numerico 5
		"<input type='button' class='PINbutton' name='6' value='6' id='6' onClick=addNumber(this); />" + //boton numerico 6
		"<br>" +
		"<input type='button' class='PINbutton' name='7' value='7' id='7' onClick=addNumber(this); />" + //boton numerico 7
		"<input type='button' class='PINbutton' name='8' value='8' id='8' onClick=addNumber(this); />" + //boton numerico 8
		"<input type='button' class='PINbutton' name='9' value='9' id='9' onClick=addNumber(this); />" + //boton numerico 9
		"<br>" +
		"<input type='button' class='PINbutton clear' name='-' value='clear' id='-' onClick=clearForm(this); />" + //boton limpiar
		"<input type='button' class='PINbutton' name='0' value='0' id='0' onClick=addNumber(this); />" + //boton numerico 0
		"<input type='button' class='PINbutton enter' name='+' value='enter' id='+' onClick=submitForm(PINbox); />" + //boton ok o enter
	"</form>" //cerramos el formulario
);

var user = "Stuardo Rodríguez"; //variable donde guadaremos nuestro nombre
var saldo = 500; //variable donde guadraremos nuestro saldo predeterminado
var deposito = []; //variable de tipo arreglo donde guardaremos las trasnsacciones de tipo deposito
var retiro = []; //variable de tipo arreglo donde guardaremos las trasnsacciones de tipo retiro
var tipo = []; //variable de tipo arreglo donde guardaremos el tipo de pago de servicio realizado
var cantipo = []; //variable de tipo arreglo donde guardaremos la cantidad del tipo de pago de servicio realizado

var constraints = { //creamos el objeto constraints para definir que tipo de va a recibir y verificar que cumpla con ciertos parametros
    PIN: {
        // Aqui estamos diciendo que si se requiere el PIN para continuar
        presence: {
            message: "es requerido" //Programamos un mensaje al momento de que el campo es vacio
        },
        // El PIN debe ser un número entero mayor o igual que 0
        numericality: { //Aqui le decimos al validador que solo permite numeros con ciertas restricciones
            onlyInteger: true, //Aqui le decimos que no permita numero reales sino que solo enteros
            greaterThanOrEqualTo: 0, //Aqui le decimos que el campo debe tener al menos un valor mayor o igual que 0
            notInteger: "debe ser numerico", //Programamos un mensaje al momento de que el campo no es numerico
            notGreaterThanOrEqualTo: "debe ser mayor o igual que cero", //Programamos un mensaje al momento de que el campo no es mayor o igual que 0
        },      
        // El debe tener 4 caracteres
        length: { //Aqui le estamos diciendo al validador que compruebe la longitud del campo o el valor
            is: 4, //Aqui le decimos que el campo debe tener exactamente una longitud de 4 cifras
            message: "debe de ser de longitud 4" //Programamos un mensaje al momento de que el campo no cumpla la longitud
        },
    },
}

function addNumber(e){ //Creamos una funcion que capturara el valor de los botones numericos
	var v = $( "#PINbox" ).val(); //Aqui capturamos el valor actual del input del PIN
	$( "#PINbox" ).val( v + e.value ); //Aqui contatenamos el valor anterior del input PIN con el valor actual del boton
}

function clearForm(e){//Creamos una funcion que limpiara el input del PIN
	$( "#PINbox" ).val( "" );//Aqui le declaramos que valor del input del PIN que es vacio
}

function submitForm(e) { //Creamos una funcion que se ejecutara al momento de enviar el PIN dentro del input
	if (e.value == "") { //Si el valor de PIN viene vacio o no ha escrito nada dentro del imput
        swal("Error!", "Ingrese un PIN!", "error"); //Nos mostrara un mensaje donde se tiene que ingresar un PIN
	} else { //De lo contrario
        let errores = Object.values(validate({PIN: e.value}, constraints) || {}); //Comprobamos si el valor de PIN nos devuelve algun error de acuerdo con las
        //restricciones establecidas. Este valor nos arrojara en formato de Object por lo que nosotros lo convertimos en Array y lo guardamos en una variable
        var string = "";//variable donde guardara los errores en formato string
        
        if (errores.length > 0) { //Si el tamaño del arreglo de errores es mayor que 0
            for (let k = 0; k < errores.length; k++) { //recorremos el arreglo de errores
                string += errores[k]; //y lo iremos guardando en una cadena de texto donde el mismo array lo separa con comas (,)
            }
            //Utilizando el metodo split en la cadena de texto creada podemos dividirla y proporcionar como separador la coma (,)
            var nameArr = string.split(',');//y el resultado lo guardaremos en una variable
            
            for (let i = 0; i < nameArr.length; i++) {//recorremos la variable creada donde estan los errores
                swal("Error!", nameArr[i]+"!", "error");//y los mensajes los mostraremos en una alerta
            }        
        }else{//Si el tamaño del arreglo es 0
            if (e.value != 1234) {//Comprobamos si la contraseña introducida es diferente a la correcta 
                swal("Error!", "Pin Incorrecto!", "error"); // y si es incorrecta, nos mostrara una alerta de error
            } else {//De lo contrario
                localStorage.setItem('user',JSON.stringify(user));          //Guardamos el nombre del usuario en el LocalStorage
                localStorage.setItem('saldo',JSON.stringify(saldo));        //Guardamos el saldo en el LocalStorage
                localStorage.setItem('deposito', JSON.stringify(deposito)); //Guardamos el arreglo deposito en el LocalStorage
                localStorage.setItem('retiro', JSON.stringify(retiro));     //Guardamos el arreglo retiro en el LocalStorage
                localStorage.setItem('tipo', JSON.stringify(tipo));         //Guardamos el arreglo tipo de pago en el LocalStorage
                localStorage.setItem('cantipo', JSON.stringify(cantipo));   //Guardamos el arreglo cantidad de tipo en el LocalStorage
                location.href = 'page.html';                                //Nos redirigira a la pagina de inicio del cajero
            }
        }        
		$( "#PINbox" ).val( "" );   //Limpiamos el input donde estaba el PIN
	};
};