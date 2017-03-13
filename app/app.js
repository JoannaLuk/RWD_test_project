$(function(){
console.log('ok');

// Slideshow
var slides = $("#slideshow > div");
var span = $(".container_slider > div");
$("#slideshow > div:gt(0)").hide();

setInterval(function() { 
  $('#slideshow > div:first')
    .fadeOut(1000)
    .next()
    .fadeIn(1000)
    .end()
    .appendTo('#slideshow');
},  3000);


console.log(slides,span);



// Mobile menu
var menu_icon = $('.fa-bars');
var list = $('.nav ul li');
console.log(menu_icon, list);

	menu_icon.on('click', function(){
		if(list.css('display') === 'none') {
			list.css('display', 'block')
		} else
 			list.css('display', 'none');
 	});

// Scroll to
var menu = $('.menu');
var link = menu.find('a')

	link.on('click', function(e){
		// console.log('click');
		e.preventDefault();
		var href = $(this).attr('href');
		$('html, body').animate({scrollTop: $(href).offset().top}, 2000);
	});

// Sticky menu
	var nav = $('nav');
	var menu_list = nav.find('.menu');
	var offset = menu_list.offset().top;
		console.log(offset);
	

	$(window).on('scroll', function(){
		var scroll = $(document).scrollTop();
		if(offset < scroll){
			menu_list.addClass('sticky');
		} else {
			menu_list.removeClass('sticky');
		};
	});




})