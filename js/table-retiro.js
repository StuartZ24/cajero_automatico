var table2 = document.getElementById("table2");

var array = [ 2988.978,
152.44,
4226.419,
1581.033,
7254.960,
140.792];

var labels = [];

for (let i = 0; i < array.length; i++) {
    labels.push('Retiro '+(i+1));
}

var matriz = [labels, array];
var traspuesta = new Array(array.length);

for (let k = 0; k < array.length; k++) {
    traspuesta[k] = new Array(2);
}

for (let x = 0; x < 2; x++) {
    for (let y = 0; y < array.length; y++) {
        traspuesta[y][x] = matriz[x][y]
    }            
}

for (row=0; row < traspuesta.length; row++){
    tr = document.createElement('tr');
    for (col=0; col < traspuesta[row].length; col++){
        td = document.createElement('td');
        tn = document.createTextNode(traspuesta[row][col]);
        td.appendChild(tn);
        tr.appendChild(td);
    }
table2.appendChild(tr);
} 