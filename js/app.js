
$(document).ready(function(){
	
	var random = Math.floor(Math.random() * 101);
	
	$('#guessButton').click(function(e) {
		e.preventDefault();
		var userGuess = $('#userGuess').val();
		var $span = $('#count')
		if (userGuess == "" || (isNaN(userGuess))) {
			alert('Please input a number from 1-100!');
			return;
		} else if (userGuess > 100) {
			alert("Number must be 100 or less!");
			return;
		}
		$('#guessList').append('<li>' + userGuess + '</li>');
		$span.text(Number($span.text()) + 1);
		$('#userGuess').val('');
		})
/*	for (i = 1; i<= userGuess; i++) {
	if ( userGuess != 0) {
        alert('warmer!');
			} else if (userGuess > random) {
    
            } else if (userGuess = random) {

			} else 

    	}
	}
};


	/*--- Display information modal box ---*/
  	$(".what").click(function(){
    	$(".overlay").fadeIn(1000);

  	})

  	/*--- Hide information modal box ---*/
  	$("a.close").click(function(){
  		$(".overlay").fadeOut(1000);
  	})

	$('.new').click(function() {
		location.reload();
	});
	  

});


