var ctx = document.getElementById("myBarChart1");           //Obtenemos una referencia al elemento canvas donde dibujaremos el grafico
var array = JSON.parse(localStorage.getItem('deposito'));   //Obtenemos los datos del deposito y lo agregamos a una nueva variable

var labels = []; //Variable de tipo arreglo que servira para guardar nombre de las etiquetas que van en el eje X
var color1 = []; //Variable de tipo arreglo que servira para guardar los colores en formato rgba de forma aleatoria

function r() {//Funcion para generar un numero aleatorio para el codigo rgb
    return Math.random() * 256 >> 0;//Nos devolvera un valor aleatorio de entre 0 a 256
}//Ya que los valores rgb trabajan dentro de ese rango Nota: el ">>" nos ayudara a desplazar bit a bit el numero al azar a la derecha

function color() {//Funcion para generar un codigo rgba aleatorio
    return `rgba(${r()}, ${r()}, ${r()}, 0.2)`;//Nos delvolvera en formato rgba un color generado automaticamente
}//Nota: el "``" no ayuda a concatenar e interpolar strings de modo que nuestro código quede mucho más limpio.

for (let i = 0; i < array.length; i++) {//Recorremos el arreglo de tipo deposito
    color1.push(color());//Luego crearemos los colores de acuerdo a la cantidad de depositos hechos
    labels.push('Deposito '+(i+1));//Luego crearemos las etiquetas de acuerdo a la cantidad de depositos hechos
}//Nota: Labels es un arreglo que debe tener la misma cantidad de valores que la cantidad de datos que tiene array

var myChart = new Chart(ctx, {                      //Funcion para generar un grafico en el elemento canvas
  type: 'bar',                                      // Tipo de gráfica
  data: {
      labels: labels,                               // Las etiquetas son las que van en el eje X
      datasets: [{                                  // Es un conjunto de datos donde agregamos la data o datos
          label: 'Cantidad de Deposito en USD',     // Es la leyenda y la información sobre el grafico.
          data: array,                              // La data es el arreglo de datos para un gráfico que van en el eje Y
          backgroundColor: color1,                  // Color de fondo. Tambien se puede agregar varios colores por medio de un arreglo
          borderWidth: 1                            // Ancho del borde
      }]
  },
  options: {
      scales: {
          y: {
              beginAtZero: true                     //Iniciar en 0. Si es verdadero, la escala incluirá 0 si aún no está incluido.
          }
      }
  }
});