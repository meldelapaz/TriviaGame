//When the document loads...
$(document).ready(function() {
	
	//"ready!" will show on the console when the page loads
	console.log("ready!");
	

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

	var counter = 5;
	setInterval(function() {

		counter--;
		if (counter >= 0) {
			span = document.getElementById("timer");
			span.innerHTML = counter;
		}
		if (counter === 0) {
			alert('sorry, out of time');
			clearInterval(counter);
			$("#Questionnaire").hide();
			$("#results").removeClass('hide');
		}
	}, 1000);

});



