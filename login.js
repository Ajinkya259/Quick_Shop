const signUpButton = document.getElementById('signUp');
const signInButton = document.getElementById('signIn');
const signUpSubmitButton = document.querySelector('.sign-up-container button');
const signInSubmitButton = document.querySelector('.sign-in-container button');
const container = document.querySelector('.container');

signUpButton.addEventListener('click', () => {
    container.classList.add('right-panel-active');
});

signInButton.addEventListener('click', () => {
    container.classList.remove('right-panel-active');
});

signUpSubmitButton.addEventListener('click', (e) => {
    e.preventDefault();
    // Add your sign-up logic here
    window.location.href = 'index.html';
});

signInSubmitButton.addEventListener('click', (e) => {
    e.preventDefault();
    // Add your sign-in logic here
    window.location.href = 'index.html';
});
