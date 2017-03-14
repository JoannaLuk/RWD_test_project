$(function(){
console.log('ok');

// Slideshow
var slides = $("#slideshow > div");
var span = $(".container_slider > div");
$("#slideshow > div:gt(0)").hide();

function slideShow () {
	setInterval(function() { 
	  	$('#slideshow > div:first')
	    .fadeOut(1000)
	    .next()
	    .fadeIn(1000)
	    .end()
	    .appendTo('#slideshow');
	},  3000);
}

slideShow();


// Mobile menu
var menu_icon = $('.fa-bars');
var list = $('.nav ul li');

	menu_icon.on('click', function(){
		if(list.css('display') === 'none') {
			list.show();
		} else
 			list.hide();
 	});


// Scroll to
var menu = $('.menu');
var link = menu.find('a')

	link.on('click', function(e){
		e.preventDefault();
		var href = $(this).attr('href');
		$('html, body').animate({scrollTop: $(href).offset().top}, 2000);
	});


// Sticky menu
	var offset = menu.offset().top;
		console.log(offset);
	

	$(window).on('scroll', function(){
		var scroll = $(document).scrollTop();
		if(offset < scroll){
			list.show();
			menu.addClass('sticky');
		} else {
			list.hide();
			menu.removeClass('sticky');
		};
	});


});