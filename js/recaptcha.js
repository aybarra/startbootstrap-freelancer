var verifyCallback = function( response ) {
//    console.log( 'g-recaptcha-response: ' + response );
    $('#sendEmailBtn').prop('disabled', false);
};

var expiredCallback = function() {
    $('#sendEmailBtn').prop('disabled', true);
    grecaptcha.reset();
};
