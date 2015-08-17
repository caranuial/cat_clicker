$(document).ready(function(){

var numberOfClicks = 0;
var $numberOfClicks = $('#number_of_clicks');

$('#cat_image').click(function() {
	numberOfClicks = numberOfClicks + 1;
	console.log( numberOfClicks );
	$numberOfClicks.text(numberOfClicks);
});
});

