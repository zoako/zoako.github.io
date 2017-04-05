// placeholder script file for analytics/tracking stuff
$(document).ready(function() {
	console.log("Document loaded");
	$('#greenlight_button').click(function(e) {
		greenlightPressed();
	});

	$('.greenlight_web').click(function(e) {
		greenlightLinked(e.target);
	});

	function greenlightPressed() {
		console.log("Pressing steam link");
		fbq('trackCustom', 'Greenlight Steam Lead');
	}

	function greenlightLinked(target) {
		console.log("Pressing web link: ", target);
		fbq('trackCustom', 'Greenlight Web Lead', {'element': target});
	}
});