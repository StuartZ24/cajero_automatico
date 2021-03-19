var table1 = document.getElementById("table1");
var tfoot1 = document.getElementById("tfoot1");

var array = JSON.parse(localStorage.getItem('deposito'));

var labels = [];

var sumtotal = 0;

for (let i = 0; i < array.length; i++) {
    labels.push('Deposito '+(i+1));
}

for (let i = 0; i < array.length; i++) {
    sumtotal += parseFloat(array[i]);
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
table1.appendChild(tr);
}

tr2 = document.createElement('tr')
for (let col2 = 0; col2 < 2; col2++) {
    th = document.createElement('th')
    if(col2 == 0)
    {
        tn = document.createTextNode('Total');
    }else{
        tn = document.createTextNode(sumtotal.toFixed(2));
    }
    th.appendChild(tn);
    tr2.appendChild(th);
}
tfoot1.appendChild(tr2);