// Forms
const registerForm = document.forms.namedItem('register');
const loginForm = document.forms.namedItem('login');

let showMessage = (message, status) => {
    const formMessage = document.querySelector('.form-messages');

    formMessage.innerHTML = '';
    formMessage.classList.remove('active', 'active-success', 'active-danger');

    formMessage.classList.add('active', `alert-${status}`);
    formMessage.innerHTML = message;
}

if (registerForm !== null || undefined) {
    registerForm.addEventListener('submit', e => {
        e.preventDefault();

        let fullName = document.querySelector('#fullname');
        let email = document.querySelector('#email');
        let password = document.querySelector('#password');

        if (fullName.value.length < 1 || email.value.length < 1 || password.value.length < 1) {
            // Display Error
            showMessage('All fields must not be empty', 'danger');
        } else {
            let data = {
                'fullname': fullName.value,
                'email': email.value,
                'password': email.value,
            }
            // Display Success
            showMessage('Proceed with registration', 'success');
        }
    });
}

if (loginForm !== null || undefined) {
    loginForm.addEventListener('submit', e => {
        e.preventDefault();

        let email = document.querySelector('#email');
        let password = document.querySelector('#password');

        if (email.value.length < 1 || password.value.length < 1) {
            // Display Error
            showMessage('All fields must not be empty', 'danger');
        } else {
            let data = {
                'email': email.value,
                'password': email.value,
            }
        }
    });
}