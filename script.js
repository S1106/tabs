'use strict';
$(document).ready(function() {
	let tabs = $('#tabs');
	let allDiv = tabs.find('div');
    let allA = tabs.find('a');

	allDiv.not(':first').hide();
	$('li:first').addClass('active');
	
	allA.bind('click',function(){
			let href = $(this).attr('href');
			$(href).addClass('active1').siblings().removeClass('active1');
			allDiv.hide();
			$(this).closest('li').addClass('active').siblings().removeClass('active');
	});
});