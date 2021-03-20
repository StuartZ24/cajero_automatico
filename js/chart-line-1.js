var ctx = document.getElementById("myLineChart1");          //Obtenemos una referencia al elemento canvas donde dibujaremos el grafico
var array = JSON.parse(localStorage.getItem('cantipo'));    //Obtenemos los datos de la cantidad y lo agregamos a una nueva variable
var tipo = JSON.parse(localStorage.getItem('tipo'));        //Obtenemos los datos del tipo de pago y lo agregamos a una nueva variable

var ContEE = 0;     //Variable de tipo contador que guardara la suma de todos los pagos de Energia Electrica
var ContAP = 0;     //Variable de tipo contador que guardara la suma de todos los pagos de Agua Potable
var ContI = 0;      //Variable de tipo contador que guardara la suma de todos los pagos de Internet
var ContT = 0;      //Variable de tipo contador que guardara la suma de todos los pagos de Telefonia

for (let i = 0; i < tipo.length; i++) {         //Recorremos el arreglo de tipo de pago de servicio
    if (tipo[i] === "Energia Electrica") {      //Si el nombre del tipo de pago es Energia Electrica
        ContEE += parseFloat(array[i]);         //Luego sumaremos la cantidad del pago realizado en el contador de Energia Electrica
    }else if(tipo[i] === "Internet"){           //Si el nombre del tipo de pago es Energia Internet
        ContI += parseFloat(array[i]);          //Luego sumaremos la cantidad del pago realizado en el contador de Internet
    }else if(tipo[i] === "Telefonia"){          //Si el nombre del tipo de pago es Energia Telefonia
        ContT += parseFloat(array[i]);          //Luego sumaremos la cantidad del pago realizado en el contador de Telefonia
    }else if(tipo[i] === "Agua Potable"){       //Si el nombre del tipo de pago es Energia Agua Potable
        ContAP += parseFloat(array[i]);         //Luego sumaremos la cantidad del pago realizado en el contador de Agua Potable
    }
}

var arrayTotal = [ContEE, ContI, ContT, ContAP];    //Creamos un array de acuerdo a los 4 contadores creados

var labels = ["Energia Electrica", "Internet", "Telefonia", "Agua Potable"];    //Luego crearemos las etiquetas de acuerdo al tipo de pago

var color1 = [];    //Variable de tipo arreglo que servira para guardar los colores de fondo en formato rgba de forma aleatoria
var color2 = [];    //Variable de tipo arreglo que servira para guardar los colores del borde en formato rgba de forma aleatoria

function r() {//Funcion para generar un numero aleatorio para el codigo rgb
    return Math.random() * 256 >> 0;//Nos devolvera un valor aleatorio de entre 0 a 256
}//Ya que los valores rgb trabajan dentro de ese rango Nota: el ">>" nos ayudara a desplazar bit a bit el numero al azar a la derecha

function colora() {//Funcion para generar un codigo rgba aleatorio
    return `rgba(${r()}, ${r()}, ${r()}, 0.2)`;//Nos delvolvera en formato rgba un color generado automaticamente   
}//Nota: el "``" no ayuda a concatenar e interpolar strings de modo que nuestro código quede mucho más limpio.

function color() {//Funcion para generar un codigo rgb aleatorio
    return `rgb(${r()}, ${r()}, ${r()})`;//Nos delvolvera en formato rgb un color generado automaticamente
}//Nota: el "``" no ayuda a concatenar e interpolar strings de modo que nuestro código quede mucho más limpio.

for (let i = 0; i < array.length; i++) {//Recorremos el arreglo de tipo de pago de servicio
    color1.push(colora());//Luego crearemos los colores de fondo de acuerdo a la cantidad de retiros hechos
    color2.push(color());//Luego crearemos los colores del borde de acuerdo a la cantidad de retiros hechos
}

var myChart = new Chart(ctx, {                              //Funcion para generar un grafico en el elemento canvas
  type: 'line',                                             // Tipo de gráfica
  data: {
      labels: labels,                                       // Las etiquetas son las que van en el eje X
      datasets: [{                                          // Es un conjunto de datos donde agregamos la data o datos
          label: 'Cantidad de Pagos en USD por Categorias', // Es la leyenda y la información sobre el grafico.
          data: arrayTotal,                                 // La data es el arreglo de datos para un gráfico que van en el eje Y
          backgroundColor: color1,                          // Color de fondo. Tambien se puede agregar varios colores por medio de un arreglo
          borderColor: color2,                              // Color del borde. Tambien se puede agregar varios colores por medio de un arreglo
          borderWidth: 1                                    // Ancho del borde
      }]
  },
  options: {
      scales: {
          y: {
              beginAtZero: true                             //Iniciar en 0. Si es verdadero, la escala incluirá 0 si aún no está incluido.
          }
      }
  }
});