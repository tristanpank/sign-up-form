let firstName = document.getElementById('first-name');
let lastName = document.getElementById('last-name');
let email = document.getElementById('email');
let phoneNumber = document.getElementById('phone-number');
let password = document.getElementById('password');
let confirmPassword = document.getElementById('confirm-password');
let submitButton = document.getElementById('create-account');

function checkPassword() {
    if (password.value === confirmPassword.value) {
        confirmPassword.className = 'valid';
        submitButton.type = 'submit';
        console.log(submitButton);
    } else {
        confirmPassword.className = 'invalid';
        submitButton.type = 'button';
        console.log(submitButton);
    }
};

confirmPassword.addEventListener('keyup', checkPassword);

password.addEventListener('keyup', checkPassword);

// submitButton.addEventListener('click', () => {
//     if (checkPassword() === true) {
//         return true;
//     } else {
//         return false;
//     }
// });






// console.log(firstName);
// console.log(lastName);
// console.log(email);
// console.log(phoneNumber);
// console.log(password);
// console.log(confirmPassword);