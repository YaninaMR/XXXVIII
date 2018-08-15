$(document).ready(function() {
 // var data = document.getElementById('dato').value(); 
// var data = $('#dato').val(); 
var db = firebase.database();
//set : sobreescribe el mensaje
$('#enviar').on('click', function(){
    var mensaje = $('#message').val();
    db.ref('mensajes').push({
      mensaje: mensaje
    });
    $('#message').val('');
});

db.ref('mensajes').on('child_added', function(data){
  console.log(data.val());
  $('#chat').append('<p>'+data.val().mensaje+'</p><br>');
    //Data control
});

 


});
