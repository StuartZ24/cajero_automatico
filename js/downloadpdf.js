botonpdf1 = document.querySelector('.download-pdf1');
botonpdf2 = document.querySelector('.download-pdf2');
botonpdf3 = document.querySelector('.download-pdf3');

botonpdf1.addEventListener("click", function(evento){
  downloadPDF();
});

botonpdf2.addEventListener("click", function(evento){
  downloadPDF2();
})

botonpdf3.addEventListener("click", function(evento){
  downloadPDF3();
}) 
//donwload pdf from original canvas
function downloadPDF() {
var canvas = document.querySelector('#myBarChart1');
//creates image
var canvasImg = canvas.toDataURL("image/jpeg");

//creates PDF from img
var doc = new jsPDF('landscape');
doc.setFontSize(20);
doc.text(15, 15, "Grafica de movimiento");
doc.addImage(canvasImg, 'JPEG', 10, 10, 280, 150 );
doc.save('Depositos.pdf');
}

//donwload pdf from original canvas
function downloadPDF2() {
var canvas = document.querySelector('#myBarChart2');
//creates image
var canvasImg = canvas.toDataURL("image/jpeg");

//creates PDF from img
var doc = new jsPDF('landscape');
doc.setFontSize(20);
doc.text(15, 15, "Grafica de movimiento");
doc.addImage(canvasImg, 'JPEG', 10, 10, 280, 150 );
doc.save('Retiros.pdf');
}

//donwload pdf from original canvas
function downloadPDF3() {
var canvas = document.querySelector('#myLineChart1');
//creates image
var canvasImg = canvas.toDataURL("image/jpeg");

//creates PDF from img
var doc = new jsPDF('landscape');
doc.setFontSize(20);
doc.text(15, 15, "Grafica de movimiento");
doc.addImage(canvasImg, 'JPEG', 10, 10, 280, 150 );
doc.save('Pagos_Servicios.pdf');
} 