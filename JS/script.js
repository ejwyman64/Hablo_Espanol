const button = document.getElementById('click-me-1');
var helloUser = document.getElementById('hello-user');


button.addEventListener('click', function (event) {
    var userName = prompt('What is your name?');
    console.log(userName);
    if (userName !== null) {
        helloUser.innerHTML += '¡Hola, ' + userName + '!';
    }
});