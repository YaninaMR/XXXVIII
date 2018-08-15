
$(document).ready(function() {
  var distrito = Object.keys(data);           
  var $rests = $('#container-places');
  var $section = $('#contact-social');
  var $friendcl = $('#friendcl');
  var datauser = Object.keys(data["user"]);
  var amigos = Object.keys(data["user"][datauser[2]][0]);

 for(var i=0;i<data["user"][datauser[2]].length;i++){

    var amigos = Object.keys(data["user"][datauser[2]][i]);
    var $ancor = $('<a href="userChat.html"></a>'),$container = $('<div class="container line"></div>'),
        $contact = $('<div class="row contact"></div>'),$card = $('<div class="col s12"></div>'),
        $col = $('<div class="col s12"></div>'),
        $img = $('<img class="contact-img circle responsive-img avatar">'),
        $spaname = $('<span class="align-left"></span>'),$spanfollow = $('<span class="follow"><button class="follow-btn modal-trigger" data-target="modal-sm">siguiendo</button><button class="hidden unfollow-btn">seguir</button></span>') ;
     
    console.log(data["user"][datauser[2]][i].name);
    console.log(data["user"][datauser[2]][i].photo);
     
     $section.append($ancor);
     $ancor.append($container);
     $container.append($contact);
     $contact.append($card);
     $card.append($col);
     $img.attr('src','../assets/img/'+ data["user"][datauser[2]][i].photo);
     $col.append($img);     
     $col.append($spaname);
     $spaname.append(data["user"][datauser[2]][i].name);
     $col.append($spanfollow);

 }

$('.modal').modal();
$imgfriend = $('<img class="contact-img circle responsive-img avatar">')
var $buttons = $('button.follow-btn');
    
    var $arrbuttons = $.makeArray($buttons);

    $.each($arrbuttons, function(j, val) {
         
        $buttons.eq(j).on('click', function(event) {
    
          event.preventDefault();
              $friendcl.empty();
             localStorage.setItem('image',data["user"][datauser[2]][j].photo); 
             localStorage.setItem('i',j);         
             var $imgmodal = $('<img class="contact-imgmodal  responsive-img avatar">');
             var imagemodal = localStorage.getItem("image");
             var countmodal = localStorage.getItem("i");         
             $imgmodal.attr('src','../assets/img/'+ imagemodal);
             $friendcl.append($imgmodal);
                 
                         
                   //   var $buttonmodal =$(this).parent().parent().parent().parent().parent().parent().parent().parent().siblings().eq(2).children().eq(0).children().eq(0).children().eq(0).siblings().eq(0).children().eq(0).siblings().children().eq(0).children().eq(0);  
          var $buttonmodal = $('button.follow-friend'); 
           $buttonmodal.on('click',function(event){
               event.preventDefault();
                   
                  $buttons.eq(j).hide();
                  console.log(countmodal);
                 //$(this).parent().parent().parent().parent().parent().parent().siblings().eq(2).children().eq(0).children().eq(j).children().eq(0).children().eq(0).children().eq(0).children().eq(0).children().eq(2).children().eq(0).hide();
                  $ubuttons.eq(j).show();                  
                  $('#modal-sm').modal('close');
                //$(this).parent().parent().parent().parent().parent().parent().siblings().eq(2).children().eq(0).children().eq(j).children().eq(0).children().eq(0).children().eq(0).children().eq(0).children().eq(2).children().eq(0).next().show();
                });
          /* $ubuttons.eq(j).on('click',function(){
             $(this).hide();
             $(this).parent().children(':first-child').show();   
                  });*/
          
       });
    }); 
 

 var $ubuttons = $('button.unfollow-btn'); 
  var $arrubuttons = $.makeArray($ubuttons);
  $.each($arrubuttons, function(i, val) {
      $ubuttons.eq(i).on('click', function(event) {
        event.preventDefault();
        localStorage.setItem('k',i);
         $(this).hide();
         $(this).parent().children(':first-child').show();
      });
   }); 

});
