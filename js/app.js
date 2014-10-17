
$(document).ready(function(){

	var answer;
	var userGuess;
	var guessFlag;
	var guessCount;
	var found = false;


	newGame();


	//takes user guess input
	$('form').submit(function(e) {
		e.preventDefault();
	
	if (!found) {
		userGuess = $('#userGuess').val();
		console.log("user choice is " +userGuess);
		guessFlag=checkChoice(userGuess);
		clearText();
		if (!guessFlag) {
			//records how many guesses to user has made
			guessCount++;
			setCount(guessCount);
			clearText();
			//Adds guessed number to list
			$('#guessList').append('<li>' + userGuess + '</li>');
			//Checks proximity of guessed number from answer
			guessFlag = checkProx(Math.abs(answer - userGuess));
			};
	
	 } 	else {
		setFeedback('You won this game! Click "New Game" to play again!');
		};
	});
	
	//generates random number
	function randomNum() {
		var answer = Math.floor((Math.random() * 100) + 1);
		console.log(answer);

		return answer;

	}



	//checks if input is 100 or less and also a number
		function checkChoice(userGuess) {
			if (userGuess == "" || (isNaN(userGuess))) {
			setFeedback("Please input a number from 1-100!");
			clearText();
			return true;

		} else if (userGuess > 100 || userGuess < 1) {
			setFeedback("Number must be between 1-100!");
			clearText();
			return true;
			
		} else {
			return false;
		}
	}

		
	//compares user guess to random 
		function checkProx(guessDifference) {
			if (guessDifference == 0) {
				setFeedback('You guessed the number! It was ' + answer +'! It took you ' + guessCount + ' tries!');
				found = true;
				return false;
			} else if (guessDifference <=5) {
				setFeedback('You are burning hot!');
				return true;
			} else if (guessDifference <=10) {
				setFeedback('You are getting hot!');
				return true;
			} else if (guessDifference >=10 && guessDifference<=20) {
				setFeedback('You are getting warmer.');
				return true;
			} else if (guessDifference >=20 && guessDifference <=30) {
				setFeedback('You are a little cold.');
				return true;
			} else if (guessDifference >=30 && guessDifference <= 40) {
				setFeedback('Still cold...');
				return true;
			} else {
				setFeedback('You are ice cold!');
				return true;
			}
		}

	//new game perameters
	function newGame() {
		guessFlag = true;
		guessCount = 0;
		setCount(guessCount);
		answer = randomNum();
		clearText();
		found=false;

	}

	//clear text box
	function clearText() {
		$('#userGuess').val('')
	}

	//reloads new games
	$('.new').click(function() {
		location.reload();
		newGame();
	});
	//sets feedback test  
	function setFeedback(feedback) {
	 $('#feedback').replaceWith('<h2 id= "feedback">' +feedback + '</h2>');
	}
	//adds one to count number on each guess	
	function setCount(count) {
		$('#count').text(guessCount);
	}


	/*--- Display information modal box ---*/
  	$(".what").click(function(){
    	$(".overlay").fadeIn(1000);

  	})

  	/*--- Hide information modal box ---*/
  	$("a.close").click(function(){
  		$(".overlay").fadeOut(1000);
  	})

});


