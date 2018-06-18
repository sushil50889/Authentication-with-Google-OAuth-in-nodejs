$(document).ready(function(c) {

	$('.close').on('click', function(c){
		$('.login-form').fadeOut('slow', function(c){
	  		$('.login-form').remove();
		});
	});

	$('.close-1').on('click', function(c){
		$('.thank-you').fadeOut('slow', function(c){
	  		$('.thank-you').remove();
		});
	});

});