var CarInfo = CarInfo || {};
CarInfo.admin = {};
(function(module,$, undefined){

	module().init = function(){

		$("#saveToDatabase").unbind().click(function(){
			var url = "/saveAdmin";
			var data = $("#saveAdminOperation").serialize();
			CarInfo.utils.ajaxCall( url, "POST", data,function(result){
				if(result){
					$("#pageHeading").removeClass('hide');
				}
			});
		});

		$("#createUser").unbind().click(function(){
			var url = "/createAdmin";
			var data = $("#createAdminForm").serialize();
			CarInfo.utils.ajaxCall( url, "POST", data,function(result){
				if(result){
					// Do Nothing
				}
			});
		});

		$("#retrieveAllTransaction").unbind().click(function(){
			$("#enterDetailsForm").hide();
			$("#adminPageHeading").hide();
			$("#pageHeading").hide();
			var url = "/listOperationAdmin";
			CarInfo.utils.ajaxCallNoData( url, "GET", function(result){
				if(result){
					$("#retrieveDataAdminDiv").html(result);
				}
			});
		});
	};

})(function() {return CarInfo.admin;}, jQuery);


$( document ).ready(function() {
	CarInfo.admin.init();
});