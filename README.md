# jquery-is-not-a-function

<h1><b>Uncaught TypeError: $(...).nameofMethod is not a function</b></h1>
<p>This is a good solution when you get the message of error: <b>Uncaught TypeError: $(...).nameofMethod is not a function</b></p>

<h3>Benefits</h3>

<ul>
	<li>You can add jQuery methods without any conflict.</li> 
	<li>You can use whatever versions you like.</li> 
</ul>

<p>To do this you just need to include jQuery & UI and then use it inside a block like the exemple.</p>

<pre>

<script type="text/javascript" src="https://code.jquery.com/jquery-1.8.3.js"></script>
<script type="text/javascript" src="https://code.jquery.com/ui/1.9.0/jquery-ui.js"></script>
<script type="text/javascript">
  
  (function($) {  // important!!!
	// in here it is safe to use $ for jQuery (nowhere else!)
	
	$(function(){
		$( "#datepicker" ).datepicker();
	})
	
   })(jQuery)
	
</script>

</pre>
