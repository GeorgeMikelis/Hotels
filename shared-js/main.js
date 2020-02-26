jQuery(document).ready(function ($) {

    $('.login-form').validate({
        rules: {
            username: {
                required: true,
                maxlength: 40,
                minlength: 2,
                Uppercase: true
            },
            pass: {
                required: true,
                minlength: 6,
                maxlength: 20,
            },
            
        },
        messages: {
            username: {
                required: 'User name is required',
                minlength: 'No less than 2 letters',
                maxlength: 'Max letters:40',

            },
            pass: {
                minlength:'Password must contain at least 8 characters',
                required: 'Please give a password' ,
            },
        }
    });

    $.validator.addMethod("Uppercase", function (value, element) {
        return this.optional(element) || /[Α-Ω]\S+/.test(value);
    },
        "First letter must be upercase");
});