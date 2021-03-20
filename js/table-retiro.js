var table2 = document.getElementById("table2"); //Aqui mandamos a buscar el elemento tbody de la tabla 2
var tfoot2 = document.getElementById("tfoot2"); //Aqui mandamos a buscar el elemento tfooter de la tabla 2

var array = JSON.parse(localStorage.getItem('retiro')); //Obtenemos los datos del retiro y lo agregamos a una nueva variable

var labels = [];//Variable de tipo arreglo que servira para guardar nombre de las etiquetas de datos

var sumtotal = 0;//Variable de tipo contador que guardara la suma de todos los retiros

for (let i = 0; i < array.length; i++) {//Recorremos el arreglo de tipo retiro
    labels.push('Retiro '+(i+1));//Luego crearemos las etiquetas de acuerdo a la cantidad de retiros hechos
    sumtotal += parseFloat(array[i]);//Luego sumaremos la cantidad de retiros hechos en el arreglo
}

var matriz = [labels, array];            //Creamos una matriz de acuerdo a los 2 arreglos: label y array
var traspuesta = new Array(array.length);//Creamos una matriz base llamada transpuesta donde la cantidad de elementos sera igual al de array

for (let k = 0; k < array.length; k++) { //Recorremos la matriz transpuesta
    traspuesta[k] = new Array(2);//dentro de cada uno de los espacios creados con anterioridad se creara otro arreglo que tendra una
}//cantidad igual a 2

for (let x = 0; x < 2; x++) {//Recorremos primero las filas de las matrices
    for (let y = 0; y < array.length; y++) {//Luego recorremos las columnas de las matrices
        traspuesta[y][x] = matriz[x][y]//Luego invertimos las posiciones de la matriz a la transpuesta
    }            
}

for (row=0; row < traspuesta.length; row++){                    //Recorremos las filas de la matriz transpuesta
    tr = document.createElement('tr');                          //Creamos un elemento html de tipo tr
    for (col=0; col < traspuesta[row].length; col++){           //Recorremos las columnas de la matriz transpuesta
        td = document.createElement('td');                      //Creamos un elemento html de tipo td
        tn = document.createTextNode(traspuesta[row][col]);     //Creamos el texto que va dentro del h5
        td.appendChild(tn);                                     //y lo agregamos en el td creado
        tr.appendChild(td);                                     //y lo agregamos en el tr creado
    }
table2.appendChild(tr);                                         //luego lo agregamos donde esta el tbody
} 

tr2 = document.createElement('tr')                              //Creamos un elemento html de tipo tr
for (let col2 = 0; col2 < 2; col2++) {                          //Haremos un pequeño recorrido
    th = document.createElement('th')                           //Creamos un elemento html de tipo th
    if(col2 == 0)                                               //Si el valor del recorrido es 0
    {
        tn = document.createTextNode('Total');                  //Entonces creamos la etiqueta que va dentro del th en esa posicion
    }else{                                                      //Sino
        tn = document.createTextNode(sumtotal.toFixed(2));      //Insertamos la suma total del deposito dentro del th
    }
    th.appendChild(tn);                                         //y lo agregamos en el th creado
    tr2.appendChild(th);                                        //y lo agregamos en el tr creado
}
tfoot2.appendChild(tr2);                                        //luego lo agregamos donde esta el tfooter