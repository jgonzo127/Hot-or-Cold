
$(document).ready(function(){
	
	var random = Math.floor(Math.random() * 101);
	
	$('#guessButton').click(function(e) {
		e.preventDefault();
		var userChoice = $('#userGuess').val();
		var $span = $('#count')
		if (userChoice == "") {
			alert('Please input a number!');
			return;
		} else {
			$('#guessList').append('<li>' + userChoice + '</li>');
			}
			$span.text(Number($span.text()) + 1);
		})
/*	for (i = 1; i<= userChoice; i++) {
	if ( userChoice != 0) {
        alert('warmer!');
			} else if (userChoice > random) {
    
            } else if (userChoice = random) {

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


