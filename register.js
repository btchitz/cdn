function registerform() {
  $.ajax({
    url: 'index.php?view=register_2',
    type: 'POST',
    data: $('#registerform').serialize(),
    beforeSend: function() {
      $('.bg_modal_send_r').show();
      $('#submit_message_r').hide();
    },
    error: function() {
      $('#submit_message_r').html('<div class=\"alert alert-danger\"><strong>Error!</strong> Could not send data, please try again!...</div>');
        $('.bg_modal_send_r').hide();
        $('#submit_message_r').show();
    },
    success: function(data_r) {
      if (data_r == "ok") {
        $('.bg_modal_send_r').hide();
        $('#registerform').hide();
        $("#message_sent").show();
      }else{
        $('.bg_modal_send_r').hide();
        $('#submit_message_r').show();
        $('#submit_message_r').html(data_r);
      }
    }
  });
  return false;
}