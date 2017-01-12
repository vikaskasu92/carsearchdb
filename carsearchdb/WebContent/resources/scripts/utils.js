var CarInfo = CarInfo || {};
CarInfo.utils = {};
(function(module,$, undefined){
	
	module().init = function(){
		CarInfo.utils.ajaxCall();
	};
	module().ajaxCall = function(url, httpMethod, data, callback){
		$.ajax({
			url: url,
			type:httpMethod,
			data:data,
			success: function(response){
				return callback(response);
			},
			error:function(){
				window.location.href="/technicalError";
			}

		});
	};

	module().ajaxCallNoData = function(url, httpMethod, callback){
		$.ajax({
			url: url,
			type:httpMethod,
			success: function(response){
				return callback(response);
			},
			error:function(){
				window.location.href="/technicalError";
			}

		});
	};
	
	module().loadModalCall = function(){
		$('#loadingModal').modal({
			  backdrop: 'static',
			  keyboard: false
			});
	};
	
})(function() {return CarInfo.utils;}, jQuery);


$( document ).ready(function() {
	CarInfo.utils.init();
});