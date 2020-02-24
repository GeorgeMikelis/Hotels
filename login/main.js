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
                required: 'Ε...Το ονοματεπώνυμο είναι υποχρεωτικό.',
                minlength: 'Λιγότερα από 2 γράμματα, no fun!',
                maxlength: '40 Χαρακτήρες είναι πολλοί!',

            },
            pass: {
                minlength:'Ο κωδικός πρέπει να είναι μεγαλύτερος από 8 χαρακτήρες',
                required: 'Παρακαλώ δώστε password' ,
            },
        }
    });

    $.validator.addMethod("Uppercase", function (value, element) {
        return this.optional(element) || /[Α-Ω]\S+/.test(value);
    },
        "Γράψτε το πρώτο γράμμα κεφαλαίο!");
});