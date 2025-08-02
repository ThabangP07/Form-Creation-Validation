document.addEventListener('DOMContentLoaded', () => {
    const form = document.getElementById('registration-form');
    const feedbackDiv = document.getElementById('form-feedback');

    const username = document.getElementById('username').value.trim();
    const email = document.getElementById('email').value.trim();
    const password = document.getElementById('password').value.trim();

    form.addEventListener('submit', (event) => {
        event.preventDefault();
    })

    let isValid = true;
    let message = [];

    if (username < 3) {
        isValid = false;
        message.push('Your name is have more than 3 letters');
    }
});