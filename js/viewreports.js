$(document).ready(function()
{
	$('#mybutton').click(function()
	{
		var sessionName=$("#sessionName").val();
		var budgetType=$("#box7").val();
		var FinancialYear=$("#box1").val();
		var dataString = 'sessionName='+sessionName+'&budgetType='+budgetType+'&FinancialYear='+FinancialYear;
		if ($.trim(budgetType).length>0) {
		  $.ajax({
		  	type: "POST",
		  	url: "support/php/viewBudgets.php",
		  	data: dataString,
		  	cache: false,
		  	beforeSend: function(){ $("#mybutton").attr("disabled", true); $("#mybutton").val('Fetching...');},
		  	success: function(data){
		  		if (data) {
		  			$("#frameviewreports").html('<a target="_blank" rel="noopener noreferrer" href="'+data+'"><button type="button" class="btn btn-warning btn-sm float-right"><i class="fa fa-external-link" aria-hidden="true"></i>&nbsp;Detach View</button></a><div class="embed-responsive embed-responsive-21by9"><iframe class="embed-responsive-item" src="'+data+'"></iframe></div>');
		  			$("#mybutton").val('Submit');
		  			$('#mybutton').attr("disabled", false);
		  			$("#error").hide();
		  			$("#frameviewreports").show();
		  		} else {
		  			$("#error").html("<span style='color:#cc0000'>Error: Unauthorized user / Report not uploaded.</span>");
		  			$("#mybutton").val('Submit');
		  			$('#mybutton').attr("disabled", false);
		  			$("#frameviewreports").hide();
		  			$("#error").show();
		  		}
		  	}
		  });
		}
		return false;
	});
	$('#mybutton1').click(function()
	{
		var sessionName=$("#sessionName").val();
		var cashflowType=$("#dropdownSelection").val();
		if (cashflowType==="Daily Cash Flow") {var daate=$("#date").val();}
		if (cashflowType==="Monthly Cash Flow") {var daate=$("#yearmonth1").val();}
		if (cashflowType==="Projected Cash Flow") {var daate=$("#yearmonth3").val();}
		var dataString = 'sessionName='+sessionName+'&cashflowType='+cashflowType+'&daate='+daate;
		if ($.trim(cashflowType).length>0) {
		  $.ajax({
		  	type: "POST",
		  	url: "support/php/viewCashflow.php",
		  	data: dataString,
		  	cache: false,
		  	beforeSend: function(){ $("#mybutton1").attr("disabled", true); $("#mybutton1").val('Fetching...');},
		  	success: function(data){
		  		if (data) {
		  			$("#frameviewreports").html('<a target="_blank" rel="noopener noreferrer" href="'+data+'"><button type="button" class="btn btn-warning btn-sm float-right"><i class="fa fa-external-link" aria-hidden="true"></i>&nbsp;Detach View</button></a><div class="embed-responsive embed-responsive-21by9"><iframe class="embed-responsive-item" src="'+data+'"></iframe></div>');
		  			$("#mybutton1").val('Submit');
		  			$('#mybutton1').attr("disabled", false);
		  			$("#error").hide();
		  			$("#frameviewreports").show();
		  		} else {
		  			$("#error").html("<span style='color:#cc0000'>Error: Unauthorized user / Report not uploaded.</span>");
		  			$("#mybutton1").val('Submit');
		  			$('#mybutton1').attr("disabled", false);
		  			$("#frameviewreports").hide();
		  			$("#error").show();
		  		}
		  	}
		  });
		}
		return false;
	});
	$('#mybutton2').click(function()
	{
		var sessionName=$("#sessionName").val();
		var misType=$("#box5").val();
		var YearMonth=$("#yearmonth2").val();
		var dataString = 'sessionName='+sessionName+'&misType='+misType+'&YearMonth='+YearMonth;
		if ($.trim(misType).length>0) {
		  $.ajax({
		  	type: "POST",
		  	url: "support/php/viewMis.php",
		  	data: dataString,
		  	cache: false,
		  	beforeSend: function(){ $("#mybutton2").attr("disabled", true); $("#mybutton2").val('Fetching...');},
		  	success: function(data){
		  		if (data) {
		  			$("#frameviewreports").html('<a target="_blank" rel="noopener noreferrer" href="'+data+'"><button type="button" class="btn btn-warning btn-sm float-right"><i class="fa fa-external-link" aria-hidden="true"></i>&nbsp;Detach View</button></a><div class="embed-responsive embed-responsive-21by9"><iframe class="embed-responsive-item" src="'+data+'"></iframe></div>');
		  			$("#mybutton2").val('Submit');
		  			$('#mybutton2').attr("disabled", false);
		  			$("#error").hide();
		  			$("#frameviewreports").show();
		  		} else {
		  			$("#error").html("<span style='color:#cc0000'>Error: Unauthorized user / Report not uploaded.</span>");
		  			$("#mybutton2").val('Submit');
		  			$('#mybutton2').attr("disabled", false);
		  			$("#frameviewreports").hide();
		  			$("#error").show();
		  		}
		  	}
		  });
		}
		return false;
	});
});