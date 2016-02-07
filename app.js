var pre=function(){
	
	//$('#head1').hide();
	$('.pic').hide();
	$('#head1').animate({ opacity: 0, 'marginTop':"-105px" }, 0);
	$('#content').hide();

};

var main=function(){

	$(document).ready(function(){
		$('.pic').fadeIn(4000);	
		$('#head1').animate({opacity:1, 'marginTop':"-10px"}, 1800);
		$('#content').fadeIn(4000);	
	});
	
	$('#scbut').click(function(e){
	
	  e.preventDefault();
	
	$('html,body').animate({
	scrollTop: $("#schd1").offset().top-25	
	}, 250);
	});
	
	$('#tchbut').click(function(e){
	
	  e.preventDefault();
	
	$('html,body').animate({
	scrollTop: $("#tech1").offset().top-25	
	}, 250);
	});
	
	$('#engbut').click(function(e){
	
	  e.preventDefault();
	
	$('html,body').animate({
	scrollTop: $("#engh1").offset().top-25	
	}, 250);
	});

};

$(pre);
$(document).ready(main);