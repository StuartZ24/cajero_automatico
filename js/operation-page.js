const boton1 = document.querySelector(".btn-1");
const boton2 = document.querySelector(".btn-2");
const boton3 = document.querySelector(".btn-3");
const boton4 = document.querySelector(".btn-4");

// Agregar listeners
boton1.addEventListener("click", function(evento){
  // Aquí todo el código que se ejecuta cuando se da click al botón
    swal("Ingrese la Cantidad a Depositar:", {
      content: "input",
    })
    .then((value) => {
      if (validate.isEmpty(value)) {
        swal("Error!", "Campo vacio!, Digite de nuevo", "error");
      } else {
        cant = Number(value)
        if (validate.isNumber(cant)) {
          //si no hay nada guardado al principio, guarde un arreglo vacío
          if(localStorage.getItem('deposito') == null){
            localStorage.setItem('deposito','[]');
          }

          //obtener los datos antiguos y agregarlos a los datos nuevos
          var old_data = JSON.parse(localStorage.getItem('deposito'));
          var newvalue = parseFloat(value);
          old_data.push(newvalue.toFixed(2));

          //guardar los datos antiguos + nuevos en el local Storage
          localStorage.setItem('deposito', JSON.stringify(old_data));

          var saldo = JSON.parse(localStorage.getItem('saldo'));
          saldo = parseFloat(saldo);
          saldo += newvalue;

          localStorage.setItem('saldo', JSON.stringify(saldo));
          swal("Completado!", "Ha depositado correctamente!", "success");
        } else {
          swal("Error!", "Usted no digito ningun numero!", "error");
        }             
      }

    });        
});

boton2.addEventListener("click", function(evento){
  // Aquí todo el código que se ejecuta cuando se da click al botón
    swal("Ingrese la Cantidad a Retirar:", {
      content: "input",
    })
    .then((value) => {
      if (validate.isEmpty(value)) {
        swal("Error!", "Campo vacio!, Digite de nuevo", "error");
      } else {
        cant = Number(value)
        if (validate.isNumber(cant)) {
          var newvalue = parseFloat(value);

          var saldo = JSON.parse(localStorage.getItem('saldo'));
          saldo = parseFloat(saldo);

          if (newvalue > saldo) {
            swal("Error!", "Usted no puede retirar mas dinero del que tiene disponible!", "error");
          } else {
            //si no hay nada guardado al principio, guarde un arreglo vacío
            if(localStorage.getItem('retiro') == null){
              localStorage.setItem('retiro','[]');
            }

            //obtener los datos antiguos y agregarlos a los datos nuevos
            var old_data = JSON.parse(localStorage.getItem('retiro'));
            old_data.push(newvalue.toFixed(2));

            //guardar los datos antiguos + nuevos en el local Storage
            localStorage.setItem('retiro', JSON.stringify(old_data));  

            var saldo = JSON.parse(localStorage.getItem('saldo'));
            saldo = parseFloat(saldo);
            saldo -= newvalue;
  
            localStorage.setItem('saldo', JSON.stringify(saldo));
            swal("Completado!", "Ha retirado correctamente!", "success");            
          }
        } else {
          swal("Error!", "Usted no digito ningun numero!", "error");
        }         
      }

    });        
});

boton3.addEventListener("click", function(evento){
    // Aquí todo el código que se ejecuta cuando se da click al botón
    var saldo = JSON.parse(localStorage.getItem('saldo'));
    saldo = parseFloat(saldo);
    swal("Consulta de Saldo!", "Tu saldo disponible es de: $"+ saldo.toFixed(2) +" !");     
});

boton4.addEventListener("click", function(evento){
  // Aquí todo el código que se ejecuta cuando se da click al botón
    swal("Que servicios deseas pagar?", {
      className: "swal-wide",
      buttons: {
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
    .then((value) => {
      switch (value) {
    
        case "electrica":
          swal("Pago de Energia Electrica","Ingrese la cantidad a Pagar:", {
            content: "input",
          })
          .then((value) => {
            if (validate.isEmpty(value)) {
              swal("Error!", "Campo vacio!, Digite de nuevo", "error");
            } else {
              cant = Number(value)
              if (validate.isNumber(cant)) {
                var newvalue = parseFloat(value);

                var saldo = JSON.parse(localStorage.getItem('saldo'));
                saldo = parseFloat(saldo);
      
                if (newvalue > saldo) {
                  swal("Error!", "Usted no puede pagar mas dinero del que tiene disponible!", "error");
                } else {
                  //Tipo de Servicio
                  //si no hay nada guardado al principio, guarde un arreglo vacío
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
                  
                  var saldo = JSON.parse(localStorage.getItem('saldo'));
                  saldo = parseFloat(saldo);
                  saldo -= newvalue;
        
                  localStorage.setItem('saldo', JSON.stringify(saldo));                  
                  swal("Completado!", "Ha pagado correctamente!", "success");                
                }
              } else {
                swal("Error!", "Usted no digito ningun numero!", "error");
              }             
            }

          });
          break;
    
        case "internet":
        swal("Pago de Internet","Ingrese la cantidad a Pagar:", {
            content: "input",
          })
          .then((value) => {
            if (validate.isEmpty(value)) {
              swal("Error!", "Campo vacio!, Digite de nuevo", "error");
            } else {
              cant = Number(value)
              if (validate.isNumber(cant)) {
                var newvalue = parseFloat(value);

                var saldo = JSON.parse(localStorage.getItem('saldo'));
                saldo = parseFloat(saldo);
      
                if (newvalue > saldo) {
                  swal("Error!", "Usted no puede pagar mas dinero del que tiene disponible!", "error");
                } else {
                  //Tipo de Servicio
                  //si no hay nada guardado al principio, guarde un arreglo vacío
                  if(localStorage.getItem('tipo') == null){
                    localStorage.setItem('tipo','[]');
                  }

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
                  
                  var saldo = JSON.parse(localStorage.getItem('saldo'));
                  saldo = parseFloat(saldo);
                  saldo -= newvalue;
        
                  localStorage.setItem('saldo', JSON.stringify(saldo));                  
                  swal("Completado!", "Ha pagado correctamente!", "success");                
                }                 
              } else {
                swal("Error!", "Usted no digito ningun numero!", "error");
              }             
            }

          });
          break;

          case "telefonia":
          swal("Pago de Telefonía","Ingrese la cantidad a Pagar:", {
            content: "input",
          })
          .then((value) => {
            if (validate.isEmpty(value)) {
              swal("Error!", "Campo vacio!, Digite de nuevo", "error");
            } else {
              cant = Number(value)
              if (validate.isNumber(cant)) {
                var newvalue = parseFloat(value);

                var saldo = JSON.parse(localStorage.getItem('saldo'));
                saldo = parseFloat(saldo);
      
                if (newvalue > saldo) {
                  swal("Error!", "Usted no puede pagar mas dinero del que tiene disponible!", "error");
                } else {
                  //Tipo de Servicio
                  //si no hay nada guardado al principio, guarde un arreglo vacío
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
                  
                  var saldo = JSON.parse(localStorage.getItem('saldo'));
                  saldo = parseFloat(saldo);
                  saldo -= newvalue;
        
                  localStorage.setItem('saldo', JSON.stringify(saldo));                  
                  swal("Completado!", "Ha pagado correctamente!", "success");                
                }
              } else {
                swal("Error!", "Usted no digito ningun numero!", "error");
              }             
            }

          });
          break;
    
        case "agua":
        swal("Pago de Agua Potable","Ingrese la cantidad a Pagar:", {
            content: "input",
          })
          .then((value) => {
            if (validate.isEmpty(value)) {
              swal("Error!", "Campo vacio!, Digite de nuevo", "error");
            } else {
              cant = Number(value)
              if (validate.isNumber(cant)) {
                var newvalue = parseFloat(value);

                var saldo = JSON.parse(localStorage.getItem('saldo'));
                saldo = parseFloat(saldo);
      
                if (newvalue > saldo) {
                  swal("Error!", "Usted no puede pagar mas dinero del que tiene disponible!", "error");
                } else {
                  //Tipo de Servicio
                  //si no hay nada guardado al principio, guarde un arreglo vacío
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
                  
                  var saldo = JSON.parse(localStorage.getItem('saldo'));
                  saldo = parseFloat(saldo);
                  saldo -= newvalue;
        
                  localStorage.setItem('saldo', JSON.stringify(saldo));                  
                  swal("Completado!", "Ha pagado correctamente!", "success");                
                }
              } else {
                swal("Error!", "Usted no digito ningun numero!", "error");
              }             
            }

          });
          break;                
    
        default:
          swal("Has salido del Menu!");
      }
    });               
});