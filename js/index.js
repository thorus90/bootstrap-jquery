function changeMessageBox (returnData) {
	returnSplit = returnData.split("/");
	returnCode = returnSplit[0];
	returnMessage = returnSplit[1];
	$("#messages").removeClass("alert-success alert-warning alert-danger alert-info");
	$("#messages").addClass("alert");
	$("#messages").addClass("alert-dismissable");
	if ( returnCode == 0 ) {
		$("#messages").addClass("alert-success");
	}
	if ( returnCode == 1 ) {
		$("#messages").addClass("alert-warning");
	}
	if ( returnCode == 2 ) {
		$("#messages").addClass("alert-danger");
	}
	if ( returnCode == 3 ) {
		$("#messages").addClass("alert-info");
	}
	$("#messages").html('<button type="button" class="close" data-dismiss="alert" aria-hidden="true">&times;</button>');
	$("#messages").append(returnMessage);

	return returnCode;
}

function notification (notclass,text,icon) {
	notification = '<div class="alert alert-dismissable' + notclass;
	notification = notification + '<button type="button" class="close" data-dismiss="alert" aria-hidden="true">&times;</button>';
	if (icon != "") {
		notification = notification + '<span class="glyphicon' + icon + '></span>';
	}
	notification = notification + '<label>' + text + '</label></div>';
	
	return notification;
}

function replaceWithTextField ( objectsToReplace ) {
	objectsToReplace.forEach(function(objectToReplace) {
		var Value = $(objectToReplace).html();
		$(objectToReplace).html('<input type="text" value="' + Value + '">');
	});
}

function blockButton ( objectButton , ttl ) {
	objectButton.attr("disabled", "true");
	if ( ttl != 0 ) {
		ttl = ttl * 1000;
		setTimeout(
			function() {
				objectButton.removeAttr("disabled");
			}, ttl );
	}
}
	
$(document).ready(function(){
	target = window.location.hash;
	setTimeout(function() {  //don't know why waiting for 0 millisec helps, but without it does not work
		$("" + target + "").trigger("click");
	},0);

	$(".link").click(function(){
		url = $(this).attr("url");
		aim = "";	//Variable initiieren;
		if(!$(this).attr("aim")){
			aim = "internal"; //Falls nicht angegeben --> internal
		}else{
			aim = $(this).attr("aim");
		}
		if(aim == "internal"){
			$.post(
				url,
				function(data){
					$("#content").html(data);
					$('#content').trigger('contentChanged');
			});
		}
		
		if(aim == "external"){
			$("#content").html('<iframe src="' + url + '"></iframe>');
		}
		document.title = $(this).html();
		navigation = $(this).html();
		$(this).addClass("active");
	});

	$('body').on( "click", ".close_popup", function () {
		event.preventDefault();
        $.magnificPopup.close();
	});
});
