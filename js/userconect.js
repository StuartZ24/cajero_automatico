let username = JSON.parse(localStorage.getItem('user'));

if(username == null){
    location.href = 'index.html';
}