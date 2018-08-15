$(document).ready(function() {
 $('.modal').modal();   
var input = $('#image_uploads');
var preview = $('.preview');
input.hide();

input.on('change', function() {
 updateImageDisplay(); 
 deletePhoto();
});

function deletePhoto() {
    $('.delete-file').click(function() {
    $(this).parent().parent().remove();
   });
 }

function updateImageDisplay() {
 /* while(preview.children().eq(0).text();) {
    preview.children().eq(0).remove();;
  }*/ //con esto actualizo
  
  var curFiles = input[0].files;
  if(curFiles.length !== 0) {
 
    var list =$('<ol class="col s6 m4 l3" ></ol>');
    preview.append(list);
     for(var i = 0; i < curFiles.length; i++) {

    var listItem = $('<li ></li>');
    var deleteimg = $('<a href="#!" class="secondary-content"><i class="material-icons delete-file">cancel</i></a>');
     list.append(deleteimg);
    var para = $('<p></p>');

      if(validFileType(curFiles[i])) {
        para.eq(0).text(curFiles[i].name);
        var image = $('<img>'); 
        var divpics =$('<div class="pics"></div>');
        var video = $('<img class="imgframe">');
        video.attr('src', window.URL.createObjectURL(curFiles[i]));
       
         listItem.append(divpics);
         divpics.append(video); 

      } else {
    
        para.eq(0).text('File name ' + curFiles[i].name + ': seleccion no valida.');
        listItem.append(para);

      }
      
      list.append(listItem); 
     
    }
  }
}
 var fileTypes = [
    'image/jpeg',
    'image/pjpeg',
    'image/png',
    'video/mp4',
    'video/mp3'
  ]
 function validFileType(file) {
      for(var i = 0; i < fileTypes.length; i++) {
        if(file.type === fileTypes[i]) {
          return true;
        }
      }

    return false;
  }
 /*Galeria de imagenes subidas */
 var areaphotos = $('.arephotos');
 var arrphotos = data["user"]["galery"]["albumns"][1]["photos"];
   
 for(var i=0 ; i < arrphotos.length;i++){
   
  var ancor = $('<a class="big-photo modal-trigger" data-target="modal-lg"></a>');
  var contimg = $('<div class="galery col s6 m4 l3"></div>');
  var imgphoto = $('<img>'); 
  
    
    areaphotos.append(ancor);
    ancor.append(contimg); 
    imgphoto.attr('src','../assets/img/'+ data["user"]["galery"]["albumns"][1]["photos"][i].photo);
    contimg.append(imgphoto);

    localStorage.setItem('image'+ i ,data["user"]["galery"]["albumns"][1]["photos"][i].photo);
   
    
     }

 var ruta= '../assets/img/';
 var index = 0;  
 var $img = $('#img');
 var $sliderimgs = $('.sliderimgs');
 $img.attr('src', ruta + data["user"]["galery"]["albumns"][1]["photos"][0].photo);
  $sliderimgs.on('click', '#next', function(event) {
    event.preventDefault();
    index++;
    index = (index >=  arrphotos.length) ? 0 : index;
    $img.attr('src', ruta + data["user"]["galery"]["albumns"][1]["photos"][index].photo);
  });

  $sliderimgs.on('click', '#back', function(event) {
    event.preventDefault();
    index--;
    index = (index < 0) ?  arrphotos.length - 1 : index;
    $img.attr('src', ruta + data["user"]["galery"]["albumns"][1]["photos"][index].photo);
  });

});