
$(document).ready(function(){
//generates random number
	var random = Math.floor(Math.random() * 101);
	console.log(random);
//takes user guess input
	$('#guessButton').click(function(e) {
		e.preventDefault();
		var userGuess = $('#userGuess').val();
		var $span = $('#count')
//checks if input is 100 or less and a number
		if (userGuess == "" || (isNaN(userGuess))) {
			alert('Please input a number from 1-100!');
			return;
		} else if (userGuess > 100) {
			alert("Number must be 100 or less!");
			return;
		}
//adds guessed number to the list
		$('#guessList').append('<li>' + userGuess + '</li>');
//records how many guesses to user has made
		$span.text(Number($span.text()) + 1);
//compares user guess to random 
		if (userGuess == random) {
			$('#feedback').replaceWith('<h2 id ="feedback">You guessed the number! It was ' + random +'! It took you ' + $span.text() + ' tries!</h2>');
		} else if (userGuess > random) {
			$('#feedback').replaceWith('<h2 id ="feedback">Too high! Guess lower</h2>');
		} else if (userGuess < random) {
			$('#feedback').replaceWith('<h2 id ="feedback">Too low! Guess higher</h2>');
		}
		})




	/*--- Display information modal box ---*/
  	$(".what").click(function(){
    	$(".overlay").fadeIn(1000);

  	})

  	/*--- Hide information modal box ---*/
  	$("a.close").click(function(){
  		$(".overlay").fadeOut(1000);
  	})
//reloads page on new game
	$('.new').click(function() {
		location.reload();
	});
	  

});


