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
  $('#lens').keyup(usersearch);
  $('.hol').click(usersearch);
  $('.user').click(function(){
    var indy = $(this).index();
    console.log(indy);
    $('.user').removeClass('active');
    $(this).addClass('active');
    $('.right-mess').removeClass('active');
    $('.right-mess').eq(indy).addClass('active');
    var username = $(this).find('.iq').text();
    console.log(username);
    $('.ned').text(username);
    var head = $(this).children('.frame').children('img').attr('src');
    console.log(head);
    $('.hedd').attr('src', head);
    $(document).on('click','message-options',function(){
      $(this).siblings('.message-options-panel').toggleClass('active');
    });
    $('message-destroy').click(function(){
      $(this).closest('message').hide();
    })
  });

// $('#lens').keyup(function(){
//    var search = $(this).val();
//    console.log(search);
//    // $('.user').each(function(){
//    //   console.log($(this));
//    //   var name = $(this).find('.iq').text();
//    //   console.log(name);
//    // });
//    if(search.length != 0) {
//      $('div.user').each(function(){
//        var name = $(this).find('.iq').text();
//        search = search.toLowerCase();
//        name = name.toLowerCase();
//        if (name.includes(search)) {
//          $(this).show();
//
//
//        } else {
//          $(this).hide();
//        }
//      });
//
//    } else {
//      $('div.user').show();
//    }
// });
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
    setTimeout(msg_come, 1000);
  }

}
function msg_come(){
  var feedback = $('.template .message').clone();
  feedback.find('.message-text').text('ok');
  feedback.addClass('received');
  $('.right-mess.active').append(feedback);
}
function usersearch(){
  $('#lens').keyup(function(){
     var search = $(this).val();
     console.log(search);
     // $('.user').each(function(){
     //   console.log($(this));
     //   var name = $(this).find('.iq').text();
     //   console.log(name);
     // });
     if(search.length != 0) {
       $('div.user').each(function(){
         var name = $(this).find('.iq').text();
         search = search.toLowerCase();
         name = name.toLowerCase();
         if (name.includes(search)) {
           $(this).show();


         } else {
           $(this).hide();
         }
       });

     } else {
       $('div.user').show();
     }
  });
}
