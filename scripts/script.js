$(document).ready(function(){
  $('.flexslider').flexslider({
    animation: "slide",
    directionNav: false
  });

  $('.p-switchers-item').click(function(){
  	$('.p-gallery').hide().flexslider('stop');
  	var galleryIndex = $(this).index();
  	console.log(galleryIndex);
  	$(".p-gallery-" + (galleryIndex + 1)).show();
  });


});