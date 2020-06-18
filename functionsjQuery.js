 jQuery.noConflict();
	(function($) {  // important!!!
		// in here it is safe to use $ for jQuery (nowhere else!)
            $(function(){
                  $( "#datepicker" ).datepicker();
            })
	})(jQuery)
	
