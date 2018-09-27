const button1 = document.getElementById('click-me-1');
const button2 = document.getElementById('click-me-2');
let helloUser = document.getElementById('hello-user');
let yourAge = document.getElementById('user-age');

let userName;
let userAge;

function clickMyButton() {
    button1.addEventListener('click', function (event) {
        userName = prompt('What is your name?');
        if (userName !== '') {
            helloUser.innerHTML = '¡Hola, ' + userName + '!';
        } else {
            alert("I'm sorry, I didn't catch that. Please try again.");
        };
    });
}

function clickMyButton() {
    button2.addEventListener('click', function (event) {
        userAge = prompt('What is your name?');
        if (userAge !== '') {
            yourAge.innerHTML = 'Tu tiene ' + userAge + ' años.';
        } else {
            alert("I'm sorry, I didn't catch that. Please try again.");
        };
    });
}
clickMyButton();