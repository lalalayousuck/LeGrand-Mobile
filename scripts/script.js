$(document).ready(function(){

	setSliderElements();
	
	function setSliderElements (){
		var galleries = galleryURL.gallery1;
		for (var i=0; i<galleries.length; i++) {
			var currentGallery = $('.p-gallery-'+(i+1));
			for (var j=0; j<galleries[i].length; j++) {
				var galleryElem = $('<li><div class="p-gallery-pic" style="background-image: url(' + galleries[i][j] + '")></div></li>');
				currentGallery.find(".slides").append(galleryElem);
			}
		}
	}
	
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