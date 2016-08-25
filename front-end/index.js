$(function(){

configureCORS();
submitListener();

})

function configureCORS() {
	$.auth.configure({
  	apiUrl: 'localhost:3000/api/v1'
	});
}

function submitListener() {
	$('#sign-up').on('submit', function(e) {
		e.preventDefault();
		var formData = $('#sign-up').serializeArray();
		console.log(formData)
		$.auth.emailSignUp({
		  email: formData[0].value,
		  password: formData[1].value,
		  password_confirmation: formData[2].value
		});
	})
}