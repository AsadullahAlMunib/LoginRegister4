function PasswordToggle(iconSpan) {
    const Password = iconSpan.previousElementSibling;
    const toggleIcon = iconSpan.querySelector('i');

    if (Password.type === 'password') {
        Password.type = 'text';
        toggleIcon.classList.remove('bi-eye-slash-fill');
        toggleIcon.classList.add('bi-eye-fill');
    } else {
        Password.type = 'password';
        toggleIcon.classList.remove('bi-eye-fill');
        toggleIcon.classList.add('bi-eye-slash-fill');
    }
}


//Password & Confirm Password Should same
const CreatePassword = document.getElementById('RegisterPassword');
const ConfirmPassword = document.getElementById('RegisterConfirmPassword');

ConfirmPassword.addEventListener('input', function() {
    if (CreatePassword.value !== ConfirmPassword.value) {
        ConfirmPassword.setCustomValidity("Password did not Match!");
    } else {
        ConfirmPassword.setCustomValidity("");
    }
});


//LogIn Page, Register Page & Reset Password Page toggle
const fromLogIn = document.getElementById('fromLogIn');
const fromRegister = document.getElementById('fromRegister');
const toResetPassword = document.getElementById('toResetPassword');
const fromResetPassword = document.getElementById('fromResetPassword');

const LogInContainer = document.getElementById('LogInContainer');
const RegisterContainer = document.getElementById('RegisterContainer');
const ResetPasswordContainer = document.getElementById('ResetPasswordContainer');

fromLogIn.addEventListener('click', function() {
    LogInContainer.classList.remove('visible');
    LogInContainer.classList.add('hidden');
    RegisterContainer.classList.remove('hidden');
    RegisterContainer.classList.add('visible');
});
fromRegister.addEventListener('click', function() {
    RegisterContainer.classList.remove('visible');
    RegisterContainer.classList.add('hidden');
    LogInContainer.classList.remove('hidden');
    LogInContainer.classList.add('visible');
});
toResetPassword.addEventListener('click', function() {
    LogInContainer.classList.remove('visible');
    LogInContainer.classList.add('hidden');
    ResetPasswordContainer.classList.remove('hidden');
    ResetPasswordContainer.classList.add('visible');
});
fromResetPassword.addEventListener('click', function() {
    ResetPasswordContainer.classList.remove('visible');
    ResetPasswordContainer.classList.add('hidden');
    LogInContainer.classList.remove('hidden');
    LogInContainer.classList.add('visible');
});


// Example starter JavaScript for disabling form submissions if there are invalid fields
(() => {
    'use strict'

    // Fetch all the forms we want to apply custom Bootstrap validation styles to
    const forms = document.querySelectorAll('.needs-validation')

    // Loop over them and prevent submission
    Array.from(forms).forEach(form => {
        form.addEventListener('submit', event => {
            if (!form.checkValidity()) {
                event.preventDefault()
                event.stopPropagation()
            }

            form.classList.add('was-validated')
        },
            false)
    })
})()
