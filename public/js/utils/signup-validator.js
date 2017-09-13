/* globals $ */

// email ELs
$('body').on('blur', '#email', (e) => validateEmail());
$('body').on('blur', '#username', (e) => validateUsername());
$('body').on('keyup', '#confirm', (e) => validatePassword());
$('body').on('click', 'button[type=button]', () => validateForm());
$('body').on('focus', '.invalid',
    (e) => $(e.target).css('background-color', 'rgb(255,255,255)'));

function validateEmail() {
    const $email = $('#email').val();
    const $templateMail =
    /^([_a-zA-Z0-9-]+)(\.[_a-zA-Z0-9-]+)*@([a-zA-Z0-9-]+\.)+([a-zA-Z]{2,3})$/;
    if ($templateMail.test($email)) {
        $('#email-status').html(
            '<span class="valid">Valid Email address!</span>');
        $('#email').removeClass('invalid');
    } else {
        $('#email-status').html(
            '<span class="warning">Email address is not valid yet.</span>');
        $('#email').addClass('invalid');
    }
}

function validateUsername() {
    const $username = $('#username').val();
    if ($username.length < 6) {
        $('#username-status').html(
            '<span class="warning">Username must be 6 symbols or more!</span>');
        $('#username').addClass('invalid');
    } else {
        $('#username-status').html(
            '<span class="valid">Valid Username!</span>');
        $('#username').removeClass('invalid');
    }
}

function validatePassword() {
    const $pass1 = $('#password').val();
    const $pass2 = $('#confirm').val();
    if ($pass1 !== $pass2) {
        $('#confirm-status').html(
            '<span class="warning">Passwords don\'t match!</span>');
        $('#confirm').addClass('invalid');
    } else {
        $('#confirm-status').html(
            '<span class="valid">Passwords match!</span>');
        $('#confirm').removeClass('invalid');
    }
}

function validateForm() {
    if ($('.invalid').length > 0) {
        $('.invalid').each((i, input) =>
        $(input).css('background-color', 'rgba(255,0,0,0.5)'));
        return;
    }
    $('form').submit();
}
