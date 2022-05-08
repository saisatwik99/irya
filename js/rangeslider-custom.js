(function($) { "use strict";


	//Basic

	$('.slider-1').ionRangeSlider();


	//Min & max values

	$('.slider-2').ionRangeSlider({
		min: 200,
		max: 2000,
		from: 850
	});


	//Custom prefix

	$('.slider-3').ionRangeSlider({
		type: "double",
		grid: true,
		min: 0,
		max: 1000,
		from: 200,
		to: 800,
		prefix: "$"
	});


	//Range & step

	$('.slider-4').ionRangeSlider({
		type: "double",
		grid: true,
		min: -1000,
		max: 1000,
		from: -500,
		to: 500
	});


	//Fractional step

	$('.slider-5').ionRangeSlider({
		type: "double",
		grid: true,
		min: -12.8,
		max: 12.8,
		from: -3.2,
		to: 3.2,
		step: 0.1
	});


	//Using postfixes

	$('.slider-6').ionRangeSlider({
		type: "single",
		grid: true,
		min: -90,
		max: 90,
		from: 0,
		postfix: "°"
	});


	//Using Text 

	$('.slider-7').ionRangeSlider({
		type: "double",
		min: 100,
		max: 200,
		from: 125,
		to: 175,
		prefix: "Weight: ",
		postfix: " million pounds",
		decorate_both: true,
		grid: true,
	});


	//Text with month value

	$('.slider-8').ionRangeSlider({
		grid: true,
		from: 6,
		values: [
			"Jan", "Feb", "Mar",
			"Apr", "May", "Jun",
			"Jul", "Aug", "Sep",
			"Oct", "Nov", "Dec"

		]
	});


	//Colors

	$('.slider-9').ionRangeSlider({
		type: "double",
		grid: true,
		min: -1000,
		max: 1000,
		from: -500,
		to: 500
	});
	$('.slider-10').ionRangeSlider({
		type: "double",
		grid: true,
		min: -1000,
		max: 1000,
		from: -500,
		to: 500
	});
	$('.slider-11').ionRangeSlider({
		type: "double",
		grid: true,
		min: -1000,
		max: 1000,
		from: -500,
		to: 500
	});
	$('.slider-12').ionRangeSlider({
		type: "double",
		grid: true,
		min: -1000,
		max: 1000,
		from: -500,
		to: 500
	});
	$('.slider-13').ionRangeSlider({
		type: "double",
		grid: true,
		min: -1000,
		max: 1000,
		from: -500,
		to: 500
	});
	$('.slider-14').ionRangeSlider({
		type: "double",
		grid: true,
		min: -1000,
		max: 1000,
		from: -500,
		to: 500
	});
	$('.slider-15').ionRangeSlider({
		type: "double",
		grid: true,
		min: -1000,
		max: 1000,
		from: -500,
		to: 500
	});
	$('.slider-16').ionRangeSlider({
		type: "double",
		grid: true,
		min: -1000,
		max: 1000,
		from: -500,
		to: 500
	});
    
    
})(jQuery); 