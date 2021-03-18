var ctx = document.getElementById("myBarChart1");
var array = [ 2988.978,
    152.44,
    4226.419,
    1581.033,
    7254.960,
    140.792];

var labels = [];
var color1 = [];  

function r() {
    return Math.random() * 256 >> 0;
}

function color() {
    return `rgb(${r()}, ${r()}, ${r()}, 0.2)`;    
}

for (let i = 0; i < array.length; i++) {
    color1.push(color());
    labels.push('Deposito '+(i+1));
}

var myChart = new Chart(ctx, {
  type: 'bar',
  data: {
      labels: labels,
      datasets: [{
          label: 'Cantidad de Deposito en USD',
          data: array,
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