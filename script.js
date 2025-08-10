//Theme toggle system
const themeToggle = document.getElementById("themeToggle");
const themeIcon = themeToggle.querySelector("i");
const theme = document.body.classList;
themeToggle.addEventListener('click', function() {
    if (!theme.contains('dayMode') && !theme.contains('fireTheme') && !theme.contains('greenTheme') && !theme.contains('purpleTheme')) {
        themeIcon.classList.add("bi-fire");
        themeIcon.classList.remove("bi-sun-fill");
        theme.add("dayMode");
        theme.remove("fireTheme", "greenTheme", "purpleTheme");
    } else if (theme.contains('dayMode')) {
        themeIcon.classList.add("bi-leaf-fill");
        themeIcon.classList.remove("bi-fire");
        theme.add("fireTheme");
        theme.remove("dayMode", "greenTheme", "purpleTheme");
    } else if (theme.contains('fireTheme')) {
        themeIcon.classList.add("bi-cpu-fill");
        themeIcon.classList.remove("bi-leaf-fill");
        theme.add("greenTheme");
        theme.remove("dayMode", "fireTheme", "purpleTheme");
    } else if (theme.contains('greenTheme')) {
        themeIcon.classList.add("bi-moon-stars-fill");
        themeIcon.classList.remove("bi-cpu-fill");
        theme.add("purpleTheme");
        theme.remove("dayMode", "fireTheme", "greenTheme");
    } else {
        themeIcon.classList.add("bi-sun-fill");
        themeIcon.classList.remove("bi-moon-stars-fill");
        theme.remove("dayMode", "fireTheme", "greenTheme", "purpleTheme");
    }
});

//Password toggle to Text and opposite
function passwordToggle(iconSpan) {
    const Password = iconSpan.previousElementSibling;
    const toggleIcon = iconSpan.querySelector("i");

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

//Password & Confirm Password should same
const createPassword = document.getElementById("registerPassword");
const confirmPassword = document.getElementById("registerConfirmPassword");

confirmPassword.addEventListener('input', function() {
    if (confirmPassword.value !== createPassword.value) {
        confirmPassword.setCustomValidity("Password did not match!");
    } else {
        confirmPassword.setCustomValidity("");
    }
});

//Login page, Register page & Reset Password page Toggle
const fromLogIn = document.getElementById("fromLogIn");
const fromRegister = document.getElementById("fromRegister");
const toForgetPassword = document.getElementById("toForgetPassword");
const fromForgetPassword = document.getElementById("fromForgetPassword");

const loginForm = document.getElementById("loginForm");
const registerForm = document.getElementById("registerForm");
const forgetPasswordForm = document.getElementById("forgetPasswordForm");

fromLogIn.addEventListener('click', function() {
    loginForm.classList.remove("open");
    loginForm.classList.add("close");
    registerForm.classList.remove("close");
    registerForm.classList.add("open");
});
fromRegister.addEventListener('click', function() {
    registerForm.classList.remove("open");
    registerForm.classList.add("close");
    loginForm.classList.remove("close");
    loginForm.classList.add("open");
});
toForgetPassword.addEventListener('click', function() {
    loginForm.classList.remove("open");
    loginForm.classList.add("close");
    forgetPasswordForm.classList.remove("close");
    forgetPasswordForm.classList.add("open");
});
fromForgetPassword.addEventListener('click', function() {
    forgetPasswordForm.classList.remove("open");
    forgetPasswordForm.classList.add("close");
    loginForm.classList.remove("close");
    loginForm.classList.add("open");
});
