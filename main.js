$(document).ready(function(){
  $('.footright').click(function(){
    msg_go();
  });
  $('.write').keypress(function(event){
    if (event.which == 13) {

    msg_go();
    }


  });

$('.write').focus(function(){
    $('.footright i').toggleClass('fa fa-microphone  fas fa-paper-plane');
});
$('.write').blur(function(){
    $('.footright i').toggleClass('fa fa-microphone  fas fa-paper-plane');
});
});




function msg_go(){
  var text_msg = $('.write').val();

  if(text_msg.length != 0) {
    var new_msg = $('.template .message').clone();
    new_msg.find('.message-text').text(text_msg);
    console.log(new_msg);
    new_msg.addClass('sent');
    $('.right-mess.active').append(new_msg);
    $('.write').val('');
  }

}
