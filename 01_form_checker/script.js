const form = document.getElementById('form');
const username = document.getElementById('username');
const email = document.getElementById('email');
const password = document.getElementById('password');
const password2 = document.getElementById('password2');


function showError(input, message) {
    const formControl = input.parentElement;
    formControl.className = 'form-control error';
    const small = formControl.querySelector('small');
    small.innerText = message;
}

function showSuccess(input) {
    const formControl = input.parentElement;
    formControl.className = 'form-control success';

}

function isValidEmail(email) {
    const re = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    return re.test(String(email).toLowerCase());
}

form.addEventListener('submit', function(e) {
    e.preventDefault();
    
    // dopisz sprawdzenie długości nazwy użytkownika
    // powinna być nie krótsza niż 3 znaki i nie dłuższa niż 15

    if(username.value === '') {
        showError(username, 'Nazwa użytkownika jest wymagana');
    } else if(username.value.length < 3) {
        showError(username, 'Za krótka nazwa użytkownika');
    } else if(username.value.length > 15) {
        showError(username, 'Za długa nazwa użytkownika');

    } else {
        showSuccess(username);
    }
    
    if(email.value === '') {
        showError(email, 'Email jest wymagany');
    } else if(!isValidEmail(email.value)) {
        showError(email, 'Nieprawidłowy formularz Email');
    } else {
        showSuccess(email);
    }

    if(password.value === '') {
        showError(password, 'Hasło jest wymagane');
    } else {
        showSuccess(password);
    }

    if(password2.value === '') {
        showError(password2, 'Potwierdzenie hasła jest wymagane');
    } else {
        showSuccess(password2);
    }
});