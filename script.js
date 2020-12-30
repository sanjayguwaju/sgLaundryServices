var toggleButton = document.querySelector('.toggle-button');
var mobileNav = document.querySelector('.mobile-nav');
var navIcon = document.getElementById('#nav-icon1');

// toggleButton.addEventListener('click',function(){
//     mobileNav.style.display = 'block';
// });

// Icon 1 

$(document).ready(function(){
	$('navIcon').click(function(){
		$(this).toggleClass('open');
	});
});