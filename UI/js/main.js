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
            let url = 'https://more-recipes.herokuapp.com/api/v1/users/signup';
            let data = {
                "user": {
                    'fullname': fullName.value,
                    'email': email.value,
                    'password': email.value,
                }
            }

            var headers = new Headers();
            headers.append('Content-Type', 'application/json');

            var request = new Request(url, {
                method: 'POST',
                body: JSON.stringify(data),
                headers: headers
            });

            fetch(request)
            .then((res) => res.json())
            .then((data) => {
                if (data.status === 'error') {
                    showMessage(`Error Occured! ${data.message}`, 'error');
                } else {
                    showMessage('Registration was successful. You will be redirected in 10 seconds', 'success');
                    localStorage.setItem('token', data.token);
                    localStorage.setItem('isLogin', true);

                    window.setTimeout(() => {
                        window.location = '/UI/dashboard.html';
                    }, 5000);
                }
            })
            .catch((err) => {
                if (err) showMessage('Unexpected Error Occured! Please try again later', 'error');
            })
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