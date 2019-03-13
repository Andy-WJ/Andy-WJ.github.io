(function ($) {
	"use strict";
    
    
    var $body = $("body"),
        $window = $(window);
    
    /*============================= Preload==============================*/

	$(window).load(function () {
    "use strict";
            // Animate loader off screen
            $(".se-pre-con").fadeOut("slow");
            ;
        });

        /*============================= Navigation Section ==============================*/
       
        $('.navbar-collapse').on('click',function(){
          $(".navbar-collapse").collapse('hide');
        });
 
})(jQuery);