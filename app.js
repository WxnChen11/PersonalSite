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
	}, 300);
	});
	
	$('#engbut').click(function(e){
	
	  e.preventDefault();
	
	$('html,body').animate({
	scrollTop: $("#engh1").offset().top-25	
	}, 350);
	});
	
	$('#matbut').click(function(e){
	
	  e.preventDefault();
	
	$('html,body').animate({
	scrollTop: $("#math1").offset().top-25	
	}, 400);
	});
	
	$('#topbut').click(function(e){
	
	  e.preventDefault();
	
	$('html,body').animate({
	scrollTop: $("#body").offset().top-25	
	}, 250);
	});
	
	$('#topbut1').click(function(e){
	
	  e.preventDefault();
	
	$('html,body').animate({
	scrollTop: $("#body").offset().top-25	
	}, 300);
	});
	
	$('#topbut2').click(function(e){
	
	  e.preventDefault();
	
	$('html,body').animate({
	scrollTop: $("#body").offset().top-25	
	}, 350);
	});
	
	$('#topbut3').click(function(e){
	
	  e.preventDefault();
	
	$('html,body').animate({
	scrollTop: $("#body").offset().top-25	
	}, 400);
	});
	

};

$(pre);
$(document).ready(main);