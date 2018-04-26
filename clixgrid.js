$(function(){
	$(".clixgrid_block td").mouseover(function(){
		if($(this).hasClass('clixgrid_clicked') !== true){
		$(this).css({'background':'#FFFFFF', 'filter': 'alpha(opacity=0.5)', 'opacity': '50'}); 
		}
	}).mouseout(function(){
		if($(this).hasClass('clixgrid_clicked') !== true){
		$(this).css({'background':'none', 'filter': 'alpha(opacity=1)', 'opacity': '100'}); 
		}
	});

});
function clixmove(tr,td){
	if(tr == 0 && td == 0){
		$("#position").html('Click anywhere on the picture');
	}else{
		$("#position").html(tr+' x '+td);
	}
}
function clixdo(tr,td){
	window.open('clixgrid.php?do=surf&x='+tr+'&y='+td);
}

function hidePoistion(){
	location.reload(true);
}