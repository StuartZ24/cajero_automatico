var ctx = document.getElementById("myLineChart1");
var array = [ 2988.978,
152.44,
4226.419,
1581.033,
7254.960,
140.792];

var labels = [];
var color1 = [];
var color2 = [];

function r() {
    return Math.random() * 256 >> 0;
}

function colora() {
    return `rgb(${r()}, ${r()}, ${r()}, 0.2)`;    
}

function color() {
    return `rgb(${r()}, ${r()}, ${r()})`;    
}

for (let i = 0; i < array.length; i++) {
    color1.push(colora());
    color2.push(color());
    labels.push('Retiro '+(i+1));
}

var myChart = new Chart(ctx, {
  type: 'line',
  data: {
      labels: labels,
      datasets: [{
          label: 'Cantidad de Retiro en USD',
          data: array,
          backgroundColor: color1,
          borderColor: color2,
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