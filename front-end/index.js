$(function(){

configureCORS();
submitListener();
console.log("Ready");

})

function configureCORS() {
	$.auth.configure({
  	apiUrl: 'http://cocktail-calc.herokuapp.com/api/v1'
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