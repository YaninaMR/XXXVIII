$('.slider').slider();
$(document).ready(function(){
    
    var db = firebase.database();
    var anexosRef = db.ref('anexos');

    anexosRef.on('value',showData,showError);

    function showData(items){
    	console.log(items.val());
    }
    function showError(err){
    	console.log(err);
    }

    anexosRef.orderByChild('name').on('value',showData1,showError1);
    function showData1(items){
    	var _select = $('<select>');
    	var _content = '';
         
      items.forEach(function(child){
      	console.log(child.val().code);
      	console.log(child.val().name);
      	_select.append( $('<option></option>').val(child.val().code).text(child.val().name));
      }) 

      $('#selectCity').append(_select.html());  

    }

    function showError1(err){
    	console.log(err);
    }

    


 	function loginfacebook(){
	    var provider = new firebase.auth.FacebookAuthProvider();	  
	    provider.addScope('public_profile');  
	   
		firebase.auth().signInWithPopup(provider).then(function(result) {		
		  // This gives you a Facebook Access Token. You can use it to access the Facebook API.		
		   var token = result.credential.accessToken;		
		  // The signed-in user info.		
		   var user = result.user;
          //var photo = result.photoURL;
          //var name = result.displayName;
          //console.log('user:'+ user + 'photo'+photo+'nombre:'+name); 
          	   var name = user.displayName;
			   console.log(name);
		      var icon = user.photoURL;
		       console.log(icon);
		      var userCode = user.uid;
		       console.log(userCode);
			  // save data user
		      var userRef = firebase.database().ref('users').child(userCode);
		      console.log(userRef);
		      // guardando datos del usuario en la base datos
		      var firebasePostREsfName = userRef.child('name');
		      firebasePostREsfName.set(name);
		      var firebasePostREsfIcon = userRef.child('icon');
		      firebasePostREsfIcon.set(icon); 			
		    initFirebase(user);		
	    }).catch(function(error) {		
		   		
		   var errorCode = error.code;		
		   var errorMessage = error.message;			
		   var email = error.email; // The email of the user's account used.		  
		   var credential = error.credential; // The firebase.auth.AuthCredential type that was used.		
			
		});		
    }

   $('#btn-facebook').on('click', loginfacebook);
});

                          //result.user
	function initFirebase(usuario) {
	  firebase.auth().onAuthStateChanged(function(usuario) {
         //--
            var name = usuario.displayName;
		   console.log(name);
		    var icon = usuario.photoURL;
		     console.log(icon);
		    var userCode = usuario.uid;
		     console.log(userCode);
		  // save data user
		    var userRef = firebase.database().ref('users').child(userCode);
		     console.log(userRef);
		     // guardando datos del usuario en la base datos
		    var firebasePostREsfName = userRef.child('name');
		    firebasePostREsfName.set(name);
		    var firebasePostREsfIcon = userRef.child('icon');
		    firebasePostREsfIcon.set(icon);

	  	//--
		if (usuario) {
		  //var uid = user.uid;                            //result.user.uid 
		 // userConect = firebase.database().ref('/user/' + usuario.uid + '/data');
		  
	     firebase.database().ref('/user/' + usuario.uid + '/data').on('value', function(snapshot) {
			console.log(snapshot.val());
			if (snapshot.val() !== null) {
			  if (snapshot.val().uid === usuario.uid) {
				console.log('usuario ya registrado anteriormente');
				window.location.href = 'espacioFotos11.html';
			  }
			} else {
			  // conecto a la base de datos creo la referencia user y llamo a addUserDb
			   console.log('usuario nuevo' + usuario.uid + usuario.displayName + usuario.photoURL);
			   addUserDb(usuario.uid, usuario.displayName, usuario.photoURL);
			   window.location.href = 'espacioFotos11.html'; // Por si acaso
			}
		  });
		}
	   });

	}
   
    function addUserDb(uid, name, photo) {
	  userConect = firebase.database().ref('/user/' + uid + '/data');
	  var conect = userConect.set({
		uid: uid,
		name: name,
		photo: photo
	  });
	  // console.log("Usuario nuevo REGISTRADO");

	  window.location.href = 'espacioFotos11.html';
	}  

    
      
    


