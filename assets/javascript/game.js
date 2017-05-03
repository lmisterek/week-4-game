 

 $(document).ready(function() {

 	var wins = 0;
 	var losses = 0;
 	var myScore;
 	var targetScore;
 	
 	var game = reset();


 	// Update total after clicking on a gem
 	updateScore();

	// Reset the game
	function reset() {

		// Update wins and losses
		changeStats();

		// Get the set of possible values for the gems
		var gemArray = gemValues();
		
		// Create a pointer for the array to shuffle elements
		var i = Math.floor((Math.random() * 4));

		var game = {
			diamondValue: gemArray[i],
			rubyValue: gemArray[(i+1)%4],
			opalValue: gemArray[(i+2)%4],
			sapphireValue: gemArray[(i+3)%4],
		}

		$('#score').html(0);
		myScore = 0;
		targetScore = target();


		return game;
	}

	// Set the target
	function target() {
		
		// Choose target number
		var target = Math.floor((Math.random() * 50) + 30);

		// Put the target number in place of he bullseye
		
		$('#targetScore').html(target);

		return target;
	}

	// Choose a value for each of the gems
	function gemValues() {

		// gemValue Array {2, 3, a number between 4 and 20, a number between 4 and 10}
		var a = Math.floor((Math.random() * 20) + 4)
		var b = Math.floor((Math.random() * 10) + 4)
		var gems = [2, 3, a, b];

		return gems;
	}

	// update Score after click
	function updateScore() {
		$('#score').html(myScore);
		checkforWin();
	}

	function checkforWin() {
		if (myScore === targetScore) {
			wins++;
			alert("You win!");
			gamme = reset();
		}

		else if (myScore > targetScore) {
			alert("Game Over!");
			losses++;
			game = reset();
		}
	}

	function changeStats() {
		$('#winDisplay').html(wins);
		$('#lossDisplay').html(losses);
	}

	// Create click events for the images
	$("#diamond").on("click", function() {
		myScore += game.diamondValue;
		updateScore();
	});

	$("#ruby").on("click", function() {
		myScore += game.rubyValue;
		updateScore();
	});

	$("#opal").on("click", function() {
		myScore += game.opalValue;
		updateScore();
	});

	$("#sapphire").on("click", function() {
		myScore += game.sapphireValue;
		updateScore();
	});

});

