# jquery-is-not-a-function

To add jQuery methods without any conflict. 
You can use whatever versions you like. 
To do this you need to include jQuery & UI, then use it inside a block like the exemple.

<pre>

<script type="text/javascript">
  
  (function($) {  // important!!!
	// in here it is safe to use $ for jQuery (nowhere else!)
	
	$(function(){
		$( "#datepicker" ).datepicker();
	})
	
   })(jQuery)
	
</script>

</pre>
