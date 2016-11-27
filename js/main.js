function askQuestions() {

	var firstName = prompt ('What is your first name');
	var lastName = prompt ('What is your last name');
	var fullName = firstName + ' ' + lastName;
	console.log('User is called ' + fullName);

	var faveColour = prompt('What is your favourite colour');

	faveColour = faveColour.toLowerCase().trim();

	if (faveColour == 'red' ||
		faveColour == 'green' || 
		faveColour == 'blue' ||
		faveColour == 'yellow') {

		$('h1').css('color', faveColour);
		$('h2').css('color', faveColour);
		$('h3').css('color', faveColour);
	// $('body'.css('color', faveColour); - change whole body of site 

	}

	//.toLowerCase means case insensitive
	//.trim() eliminates spaces
	 if (firstName.toLowerCase().trim() == 'general' && lastName.toLowerCase().trim() != 'assembly') {
	 		console.log('Greetings, General');
	 }   

	// var age = prompt('How old are you');
	// age = parseInt(age);

	// if (age >= 18) {
	//	console.log('User is an adult');
	// } else {
	// 	console.log('User is a child');
	//}
}

// When the page has loaded
$(function() {

$('img').on('click', askQuestions);

	//when the user clicks an h3 -listen for an event
	$('h3').on('click', function() { 

		// toggle the next element 
		// this ref to direct element clicked on
		// () ref to miliseconds for toggle
		$(this).next().slideToggle(400);

	});

});