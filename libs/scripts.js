$(document).ready(function(){
$('.slider').slick({
		slidesToShow: 4,
		dots: false,
		arrows:true,
		prevArrow:'.controllers .prev',
		nextArrow:'.controllers .next',	
		  responsive: [
			{
			  breakpoint: 992,
			  settings: {
				slidesToShow: 3
			  }
			},
			{
			  breakpoint: 769,
			  settings: {
				slidesToShow: 2
			  }
			},
			{
			  breakpoint: 480,
			  settings: {
				slidesToShow: 1
			  }
			}
		  ]			

	});     
});