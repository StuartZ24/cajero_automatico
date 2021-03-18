var ctx = document.getElementById("myLineChart1");
var array = JSON.parse(localStorage.getItem('cantipo'));

var tipo = JSON.parse(localStorage.getItem('tipo'));

var ContEE = 0;
var ContAP = 0;
var ContI = 0;
var ContT = 0;

for (let i = 0; i < tipo.length; i++) {
    if (tipo[i] === "Energia Electrica") {
        ContEE += parseFloat(array[i]);
    }else if(tipo[i] === "Internet"){
        ContI += parseFloat(array[i]);
    }else if(tipo[i] === "Telefonia"){
        ContT += parseFloat(array[i]);
    }else if(tipo[i] === "Agua Potable"){
        ContAP += parseFloat(array[i]);
    }
}

var arrayTotal = [ContEE, ContI, ContT, ContAP];

var labels = ["Energia Electrica", "Internet", "Telefonia", "Agua Potable"];

var color1 = [];  

function r() {
    return Math.random() * 256 >> 0;
}

function color() {
    return `rgb(${r()}, ${r()}, ${r()}, 0.2)`;    
}

for (let i = 0; i < array.length; i++) {
    color1.push(color());
}

var myChart = new Chart(ctx, {
  type: 'line',
  data: {
      labels: labels,
      datasets: [{
          label: 'Cantidad de Pagos en USD por Categorias',
          data: arrayTotal,
          backgroundColor: color1,
          borderWidth: 1
      }]
  },
  options: {
      scales: {
          y: {
              beginAtZero: true
          }
      }
  }
});