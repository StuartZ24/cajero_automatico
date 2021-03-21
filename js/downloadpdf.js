botonpdf1 = document.querySelector('.download-pdf1');       //Aqui mandamos a buscar el boton de descarga de la grafica 1
botonpdf2 = document.querySelector('.download-pdf2');       //Aqui mandamos a buscar el boton de descarga de la grafica 2
botonpdf3 = document.querySelector('.download-pdf3');       //Aqui mandamos a buscar el boton de descarga de la grafica 3

botonpdf1.addEventListener("click", function(evento){       // Aquí todo el código que se ejecuta cuando se da click al botón de descarga 1
  downloadPDF();                                            //Aqui mandamos a llamar la funcion de descarga de la grafica 1
});

botonpdf2.addEventListener("click", function(evento){       // Aquí todo el código que se ejecuta cuando se da click al botón de descarga 2
  downloadPDF2();                                           //Aqui mandamos a llamar la funcion de descarga de la grafica 2
})

botonpdf3.addEventListener("click", function(evento){       // Aquí todo el código que se ejecuta cuando se da click al botón de descarga 3
  downloadPDF3();                                           //Aqui mandamos a llamar la funcion de descarga de la grafica 3
}) 

//Funcion para descargar pdf del canvas de la grafica 1
function downloadPDF() {
var canvas = document.querySelector('#myBarChart1');        //Aqui mandamos a buscar el elemento canvas donde dibujaremos el grafico 1
//Crear una imagen
var canvasImg = canvas.toDataURL("image/jpeg");             //Generamos una imagen del canvas y la guardamos en una variable

//Crear PDF para la imagen
var doc = new jsPDF('landscape');                           //Creamos un nuevo PDF de orientacion horizontal
doc.addImage(canvasImg, 'JPEG', 10, 10, 280, 150 );         //Agregamos una imagen al documento
doc.save('Depositos.pdf');                                  //Guardamos como documentos PDF
}

//Funcion para descargar pdf del canvas de la grafica 2
function downloadPDF2() {
var canvas = document.querySelector('#myBarChart2');        //Aqui mandamos a buscar el elemento canvas donde dibujaremos el grafico 2
//Crear una imagen
var canvasImg = canvas.toDataURL("image/jpeg");             //Generamos una imagen del canvas y la guardamos en una variable

//Crear PDF para la imagen
var doc = new jsPDF('landscape');                           //Creamos un nuevo PDF de orientacion horizontal
doc.addImage(canvasImg, 'JPEG', 10, 10, 280, 150 );         //Agregamos una imagen al documento
doc.save('Retiros.pdf');                                    //Guardamos como documentos PDF
}

//Funcion para descargar pdf del canvas de la grafica 3
function downloadPDF3() {
var canvas = document.querySelector('#myLineChart1');       //Aqui mandamos a buscar el elemento canvas donde dibujaremos el grafico 3
//Crear una imagen
var canvasImg = canvas.toDataURL("image/jpeg");             //Generamos una imagen del canvas y la guardamos en una variable

//Crear PDF para la imagen
var doc = new jsPDF('landscape');                           //Creamos un nuevo PDF de orientacion horizontal
doc.addImage(canvasImg, 'JPEG', 10, 10, 280, 150 );         //Agregamos una imagen al documento
doc.save('Pagos_Servicios.pdf');                            //Guardamos como documentos PDF
} 