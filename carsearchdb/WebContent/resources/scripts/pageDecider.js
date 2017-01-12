var CarInfo = CarInfo || {};
CarInfo.pageDecider = {};
(function(module,$, undefined){

	module().init = function(){

		$(window).resize(function() {
			if($("#openingImageConent").height() >= 700){
				$("#navbarBottom").addClass("hide");
			}else{
				if($("#navbarBottom").hasClass("hide")){
					$("#navbarBottom").removeClass("hide");
				}
			}
		});

		$("#disclaimer").unbind().click(function(){
			if($('#disclaimerContent').hasClass('hide')){
				$('#disclaimerContent').removeClass('hide');
			}else{
				$('#disclaimerContent').addClass('hide');
			}
		});

		$("[id^='explore']").unbind().click(function(){
			if($("#navBarMain").hasClass("navbar-inverse")){
				$("#navBarMain").removeClass("navbar-inverse");
				$("#navBarMain").addClass("navbar-default");
			}
			$("#openingImageConent").addClass("hide");
			$("#mainDiv").removeClass("backGroundImage");
			$("#navbarBottom").removeClass("hide");
			$("[id^='explore']").addClass("hide");
			$("#deciderContent, #navBarMenuItems").removeClass('hide');
			CarInfo.utils.loadModalCall();
			var url = "/mainlaunch";
			CarInfo.utils.ajaxCallNoData( url, "GET", function(result){
				if(result){
					$("#basicDiv").html(result);
					setTimeout(function(){ $('#loadingModal').modal('hide'); }, 500);
				}
				CarInfo.main.init();
			});
		});

		$("#loginClose").unbind().click(function(){
			$("#adminContentDecider").removeClass('disabled');
			$("#userID").val("");
			$("#password").val("");
			$("#loginModal").modal('hide');
			$("#loginAdmin").parent().removeClass("active");
			if(! $("#credentialsDecision").hasClass("hide")){
				$("#credentialsDecision").addClass("hide");
			}
		});

		$("#goHome").click(function(){
			$("#adminContentDecider").removeClass('disabled');
			if(!$("#multipleRetrieve").is(":visible")){
				$("#multipleRetrieve").hide();
			}
			if(!$("#enterDetailsForm").is(":visible")){
				$("#enterDetailsForm").show();	
			}
			$("#pageHeading").show();
			window.location.href="/";
		});


		$("#login").unbind().click(function(){
			$("#credentialsDecision").addClass("hide");
			var username = $("#userID").val();
			var password = $("#password").val();
			if(username === "" || password === ""){
				$('#textResult').text('Please donot leave any fields blank');
				$("#credentialsDecision").removeClass("hide");
				return;
			}
			var url = "/authentication";
			var data = $("#loginForm").serialize();
			CarInfo.utils.ajaxCall( url, "POST", data, function(result){
				if(result){
					if($(result).filter("#inCorrectData").length === 0){
						$("#adminDiv").html(result);
						$("#adminContentDecider").addClass('disabled');
						$("#loginClose").click();
					}else {
						$('#textResult').text('Invalid Credentials!');
						$("#credentialsDecision").removeClass("hide");
					}
				}
				CarInfo.admin.init();
			});
		});

		$("#adminContentDecider").click(function(){
			if(! $("#adminContentDecider").hasClass('disabled')){
				$("#loginModal").modal({
					backdrop: 'static'
				});
			}

		$( "#loginModal" ).keydown(function( event ) {
			if ( event.which == 13 ) {
				$("#login").click();
			}
		});
	});
	};

})(function() {return CarInfo.pageDecider;}, jQuery);


$( document ).ready(function() {
	CarInfo.pageDecider.init();
});