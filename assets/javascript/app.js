//When the document loads...
$(document).ready(function() {
	
	//"ready!" will show on the console when the page loads
	console.log("ready!");
	
	var correctAnswers = 0;
	var incorrectAnswers = 0;

   $('input[name=group1]').change(function(){
    if($('input[name=group1]:checked').val() === "correct") {
		console.log("chose correct answer");
		correctAnswers++;
		span = document.getElementById("correctanswers");
		span.innerHTML = correctAnswers;	
    }
    else {
    	console.log("chose wrong answer");
    	incorrectAnswers++;
    	span = document.getElementById("incorrectanswers");
		span.innerHTML = incorrectAnswers;
    }
  	});

   $('input[name=group2]').change(function(){
    if($('input[name=group2]:checked').val() === "correct") {
		console.log("chose correct answer");
		correctAnswers++;
		span = document.getElementById("correctanswers");
		span.innerHTML = correctAnswers;	
    } else {
    	console.log("chose wrong answer");
    	incorrectAnswers++;
    	span = document.getElementById("incorrectanswers");
		span.innerHTML = incorrectAnswers;
    }
  	});

   $('input[name=group3]').change(function(){
    if($('input[name=group3]:checked').val() === "correct") {
		console.log("chose correct answer");
		correctAnswers++;
		span = document.getElementById("correctanswers");
		span.innerHTML = correctAnswers;	
    } else {
    	console.log("chose wrong answer");
    	incorrectAnswers++;
    	span = document.getElementById("incorrectanswers");
		span.innerHTML = incorrectAnswers;
    }
  	});

   $('input[name=group4]').change(function(){
    if($('input[name=group4]:checked').val() === "correct") {
		console.log("chose correct answer");
		correctAnswers++;
		span = document.getElementById("correctanswers");
		span.innerHTML = correctAnswers;	
    } else {
    	console.log("chose wrong answer");
    	incorrectAnswers++;
    	span = document.getElementById("incorrectanswers");
		span.innerHTML = incorrectAnswers;
    }
  	});



  });



//When the button is clicked...
$("#startbutton").on("click", function() {

	//show that the start button has been clicked on the console
	console.log(this);

	//the questionnarie will be uncovered
	$(function (){
		$('#Questionnaire').removeClass('hidden');
	});

	//hide the button
	$("#startbutton").hide();

	var timeLeft = 30;
	var timerId = setInterval(countdown, 1000);

	function countdown() {
		if (timeLeft == 0) {
			clearTimeout(timerId);
			$("#Questionnaire").hide();
			$("#results").removeClass('hide');
		} else {
			span = document.getElementById("timer");
			span.innerHTML = timeLeft;
			timeLeft--;
		}
	}

});


$("#submitbutton").on("click", function() {
	console.log("Submit button clicked");
			$("#Questionnaire").hide();
			$("#results").removeClass('hide');

});






