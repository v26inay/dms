$(document).ready(function()
{			
	$('#login').click(function()
	{
		var username=$("#username").val();
		var password=$("#password").val();
		var dataString = 'username='+username+'&password='+password;
		if ($.trim(username).length>0 && $.trim(password).length>0) {		 
			$.ajax({
				type: "POST",
				url: "support/php/indexlogin.php",
				data: dataString,
				cache: false,
				beforeSend: function(){ $("#login").attr("disabled", true); $("#login").val('Connecting...');},
				success: function(data){
					if (data) {
						window.location.href = "../../home.php";
					} else {
						$('#box').shake();
						$("#login").val('Log In')
						$('#login').attr("disabled", false);
						$("#error").html("<span style='color:#cc0000'>Error:</span> <span style='color:#FFFFFF'>Invalid username or password.</span>");
					}
				}
			});					
		}
		return false;
	});				
});