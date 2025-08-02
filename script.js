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
    let messages = [];

    if (username < 3) {
        isValid = false;
        messages.push('Your name is have more than 3 letters');
    }

    if (!email.includes('@')) {
        isValid = false;
        messages.push('Your email should include the @ symbol');
    }

    if (password.length < 8) {
        isValid = false;
        messages.push('Your email should have at least 8 characters');
    }

    feedbackDiv.style.display = 'block';

    if (isValid) {
        feedbackDiv.textContent = 'Registration successful!';
        feedbackDiv.style.color = '#28a745';
    } else {
        feedbackDiv.innerHTML = messages.join('<br>');
        backDiv.style.color = '#dc3545';
    }
});