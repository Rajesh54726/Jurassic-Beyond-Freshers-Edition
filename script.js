// Password protection
const passwordModal = document.getElementById('password-modal');
const passwordInput = document.getElementById('password-input');
const submitPassword = document.getElementById('submit-password');
const passwordHint = document.getElementById('password-hint');

let password = 'jurassic'; // Change this to your desired password

submitPassword.addEventListener('click', () => {
    if (passwordInput.value === password) {
        passwordModal.style.display = 'none';
        // Add code to unlock exclusive content here
    } else {
        passwordHint.textContent = 'Incorrect password. Try again!';
    }
});

// Open password modal on page load
window.onload = () => {
    passwordModal.style.display = 'block';
};
