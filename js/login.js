/**
 * Set the form control element to valid
 * @param {object} element - The DOM element
 */
function setValid(element) {
    element.classList.remove('is-invalid');
    element.classList.add('is-valid');
}

/**
 * Set the form control element to invalid with the error message
 * @param {object} element - The DOM element
 */
function setInvalid(element) {
    element.classList.remove('is-valid');
    element.classList.add('is-invalid');
}

/**
 * Remove validation information from the element
 * @param {object} element - The DOM element
 */
function removeValidation(element) {
    element.classList.remove('is-valid');
    element.classList.remove('is-invalid');
}

/**
 * Validate the login form and try to log the user in
 * @param {object} event - The DOM event
 */
function login(event) {
    event.preventDefault();
    event.stopPropagation();

    var hasError = false;

    var email = document.getElementById('login-email-control');
    if (email.validity.valid) {
        setValid(email);
    } else if (email.validity.valueMissing) {
        setInvalid(email);
        hasError = true;
    } else {
        setInvalid(email);
        hasError = true;
    }

    var password = document.getElementById('login-password-control');
    if (password.value.trim().length == 0) {
        setInvalid(password);
        hasError = true;
    } else {
        setValid(password);
    }

    if (hasError) {
        document.getElementById('login-error').classList.remove('d-none');
    } else {
        document.getElementById('login-error').classList.add('d-none');
    }
}

/**
 * Validate the login form and try to retrieve the password
 * @param {object} event - The DOM event
 */
function forgot(event) {
    event.preventDefault();
    event.stopPropagation();

    var hasError = false;

    var email = document.getElementById('login-email-control');
    if (email.validity.valid) {
        setValid(email);
    } else if (email.validity.valueMissing) {
        setInvalid(email);
        hasError = true;
    } else {
        setInvalid(email);
        hasError = true;
    }

    var password = document.getElementById('login-password-control');
    removeValidation(password);

    if (hasError) {
        document.getElementById('login-error').classList.remove('d-none');
    } else {
        document.getElementById('login-error').classList.add('d-none');
    }
}

/**
 * Validate the login form and try to register the new user
 * @param {object} event - The DOM event
 */
function register(event) {
    event.preventDefault();
    event.stopPropagation();

    var hasError = false;

    var firstName = document.getElementById('register-first-name-control');
    if (firstName.value.trim().length == 0) {
        setInvalid(firstName);
        hasError = true;
    } else if (firstName.validity.valid) {
        setValid(firstName);
    }

    var lastName = document.getElementById('register-last-name-control');
    if (lastName.value.trim().length == 0) {
        setInvalid(lastName);
        hasError = true;
    } else if (lastName.validity.valid) {
        setValid(lastName);
    }

    var email = document.getElementById('register-email-control');
    if (email.validity.valid) {
        setValid(email);
    } else if (email.validity.valueMissing) {
        setInvalid(email);
        hasError = true;
    } else {
        setInvalid(email);
        hasError = true;
    }

    var password = document.getElementById('register-password-control');
    var passwordValue = password.value.trim();
    if (passwordValue.length < 8) {
        setInvalid(password);
        hasError = true;
    } else if (passwordValue.length > 16) {
        setInvalid(password);
        hasError = true;
    } else if (passwordValue.match(/[a-zA-Z]+/) == null) {
        setInvalid(password);
        hasError = true;
    } else if (passwordValue.match(/[0-9]+/) == null) {
        setInvalid(password);
        hasError = true;
    } else {
        setValid(password);
    }

    var programme = document.getElementById('register-programme-control');
    if (programme.validity.valueMissing) {
        setInvalid(programme);
        hasError = true;
    } else if (!programme.validity.valid) {
        setInvalid(programme);
        hasError = true;
    } else {
        setValid(programme);
    }

    if (hasError) {
        document.getElementById('register-error').classList.remove('d-none');
    } else {
        document.getElementById('register-error').classList.add('d-none');
    }
}

document.addEventListener('DOMContentLoaded', function () {
    document
        .getElementById('login-login-button')
        .addEventListener('click', login, false);

    document
        .getElementById('login-forgot-button')
        .addEventListener('click', forgot, false);

    document
        .getElementById('register-register-button')
        .addEventListener('click', register, false);
}, false);

/**
 * Login form validation 
 */
function loginValidate() {
    let hasError = false;
    var emailControl = document.getElementById('login-email-control');
    var emialError = document.getElementById('login-email-error');
    var pwdControl = document.getElementById('login-password-control');
    var pwdError = document.getElementById('login-password-error');
    var errorHeading = document.getElementById('login-error');
    if (!emailControl.validity.valid) {
        emialError.innerHTML = 'Please correct the email';
        hasError = true;
    } else {
        emialError.innerHTML = '';
    }

    if (pwdControl.validity.valid) {
        pwdError.innerHTML = 'Please correct the password';
        hasError = true;
    } else {
        pwdError.innerHTML = '';
    }

    if (hasError) {
        errorHeading.innerHTML = 'Please correct the errors';
    } else {
        errorHeading.innerHTML = '';
    }
}

const logBtn = document.getElementById('login-login-button');

logBtn.addEventListener('click', loginValidate);

/**
 * Register form validation 
 */
function registerValidate() {

    let hasError = false;
    let errorHeading = document.getElementById('register-error');
    var firstName = document.getElementById('register-first-name-control');
    var firstError = document.getElementById('register-first-name-error');
    if (!firstName.validity.valid) {
        firstError.innerHTML = 'Please correct the firstname';
        hasError = true;
    } else {
        firstError.innerHTML = '';
    }

    var lastName = document.getElementById('register-last-name-control');
    var lastNameError = document.getElementById('register-last-name-error');
    if (!lastName.validity.valid) {
        lastNameError.innerHTML = 'Please correct the lastname';
        hasError = true;
    } else {
        lastNameError.innerHTML = '';
    }

    var email = document.getElementById('register-email-control');
    var emailError = document.getElementById('register-email-error');
    if (!email.validity.valid) {
        emailError.innerHTML = 'Please correct the email';
        hasError = true;
    } else {
        emailError.innerHTML = '';
    }

    var password = document.getElementById('register-password-control');
    var passwordError = document.getElementById('register-password-error');
    if (!password.validity.valid) {
        passwordError.innerHTML = 'Please correct the password';
        hasError = true;
    } else {
        passwordError.innerHTML = '';
    }

    var programme = document.getElementById('register-programme-control');
    var programmeError = document.getElementById('register-programme-error');
    if (programme.validity.valueMissing) {
        programmeError.innerHTML = 'Please correct the password';
        hasError = true;
    } else {
        programmeError.innerHTML = '';
    }

    if (hasError) {
        errorHeading.innerHTML = 'Please correct the errors';
    } else {
        errorHeading.innerHTML = '';
    }
}

const regBtn = document.getElementById('register-register-button');
regBtn.addEventListener('click', registerValidate)