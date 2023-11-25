'use strict';
(function($) {
window.onload = function () {
 		var i = 0;
    
		 var backgroundImage = [
			'https://picsum.photos/id/237/200/300',
			'https://picsum.photos/200/300?grayscale',
			'https://picsum.photos/200/300/?blur'
		  ]
    
		var dhiImage = $('#bgslider')
        dhiImage.css('background-image', 'url(https://picsum.photos/id/237/200/300)')
  
		setInterval(function(){
			  dhiImage.fadeOut(1000, function(){
			  dhiImage.css('background-image', 'url(' + backgroundImage [i++] +')')
			  dhiImage.fadeIn(1000)
			})
			console.log(backgroundImage.length);
			if(i == backgroundImage.length){
				console.log("reiniciando slider");
				 i = 0;
			}
     		
		}, 8000)
  }
})(jQuery);