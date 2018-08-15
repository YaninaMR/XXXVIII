
$(document).ready(function(){

	var useruid = window.location.hash.substring(1);
	  console.log(useruid); 

	    firebase.auth().onAuthStateChanged(function(user) {
	        if (user) {
	            var containerContact = $('#follower-other');
	                   var usercod = user.uid;
	                   console.log(usercod);
				    firebase.database().ref('/user/' + usercod + '/data').on('value', function(snapshot) {
				       console.log(snapshot.child('photo').val());
				       console.log(snapshot.child('name').val());
				       console.log(snapshot.val().photo);
				       console.log(snapshot.val().name);

						var userPhoto = $('<img>', {
						  'class': 'responsive-img circle user img-cont',
						  'src': snapshot.child('photo').val()
						});

						var userPhoto = $('<img>', {
						  'class': 'responsive-img circle user img-cont',
						  'src': snapshot.val().photo
						});

						var pName = $('<h3/>', {
						  'class': 'user-name-profile',
						}).text(snapshot.child('name').val());

						var pName = $('<h3/>', {
						  'class': 'user-name-profile',
						}).text(snapshot.val().name);

						$('#user-photo').append(userPhoto);
						$('#user-name').append(pName);
				    });
	        }
	    });
	
		
});