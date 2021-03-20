const boton1 = document.querySelector(".btn-1"); //Aqui mandamos a buscar el boton de deposito
const boton2 = document.querySelector(".btn-2"); //Aqui mandamos a buscar el boton de retiro
const boton3 = document.querySelector(".btn-3"); //Aqui mandamos a buscar el boton de consulta
const boton4 = document.querySelector(".btn-4"); //Aqui mandamos a buscar el boton de pagos de servicios

//Funcion para validar un numero decimal con 2 decimales de precision
function validateDecimal(valor) { 
  var RE = /^\d*(\.\d{1})?\d{0,1}$/; //Creamos una Expresion Regular que permite nuemros con 2 decimales exactos
  if (RE.test(valor)) { //Comprobamos si el valor con la Expresion Regular es permitido ya sea entero o decimales
      return true; //Si el valor es un entero o un decimal con 2 decimales nos devolvera verdadero = true
  } else { //De lo contrario
      return false; //Nos devolvera falso = false
  }
}

// Agregamos eventos listeners
boton1.addEventListener("click", function(evento){
  // Aquí todo el código que se ejecuta cuando se da click al botón de deposito
    swal("Ingrese la Cantidad a Depositar:", { //Nos mostrara una alerta con un textbox
      content: "input",
    })
    .then((value) => {//Aqui se comprobara el valor insertado
      if (validate.isEmpty(value)) {//Aqui se comprueba si el valor no viene vacio o nulo
        swal("Error!", "Campo vacio!, Digite de nuevo", "error"); //Si es true nos saldra una alerta con ese error
      } else {//Sino 
        cant = Number(value) //Convertimos el valor en Numerico
        if (validate.isNumber(cant)) {//Comprobamos si el valor que se ingreso es numerico y si es verdadero
          if (validateDecimal(value) == true) {//Comprobamos si el valor que se ingreso es entero o si es un numero con 2 decimales exactos
            //si es correcto y no hay nada guardado al principio, guardamos un arreglo vacío en la variable local de deposito
            if(localStorage.getItem('deposito') == null){
              localStorage.setItem('deposito','[]');
            }

            //Obtenemos los datos antiguos y agregarlos a los datos nuevos
            var old_data = JSON.parse(localStorage.getItem('deposito'));
            var newvalue = parseFloat(value);
            old_data.push(newvalue.toFixed(2));

            //Guardamos los datos antiguos + nuevos en el local Storage
            localStorage.setItem('deposito', JSON.stringify(old_data));
            
            //Obtenemos el valor del saldo actual y se lo agregamos al nuevo valor 
            var saldo = JSON.parse(localStorage.getItem('saldo'));
            saldo = parseFloat(saldo);
            saldo += newvalue;

            //Guardamos el nuevo saldo actual y mostramos una alerta de finalizacion
            localStorage.setItem('saldo', JSON.stringify(saldo));
            swal("Completado!", "Ha depositado correctamente!", "success");            
          } else {//Si el valor no es decimal lo mostramos en una alerta
            swal("Error!", "Numero decimal no valido!, Digite de nuevo", "error");            
          }
        } else {//Si el valor es nulo o vacio lo mostramos en una alerta
          swal("Error!", "Usted no digito ningun numero!", "error");
        }             
      }

    });        
});

boton2.addEventListener("click", function(evento){
  // Aquí todo el código que se ejecuta cuando se da click al botón retiro
    swal("Ingrese la Cantidad a Retirar:", { //Nos mostrara una alerta con un textbox
      content: "input",
    })
    .then((value) => {//Aqui se comprobara el valor insertado
      if (validate.isEmpty(value)) {//Aqui se comprueba si el valor no viene vacio o nulo
        swal("Error!", "Campo vacio!, Digite de nuevo", "error");//Si es true nos saldra una alerta con ese error
      } else {//Sino 
        cant = Number(value)//Convertimos el valor en Numerico
        if (validate.isNumber(cant)) {//Comprobamos si el valor que se ingreso es numerico y si es verdadero
          var newvalue = parseFloat(value);//Convertimos el valor obtenidos y lo guardamos en una variable
          //obtenemos el valor del saldo actual y luego lo convertimos
          var saldo = JSON.parse(localStorage.getItem('saldo'));
          saldo = parseFloat(saldo);
          //Verificamos si el valor no es mayor al saldo actual
          if (newvalue > saldo) {//Si es asi nos mostrara una alerta
            swal("Error!", "Usted no puede retirar mas dinero del que tiene disponible!", "error");
          } else {//De lo contrario
            if (validateDecimal(value) == true) {//Comprobamos si el valor que se ingreso es entero o si es un numero con 2 decimales exactos
              //si es correcto y no hay nada guardado al principio, guardamos un arreglo vacío en la variable local de retiro
              if(localStorage.getItem('retiro') == null){
                localStorage.setItem('retiro','[]');
              }
              //Obtenemos los datos antiguos y agregarlos a los datos nuevos
              var old_data = JSON.parse(localStorage.getItem('retiro'));
              old_data.push(newvalue.toFixed(2));

              //Guardamos los datos antiguos + nuevos en el local Storage
              localStorage.setItem('retiro', JSON.stringify(old_data));  

              //Traemos el saldo actual y se lo quitamos con el nuevo valor 
              saldo -= newvalue;
    
              //guardamos el nuevo saldo actual y mostramos una alerta de finalizacion
              localStorage.setItem('saldo', JSON.stringify(saldo));
              swal("Completado!", "Ha retirado correctamente!", "success");             
            } else {//Si el valor no es decimal lo mostramos en una alerta
              swal("Error!", "Numero decimal no valido!, Digite de nuevo", "error");            
            }           
          }
        } else {//Si el valor es nulo o vacio lo mostramos en una alerta
          swal("Error!", "Usted no digito ningun numero!", "error");
        }         
      }

    });        
});

boton3.addEventListener("click", function(evento){
    // Aquí todo el código que se ejecuta cuando se da click al botón de consultar saldo
    var saldo = JSON.parse(localStorage.getItem('saldo')); //Obtenemos el valor del saldo actual
    saldo = parseFloat(saldo);//Y lo convertimos
    swal("Consulta de Saldo!", "Tu saldo disponible es de: $"+ saldo.toFixed(2) +" !");//Y lo mostramos en una alerta
});

boton4.addEventListener("click", function(evento){
  // Aquí todo el código que se ejecuta cuando se da click al botón de pagos de servicios
    swal("Que servicios deseas pagar?", {//Nos mostrara una alerta con 4 botones con servicios diferentes
      className: "swal-wide",//creamos una clase especial para la alerta
      buttons: {//Aqui se muestra los diferentes pagos de servicio disponibles y con que valores se identifica cada uno de los botones
        electrica: {
          text: "Energía Electrica",
          value: "electrica",
        },
        internet:{
          text: "Internet",
          value: "internet",
        },
        telefonia: {
          text: "Telefonía",
          value: "telefonia",
        },
        agua: {
          text: "Agua Potable",
          value: "agua",
        }
      },
    })
    .then((value) => {//Aqui se comprobara el valor que tiene cada valor
      switch (value) {//Entramos a un switch case dependiendo del caso de cada boton que le dio click
        //Si le dimos click en Energia electrica
        case "electrica"://Nos mostrara una alerta con un textbox
          swal("Pago de Energia Electrica","Ingrese la cantidad a Pagar:", {
            content: "input",
          })
          .then((value) => {//Aqui se comprobara el valor insertado
            if (validate.isEmpty(value)) {//Aqui se comprueba si el valor no viene vacio o nulo
              swal("Error!", "Campo vacio!, Digite de nuevo", "error");//Si es true nos saldra una alerta con ese error
            } else {//Sino 
              cant = Number(value)//Convertimos el valor en Numerico
              if (validate.isNumber(cant)) {//Comprobamos si el valor que se ingreso es numerico y si es verdadero
                var newvalue = parseFloat(value);//Convertimos el valor obtenidos y lo guardamos en una variable
                //obtenemos el valor del saldo actual y luego lo convertimos
                var saldo = JSON.parse(localStorage.getItem('saldo'));
                saldo = parseFloat(saldo);
                //Verificamos si el valor no es mayor al saldo actual
                if (newvalue > saldo) {//Si es asi nos mostrara una alerta
                  swal("Error!", "Usted no puede pagar mas dinero del que tiene disponible!", "error");
                } else {//De lo contrario
                  if (validateDecimal(value) == true) {//Comprobamos si el valor que se ingreso es entero o si es un numero con 2 decimales exactos
                    //si es correcto y hay nada guardado al principio, guarde un arreglo vacío
                    //Tipo de Servicio
                    if(localStorage.getItem('tipo') == null){
                      localStorage.setItem('tipo','[]');
                    }

                    //obtener los datos antiguos y agregarlos a los datos nuevos
                    var old_data_t = JSON.parse(localStorage.getItem('tipo'));
                    old_data_t.push("Energia Electrica");

                    //guardar los datos antiguos + nuevos en el local Storage
                    localStorage.setItem('tipo', JSON.stringify(old_data_t));

                    //Cantidad a Pagar
                    //si no hay nada guardado al principio, guarde un arreglo vacío
                    if(localStorage.getItem('cantipo') == null){
                      localStorage.setItem('cantipo','[]');
                    }

                    //obtener los datos antiguos y agregarlos a los datos nuevos
                    var old_data_ct = JSON.parse(localStorage.getItem('cantipo'));
                    old_data_ct.push(newvalue.toFixed(2));

                    //guardar los datos antiguos + nuevos en el local Storage
                    localStorage.setItem('cantipo', JSON.stringify(old_data_ct));
                    
                    //Traemos el saldo actual y se lo quitamos con el nuevo valor 
                    saldo -= newvalue;
    
                    //guardamos el nuevo saldo actual y mostramos una alerta de finalizacion          
                    localStorage.setItem('saldo', JSON.stringify(saldo));                  
                    swal("Completado!", "Ha pagado correctamente!", "success");                      
                  } else {//Si el valor no es decimal lo mostramos en una alerta
                    swal("Error!", "Numero decimal no valido!, Digite de nuevo", "error");            
                  }              
                }
              } else {//Si el valor es nulo o vacio lo mostramos en una alerta
                swal("Error!", "Usted no digito ningun numero!", "error");
              }             
            }

          });
          break;
        //Si le dimos click en Internet
        case "internet"://Nos mostrara una alerta con un textbox
        swal("Pago de Internet","Ingrese la cantidad a Pagar:", {
            content: "input",
          })
          .then((value) => {//Aqui se comprobara el valor insertado
            if (validate.isEmpty(value)) {//Aqui se comprueba si el valor no viene vacio o nulo
              swal("Error!", "Campo vacio!, Digite de nuevo", "error");//Si es true nos saldra una alerta con ese error
            } else {//Sino 
              cant = Number(value)//Convertimos el valor en Numerico
              if (validate.isNumber(cant)) {//Comprobamos si el valor que se ingreso es numerico y si es verdadero
                var newvalue = parseFloat(value);//Convertimos el valor obtenidos y lo guardamos en una variable
                //obtenemos el valor del saldo actual y luego lo convertimos
                var saldo = JSON.parse(localStorage.getItem('saldo'));
                saldo = parseFloat(saldo);
                //Verificamos si el valor no es mayor al saldo actual      
                if (newvalue > saldo) {//Si es asi nos mostrara una alerta
                  swal("Error!", "Usted no puede pagar mas dinero del que tiene disponible!", "error");
                } else {//De lo contrario
                  if (validateDecimal(value) == true) {//Comprobamos si el valor que se ingreso es entero o si es un numero con 2 decimales exactos
                    //si es correcto y hay nada guardado al principio, guarde un arreglo vacío
                    //Tipo de Servicio
                    if(localStorage.getItem('tipo') == null){
                      localStorage.setItem('tipo','[]');
                    }
                    //Verificamos si el valor no es mayor al saldo actual
                    //obtener los datos antiguos y agregarlos a los datos nuevos
                    var old_data_t = JSON.parse(localStorage.getItem('tipo'));
                    old_data_t.push("Internet");

                    //guardar los datos antiguos + nuevos en el local Storage
                    localStorage.setItem('tipo', JSON.stringify(old_data_t));

                    //Cantidad a Pagar
                    //si no hay nada guardado al principio, guarde un arreglo vacío
                    if(localStorage.getItem('cantipo') == null){
                      localStorage.setItem('cantipo','[]');
                    }

                    //obtener los datos antiguos y agregarlos a los datos nuevos
                    var old_data_ct = JSON.parse(localStorage.getItem('cantipo'));
                    old_data_ct.push(newvalue.toFixed(2));

                    //guardar los datos antiguos + nuevos en el local Storage
                    localStorage.setItem('cantipo', JSON.stringify(old_data_ct));
                    
                    //Traemos el saldo actual y se lo quitamos con el nuevo valor 
                    saldo -= newvalue;
    
                    //guardamos el nuevo saldo actual y mostramos una alerta de finalizacion          
                    localStorage.setItem('saldo', JSON.stringify(saldo));                  
                    swal("Completado!", "Ha pagado correctamente!", "success");             
                  } else {//Si el valor no es decimal lo mostramos en una alerta
                    swal("Error!", "Numero decimal no valido!, Digite de nuevo", "error");            
                  }                                   
                }                 
              } else {//Si el valor es nulo o vacio lo mostramos en una alerta
                swal("Error!", "Usted no digito ningun numero!", "error");
              }             
            }

          });
          break;
          //Si le dimos click en Telefonia
          case "telefonia"://Nos mostrara una alerta con un textbox
          swal("Pago de Telefonía","Ingrese la cantidad a Pagar:", {
            content: "input",
          })
          .then((value) => {//Aqui se comprobara el valor insertado
            if (validate.isEmpty(value)) {//Aqui se comprueba si el valor no viene vacio o nulo
              swal("Error!", "Campo vacio!, Digite de nuevo", "error");//Si es true nos saldra una alerta con ese error
            } else {//Sino 
              cant = Number(value)//Convertimos el valor en Numerico
              if (validate.isNumber(cant)) {//Comprobamos si el valor que se ingreso es numerico y si es verdadero
                var newvalue = parseFloat(value);//Convertimos el valor obtenidos y lo guardamos en una variable
                //obtenemos el valor del saldo actual y luego lo convertimos
                var saldo = JSON.parse(localStorage.getItem('saldo'));
                saldo = parseFloat(saldo);
                //Verificamos si el valor no es mayor al saldo actual      
                if (newvalue > saldo) {//Si es asi nos mostrara una alerta
                  swal("Error!", "Usted no puede pagar mas dinero del que tiene disponible!", "error");
                } else {//De lo contrario
                  if (validateDecimal(value) == true) {//Comprobamos si el valor que se ingreso es entero o si es un numero con 2 decimales exactos
                    //si es correcto y hay nada guardado al principio, guarde un arreglo vacío
                    //Tipo de Servicio
                    if(localStorage.getItem('tipo') == null){
                      localStorage.setItem('tipo','[]');
                    }

                    //obtener los datos antiguos y agregarlos a los datos nuevos
                    var old_data_t = JSON.parse(localStorage.getItem('tipo'));
                    old_data_t.push("Telefonia");

                    //guardar los datos antiguos + nuevos en el local Storage
                    localStorage.setItem('tipo', JSON.stringify(old_data_t));

                    //Cantidad a Pagar
                    //si no hay nada guardado al principio, guarde un arreglo vacío
                    if(localStorage.getItem('cantipo') == null){
                      localStorage.setItem('cantipo','[]');
                    }

                    //obtener los datos antiguos y agregarlos a los datos nuevos
                    var old_data_ct = JSON.parse(localStorage.getItem('cantipo'));
                    old_data_ct.push(newvalue.toFixed(2));

                    //guardar los datos antiguos + nuevos en el local Storage
                    localStorage.setItem('cantipo', JSON.stringify(old_data_ct));
                    
                    //Traemos el saldo actual y se lo quitamos con el nuevo valor 
                    saldo -= newvalue;
    
                    //guardamos el nuevo saldo actual y mostramos una alerta de finalizacion          
                    localStorage.setItem('saldo', JSON.stringify(saldo));                  
                    swal("Completado!", "Ha pagado correctamente!", "success");               
                  } else {//Si el valor no es decimal lo mostramos en una alerta
                    swal("Error!", "Numero decimal no valido!, Digite de nuevo", "error");            
                  }             
                }
              } else {//Si el valor es nulo o vacio lo mostramos en una alerta
                swal("Error!", "Usted no digito ningun numero!", "error");
              }             
            }

          });
          break;
        //Si le dimos click en Agua Potable
        case "agua"://Nos mostrara una alerta con un textbox
        swal("Pago de Agua Potable","Ingrese la cantidad a Pagar:", {
            content: "input",
          })
          .then((value) => {//Aqui se comprobara el valor insertado
            if (validate.isEmpty(value)) {//Aqui se comprueba si el valor no viene vacio o nulo
              swal("Error!", "Campo vacio!, Digite de nuevo", "error");//Si es true nos saldra una alerta con ese error
            } else {//Sino 
              cant = Number(value)//Convertimos el valor en Numerico
              if (validate.isNumber(cant)) {//Comprobamos si el valor que se ingreso es numerico y si es verdadero
                var newvalue = parseFloat(value);//Convertimos el valor obtenidos y lo guardamos en una variable
                //obtenemos el valor del saldo actual y luego lo convertimos
                var saldo = JSON.parse(localStorage.getItem('saldo'));
                saldo = parseFloat(saldo);
                //Verificamos si el valor no es mayor al saldo actual      
                if (newvalue > saldo) {//Si es asi nos mostrara una alerta
                  swal("Error!", "Usted no puede pagar mas dinero del que tiene disponible!", "error");
                } else {//De lo contrario
                    if (validateDecimal(value) == true) {//Comprobamos si el valor que se ingreso es entero o si es un numero con 2 decimales exactos
                    //si es correcto y hay nada guardado al principio, guarde un arreglo vacío
                    //Tipo de Servicio
                    if(localStorage.getItem('tipo') == null){
                      localStorage.setItem('tipo','[]');
                    }

                    //obtener los datos antiguos y agregarlos a los datos nuevos
                    var old_data_t = JSON.parse(localStorage.getItem('tipo'));
                    old_data_t.push("Agua Potable");

                    //guardar los datos antiguos + nuevos en el local Storage
                    localStorage.setItem('tipo', JSON.stringify(old_data_t));

                    //Cantidad a Pagar
                    //si no hay nada guardado al principio, guarde un arreglo vacío
                    if(localStorage.getItem('cantipo') == null){
                      localStorage.setItem('cantipo','[]');
                    }

                    //obtener los datos antiguos y agregarlos a los datos nuevos
                    var old_data_ct = JSON.parse(localStorage.getItem('cantipo'));
                    old_data_ct.push(newvalue.toFixed(2));

                    //guardar los datos antiguos + nuevos en el local Storage
                    localStorage.setItem('cantipo', JSON.stringify(old_data_ct));
                    
                    //Traemos el saldo actual y se lo quitamos con el nuevo valor 
                    saldo -= newvalue;
    
                    //guardamos el nuevo saldo actual y mostramos una alerta de finalizacion          
                    localStorage.setItem('saldo', JSON.stringify(saldo));                  
                    swal("Completado!", "Ha pagado correctamente!", "success");              
                  } else {//Si el valor no es decimal lo mostramos en una alerta
                    swal("Error!", "Numero decimal no valido!, Digite de nuevo", "error");            
                  }                                  
                }
              } else {//Si el valor es nulo o vacio lo mostramos en una alerta
                swal("Error!", "Usted no digito ningun numero!", "error");
              }             
            }

          });
          break;                
    
        default://Si ha seleccionado afuera de la alerta con botones entonces le mostrara una alerta de que se ha salido del menu
          swal("Has salido del Menu!");
      }
    });               
});