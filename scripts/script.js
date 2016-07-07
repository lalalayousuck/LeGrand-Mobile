$(document).ready(function(){


  $('.flexslider').flexslider({
    animation: "slide",
    directionNav: false,
  });

  $('.p-switchers-item').click(function(){
  	$('.p-gallery').css({'opacity': 0, 'visibility': 'hidden'});
  	var galleryIndex = $(this).index();
  	console.log(galleryIndex);
  	$(".p-gallery-" + (galleryIndex + 1)).css({'opacity': 1, 'visibility': 'visible'});
  });


});