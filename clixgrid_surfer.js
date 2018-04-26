$(document).ready(function() {	
	ptcevolution_surfer();
});
function showadbar(error){
	$("#pgl").removeAttr("onload");
	if(error == ''){
		$(".adwait").fadeOut(1000, function(){
			$("#surfbar").html('<div class="progressbar" id="progress"><div id="progressbar"></div></div>');
			$("#progressbar").link2progress(secs, function(){
				endprogress('');
			});
		});
	}else{
		$(".adwait").fadeOut(1000, function(){
			$("#surfbar").html("<div class='errorbox'>"+error+"</div>");
			$(".errorbox").fadeIn(1000);
		});
	}	
}
/*	 End Surf Bar */
	function endprogress(){
		 $("#surfbar").html("Please wait...");
		 var jqxhr = $.post("clixgrid.php?do=surf",'x='+x+'&y='+y+'&action=validate&t='+adtk, function(data) {
			if(data.status == 0){
				$("#surfbar").html("<div class='errorbox'>"+data.msg+"</div>");
				$(".errorbox").fadeIn('slow');
			}else{
				$("#surfbar").html("<div class='successbox'>"+data.msg+"</div>");
				$(".successbox").fadeIn('slow');
				window.opener.hidePoistion();
				return false;
			}
	
	   }, "json");
	}	
	function ptcevolution_surfer(){
		if (top != self) {
			try { top.location = self.location; }
			catch (err) { self.location = '/FrameDenied.aspx'; }
		}
		 $("#surfbar").html("<div class='adwait'>"+adwait+"</div>");
	}