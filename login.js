function hideMessage(){
    $('#submit_message').hide();
}

$(function(){
    $('#loginform').submit(function(){
        $.ajax({
            url: 'index.php?view=login_2',
            type: 'POST',
            data: $('#loginform').serialize(),
            beforeSend: function() {
                $('.bg_modal_send').show();
                $('#submit_message').hide();
            },
            error: function() {
                $('#submit_message').html('<div class=\"alert alert-danger\"><strong>Error!</strong> Could not send data, please try again!...</div>');
                $('.bg_modal_send').hide();
                $('#submit_message').show();
            },
            success: function(data) {
                $('#submit_message').show();
                if (data == "ok") {
                    $("#modal_login").modal("hide");
                    $('#submit_message').html('<div class=\"alert alert-success\"><strong>Login successfully!</strong> We\'re redirecting you to your account...</div>');
                    window.location.href='index.php?view=login&a=y';
                }else{
                    $('.bg_modal_send').hide();
                    $('#submit_message').html(data);
                }
            }
        });
        return false;
    });
});