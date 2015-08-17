$(document).ready(function(){
	
	var catOneName = "Kitie Me";
	var catTwoName = "Kitie Too";
	
	var numberOfClicks = 0;
	var $numberOfClicks = $('#number_of_clicks');
	var numberOfClicks2 = 0;
	var $numberOfClicks2 = $('#number_of_clicks2');
	
	var $floatingHeader1 = $('#floating_header1 span');
	var $floatingHeader2 = $('#floating_header2 span');
	
	$floatingHeader1.text(catOneName);
	$floatingHeader2.text(catTwoName);
	
	$('#cat_image').click(function() {
		numberOfClicks = numberOfClicks + 1;
		$numberOfClicks.text(numberOfClicks);
	});

	$('#cat_image2').click(function() {
		numberOfClicks2 = numberOfClicks2 + 1;
		console.log( numberOfClicks2 );
		$numberOfClicks2.text(numberOfClicks2);
	});
});

