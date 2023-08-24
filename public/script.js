$(document).ready(function() {
    $('#signUpForm').submit(function(event) {
        event.preventDefault();

        var emailInput = $('#floatingEmail').val();

        var emailPattern =  /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;

        if (emailPattern.test(emailInput)) {
            $('#validationMessage').text('Thank you for subscribing!')
            $('#validationMessage').removeClass('error').addClass('success');
        } else {
            $('#validationMessage').text('Please enter a valid email address.');
            $('#validationMessage').removeClass('success').addClass('error');
        }
    });
});