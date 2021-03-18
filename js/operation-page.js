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
          swal("Completado!", "Ha retirado correctamente!", "success");
        } else {
          swal("Error!", "Usted no digito ningun numero!", "error");
        }             
      }

    });        
});

boton3.addEventListener("click", function(evento){
  // Aquí todo el código que se ejecuta cuando se da click al botón
    swal("Consulta de Saldo!", "Tu saldo disponible es de: $"+ (10.8).toFixed(2) +" !");     
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
                swal("Completado!", "Ha pagado correctamente!", "success");
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
                swal("Completado!", "Ha pagado correctamente!", "success");
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
                swal("Completado!", "Ha pagado correctamente!", "success");
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
                swal("Completado!", "Ha pagado correctamente!", "success");
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