const validUsername = 'samarthkakade';
const validPassword = '12345678';

document.getElementById('loginForm').addEventListener('submit', function(e) {
    e.preventDefault();

    const enteredUsername = document.getElementById('username').value;
    const enteredPassword = document.getElementById('password').value;

    if (enteredUsername === validUsername && enteredPassword === validPassword) {
        alert('Login successful!');
    } else 
    {
        const errorMessage = document.getElementById('errorMessage');
        errorMessage.style.display = 'block';
    }
});
