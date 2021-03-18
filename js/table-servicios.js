var table2 = document.getElementById("table3");

var array = JSON.parse(localStorage.getItem('cantipo'));

var tipo = JSON.parse(localStorage.getItem('tipo'));

var matriz = [tipo, array];
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
table3.appendChild(tr);
} 