const userjumbo = document.getElementById('jumbotron');
const btnclose = document.getElementById('close');

let username = JSON.parse(localStorage.getItem('user'));
if(username != null){
    const h5 = document.createElement("h5");
    var t = document.createTextNode("Usuario: "+ username);
    h5.appendChild(t); 
    userjumbo.appendChild(h5);
} else {
    location.href = 'index.html';
}

btnclose.addEventListener("click", function(evento){
    localStorage.clear('user');
    localStorage.clear('saldo');
    localStorage.clear('deposito');
    localStorage.clear('retiro');
    localStorage.clear('tipo');
    localStorage.clear('cantipo');
    location.href = 'index.html';
});