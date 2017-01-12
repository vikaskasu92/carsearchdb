var CarInfo = CarInfo || {};
var imageAlter;
var storage = [];
var modelFlagHighLow;
var modelFlagBlank;
var modelFlagNumeric;
var modelFlagZero;
var minMaxHPowerBoolean1;
var blankMinHPowerBoolean1;
var blankMaxHPowerBoolean1;
var nanMinHPowerBoolean1;
var nanMaxHPowerBoolean1;
var minMaxPriceBoolean1;
var blankMinPriceBoolean1;
var blankMaxPriceBoolean1;
var nanMinPriceBoolean1;
var nanMaxPriceBoolean1;
var zeroMinHPowerBoolean1;
var zeroMaxHPowerBoolean1;
var zeroMinPriceBoolean1;
var zeroMaxPriceBoolean1;

var minMaxHPowerBoolean2;
var blankMinHPowerBoolean2;
var blankMaxHPowerBoolean2;
var nanMinHPowerBoolean2;
var nanMaxHPowerBoolean2;
var minMaxPriceBoolean2;
var blankMinPriceBoolean2;
var blankMaxPriceBoolean2;
var nanMinPriceBoolean2;
var nanMaxPriceBoolean2;
var zeroMinHPowerBoolean2;
var zeroMaxHPowerBoolean2
var zeroMinPriceBoolean2;
var zeroMaxPriceBoolean2;

var minMaxHPowerBoolean3;
var blankMinHPowerBoolean3;
var blankMaxHPowerBoolean3;
var nanMinHPowerBoolean3;
var nanMaxHPowerBoolean3;
var minMaxPriceBoolean3;
var blankMinPriceBoolean3;
var blankMaxPriceBoolean3;
var nanMinPriceBoolean3;
var nanMaxPriceBoolean3;
var zeroMinHPowerBoolean3;
var zeroMaxHPowerBoolean3;
var zeroMinPriceBoolean3;
var zeroMaxPriceBoolean3;

CarInfo.main = {};
(function(module,$, undefined){

	module().init = function(){
		CarInfo.main.onChangeEvents();
		CarInfo.main.clickEvents();
		CarInfo.main.setInitialValues();
	};

	module().setInitialValues = function(){
		$("#minHPowerAndYear1").val(0);
		$("#minHPowerAndYear2").val(0);
		$("#minHPowerAndYear3").val(0);
		$("#maxHPowerAndYear1").val(0);
		$("#maxHPowerAndYear2").val(0);
		$("#maxHPowerAndYear3").val(0);
		$("#minPrice1").val(0);
		$("#minPrice2").val(0);
		$("#minPrice3").val(0);
		$("#maxPrice1").val(0);
		$("#maxPrice2").val(0);
		$("#maxPrice3").val(0);
	};

	module().setInitialBooleanValues = function(){
		imageAlter = "false";
		modelFlagHighLow = "false";
		modelFlagBlank = "false";
		modelFlagNumeric = "false";
		modelFlagZero = "false";
		minMaxHPowerBoolean1 = "false";
		blankMinHPowerBoolean1 = "false";
		blankMaxHPowerBoolean1 = "false";
		nanMinHPowerBoolean1 = "false";
		nanMaxHPowerBoolean1 = "false";
		minMaxPriceBoolean1 ="false";
		blankMinPriceBoolean1 = "false";
		blankMaxPriceBoolean1 = "false";
		nanMinPriceBoolean1 = "false";
		nanMaxPriceBoolean1 = "false";
		zeroMinHPowerBoolean1 = "false";
		zeroMaxHPowerBoolean1 = "false";
		zeroMinPriceBoolean1 = "false";
		zeroMaxPriceBoolean1 = "false";
		minMaxHPowerBoolean2 = "false";
		blankMinHPowerBoolean2 = "false";
		blankMaxHPowerBoolean2 = "false";
		nanMinHPowerBoolean2 = "false";
		nanMaxHPowerBoolean2 = "false";
		minMaxPriceBoolean2 ="false";
		blankMinPriceBoolean2 = "false";
		blankMaxPriceBoolean2 = "false";
		nanMinPriceBoolean2 = "false";
		nanMaxPriceBoolean2 = "false";
		zeroMinHPowerBoolean2 = "false";
		zeroMaxHPowerBoolean2 = "false";
		zeroMinPriceBoolean2 = "false";
		zeroMaxPriceBoolean2 = "false";
		minMaxHPowerBoolean3 = "false";
		blankMinHPowerBoolean3 = "false";
		blankMaxHPowerBoolean3 = "false";
		nanMinHPowerBoolean3 = "false";
		nanMaxHPowerBoolean3 = "false";
		minMaxPriceBoolean3 ="false";
		blankMinPriceBoolean3 = "false";
		blankMaxPriceBoolean3 = "false";
		nanMinPriceBoolean3 = "false";
		nanMaxPriceBoolean3 = "false";
		zeroMinHPowerBoolean3 = "false";
		zeroMaxHPowerBoolean3 = "false";
		zeroMinPriceBoolean3 = "false";
		zeroMaxPriceBoolean3 = "false";
	};

	module().onChangeEvents = function(){
		$(document).on('change',function(){
			var dropDownOption2 = $("#searchBy2Select").val();
			var dropDownOption3 =  $("#searchBy3Select").val();
			if(dropDownOption2 === "Select One"){
				dropDownOption2 = "";
			}if(dropDownOption3 === "Select One"){
				dropDownOption3 = "";
			}
			var dropDownOption1 = $("#searchBy1Select").val();

			if(dropDownOption1 != "Select One"){
				if($("#searchBy3").hasClass('hide') && $("#searchBy2").hasClass('hide')){
					if($("#addCategory1").hasClass('hide')){
						$("#addCategory1").removeClass('hide');		
					};
					if(! $("#price1").hasClass('hide')){
						$("#price1").addClass('hide');
					}else if(! $("#hPowerAndYear1").hasClass('hide')){
						$("#hPowerAndYear1").addClass('hide');
					}
					if(dropDownOption1 === "Horse Power" || dropDownOption1 === "milesPerGallonCity"){
						$("#hPowerAndYear1").removeClass('hide');
					}else if(dropDownOption1 === "Price"){
						$("#price1").removeClass('hide');
					}
				}
				else {
					if(! $("#price1").hasClass('hide')){
						$("#price1").addClass('hide');
					}else if(! $("#hPowerAndYear1").hasClass('hide')){
						$("#hPowerAndYear1").addClass('hide');
					}
					if(dropDownOption1 === "Horse Power" || dropDownOption1 === "milesPerGallonCity"){
						$("#hPowerAndYear1").removeClass('hide');
					}else if(dropDownOption1 === "Price"){
						$("#price1").removeClass('hide');
					}

				}

				if($("#addCategory1").hasClass('hide')){
					if(dropDownOption2 === dropDownOption1){
						$("#uniqueModal").modal();
						$("#searchBy2Select").val("Select One");
						if(! $("#price2").hasClass('hide')){
							$("#price2").addClass('hide');
						}else if(! $("#hPowerAndYear2").hasClass('hide')){
							$("#hPowerAndYear2").addClass('hide');
						}
					}else if(dropDownOption2 != "Select One" && dropDownOption2 != ""){
						if(dropDownOption2 === "Horse Power" || dropDownOption2 === "milesPerGallonCity"){
							if(! $("#price2").hasClass('hide')){
								$("#price2").addClass('hide');
							}
							$("#hPowerAndYear2").removeClass('hide');
						}else if(dropDownOption2 === "Price"){
							if(! $("#hPowerAndYear2").hasClass('hide')){
								$("#hPowerAndYear2").addClass('hide');
							}
							$("#price2").removeClass('hide');
						}
					}
					if($("#addCategory2").hasClass('hide')){
						if((dropDownOption3 === dropDownOption2) || (dropDownOption3 == dropDownOption1)){
							$("#uniqueModal").modal();
							$("#searchBy3Select").val("Select One");
							if(! $("#price3").hasClass('hide')){
								$("#price3").addClass('hide');
							}else if(! $("#hPowerAndYear3").hasClass('hide')){
								$("#hPowerAndYear3").addClass('hide');
							}
						}
						else if(dropDownOption3 != "Select One" && dropDownOption3 != ""){
							if(dropDownOption3 === "Horse Power" || dropDownOption3 === "milesPerGallonCity"){
								if(! $("#price3").hasClass('hide')){
									$("#price3").addClass('hide');
								}
								$("#hPowerAndYear3").removeClass('hide');
							}else if(dropDownOption3 === "Price"){
								if(! $("#hPowerAndYear3").hasClass('hide')){
									$("#hPowerAndYear3").addClass('hide');
								}
								$("#price3").removeClass('hide');
							}
						}
					}
				}
			}
		});
	};

	module().clickEvents = function(){

		$("[id^='pageNo']").unbind().click(function() {
			CarInfo.utils.loadModalCall();
			var currentId = $(this).attr("id");
			var PageNumber = currentId.substring(6,10);
			if(storage[PageNumber] != ""){
				$("#uniqueSelector").html($(storage[PageNumber]).filter("#uniqueSelector"));
				$('#loadingModal').modal('hide');
				CarInfo.main.clickEvents();
			}else{
				var url = "/pageResult?pageNo="+PageNumber;
				var data = $("#searchCategoryForm").serialize();
				CarInfo.utils.ajaxCall( url, "POST", data, function(result){
					if(result){
						$("#uniqueSelector").html($(result).filter("#uniqueSelector"));
						$('#loadingModal').modal('hide');
						storage[PageNumber] = result;
					}
					CarInfo.main.clickEvents();
				});
			}
		});

		$("[id^='engineDetails']").unbind().click(function() {
			var currentId = $(this).attr("id");
			var idNumber = currentId.substring(13,20);
			if($("#"+currentId).parent().hasClass("active")){
				// Do Nothing
			}else{
				if($("#driveTrainDetails"+idNumber).parent().hasClass("active")){
					$("#tabDriveTrainDetails"+idNumber).addClass("hide");
					$("#driveTrainDetails"+idNumber).parent().removeClass("active");
				}else if($("#chassisDetails"+idNumber).parent().hasClass("active")){
					$("#tabChassisDetails"+idNumber).addClass("hide");
					$("#chassisDetails"+idNumber).parent().removeClass("active");
				}
				$("#tabEngineDetails"+idNumber).removeClass("hide");
				$("#"+currentId).parent().addClass("active");
			}
			
		});
		
		$("[id^='driveTrainDetails']").unbind().click(function() {
			var currentId = $(this).attr("id");
			var idNumber = currentId.substring(17,22);
			if($("#"+currentId).parent().hasClass("active")){
				// Do Nothing
			}else{
				if($("#engineDetails"+idNumber).parent().hasClass("active")){
					$("#tabEngineDetails"+idNumber).addClass("hide");
					$("#engineDetails"+idNumber).parent().removeClass("active");
				}else if($("#chassisDetails"+idNumber).parent().hasClass("active")){
					$("#tabChassisDetails"+idNumber).addClass("hide");
					$("#chassisDetails"+idNumber).parent().removeClass("active");
				}
				$("#tabDriveTrainDetails"+idNumber).removeClass("hide");
				$("#"+currentId).parent().addClass("active");
			}
			
		});
		
		$("[id^='chassisDetails']").unbind().click(function() {
			var currentId = $(this).attr("id");
			var idNumber = currentId.substring(14,20);
			if($("#"+currentId).parent().hasClass("active")){
				// Do Nothing
			}else{
				if($("#driveTrainDetails"+idNumber).parent().hasClass("active")){
					$("#tabDriveTrainDetails"+idNumber).addClass("hide");
					$("#driveTrainDetails"+idNumber).parent().removeClass("active");
				}else if($("#engineDetails"+idNumber).parent().hasClass("active")){
					$("#tabEngineDetails"+idNumber).addClass("hide");
					$("#engineDetails"+idNumber).parent().removeClass("active");
				}
				$("#tabChassisDetails"+idNumber).removeClass("hide");
				$("#"+currentId).parent().addClass("active");
			}
			
		});

		$(".moreInfo").click(function(){
			var currentId = $(this).attr('id');
			$("#info"+currentId).removeClass('hide');
		});

		$(".hideMoreInfo").click(function(){
			var currentId = $(this).attr('id');
			var subString = currentId.substring(10,14);
			$("#info"+subString).addClass('hide');
		});

		$("#addCategory1").click(function(){
			$("#addCategory1").addClass('hide');
			$("#searchBy2, #addCategory2").removeClass('hide');
		});

		$("#addCategory2").click(function(){
			$("#searchBy3").removeClass('hide');
			$("#addCategory2").addClass('hide');
		});

		$("#customSearchReset").click(function(){
			$("#searchBy1Select").val("Select One");
			$("#searchBy2Select").val("Select One");
			$("#searchBy3Select").val("Select One");
			$("#searchBy2, #searchBy3, #price1, #price2, #price3, #hPowerAndYear1, #hPowerAndYear2, #hPowerAndYear3, #hPowerAndYear1MinWrong, #hPowerAndYear2MinWrong, #hPowerAndYear3MinWrong").addClass('hide');
			$("#price1MinWrong, #price2MinWrong, #price3MinWrong, #price1MaxWrong, #price2MaxWrong, #price3MaxWrong, #hPowerAndYear1MaxWrong, #hPowerAndYear2MaxWrong, #hPowerAndYear3MaxWrong").addClass('hide');
			$("#addCategory1").removeClass('hide');
			CarInfo.main.setInitialValues();
			CarInfo.main.setInitialBooleanValues();
		});

		$("#modifySearch").click(function(){
			if(! $("#modifySearchButtonDisplay").hasClass('hide')){
				$("#modifySearchButtonDisplay, #pagination, #uniqueSelector").addClass('hide');
				$("#searchCategory").removeClass('hide');
			}
		});

		$("#customSearch").unbind().click(function() {
			$("#alertMessageHider").addClass("hide");
			CarInfo.main.setInitialBooleanValues();
			CarInfo.main.formValidation();
			CarInfo.main.formValidationChecks();
			if(! $("#hPowerAndYear1MinWrong").hasClass('hide') || ! $("#hPowerAndYear2MinWrong").hasClass('hide') || ! $("#hPowerAndYear3MinWrong").hasClass('hide') 
					|| ! $("#hPowerAndYear1MaxWrong").hasClass('hide') || ! $("#hPowerAndYear2MaxWrong").hasClass('hide') || ! $("#hPowerAndYear3MaxWrong").hasClass('hide') 
					|| ! $("#price1MinWrong").hasClass('hide') || ! $("#price2MinWrong").hasClass('hide') || ! $("#price3MinWrong").hasClass('hide') || ! $("#price1MaxWrong").hasClass('hide') 
					|| ! $("#price2MaxWrong").hasClass('hide') || ! $("#price3MaxWrong").hasClass('hide')){
				CarInfo.main.clickEvents();
				return;
			}
			CarInfo.utils.loadModalCall();
			var url = "/customSearch";
			var data = $("#searchCategoryForm").serialize();
			CarInfo.utils.ajaxCall( url, "POST", data, function(result){
				if(result){
					if($(result).filter("#emptyResult").val() === "true"){
						$("#searchData").html(result);
						$('#loadingModal').modal('hide');
					}else{
						if($("#uniqueSelector").hasClass("hide")){
							$("#uniqueSelector").removeClass('hide');
						}
						if(! $("#searchCategory").hasClass('hide')){
							$("#searchCategory").addClass('hide');
							$("#modifySearchButtonDisplay, #pagination").removeClass('hide');
						}
						$("#searchData").html(result);
						$('#loadingModal').modal('hide');
					}

				}
				var rowCount = $("#rowCount").val();
				for(var i=1; i<=rowCount; i++){
					$(".pagination").append("<li><a href='#' id=pageNo"+i+">"+i+"</a></li>");
					storage[i]=0;
				}
				CarInfo.main.clickEvents();
			});
		});
	};

	module().formValidationChecks = function(){
		if(! $("#hPowerAndYear1").hasClass('hide')){
			if(blankMinHPowerBoolean1 === "true"){
				modelFlagBlank = "true";
				if($("#hPowerAndYear1MinWrong").hasClass('hide')){
					$("#hPowerAndYear1MinWrong").removeClass('hide');
				}
			}else if(zeroMinHPowerBoolean1 === "true"){
				modelFlagZero = "true";
				if($("#hPowerAndYear1MinWrong").hasClass('hide')){
					$("#hPowerAndYear1MinWrong").removeClass('hide');
				}
			}else if(nanMinHPowerBoolean1 === "true"){
				modelFlagNumeric = "true";
				if($("#hPowerAndYear1MinWrong").hasClass('hide')){
					$("#hPowerAndYear1MinWrong").removeClass('hide');
				}
			}
			if(blankMaxHPowerBoolean1 === "true"){
				modelFlagBlank = "true";
				if($("#hPowerAndYear1MaxWrong").hasClass('hide')){
					$("#hPowerAndYear1MaxWrong").removeClass('hide');
				}
			}else if(zeroMaxHPowerBoolean1 === "true"){
				modelFlagZero = "true";
				if($("#hPowerAndYear1MaxWrong").hasClass('hide')){
					$("#hPowerAndYear1MaxWrong").removeClass('hide');
				}
			}else if(nanMaxHPowerBoolean1 === "true"){
				modelFlagNumeric = "true";
				if($("#hPowerAndYear1MaxWrong").hasClass('hide')){
					$("#hPowerAndYear1MaxWrong").removeClass('hide');
				}
			}
			if(nanMinHPowerBoolean1 != "true" && nanMaxHPowerBoolean1 !="true" && blankMinHPowerBoolean1 != "true" && blankMaxHPowerBoolean1 != "true" && zeroMaxHPowerBoolean1 != "true" && zeroMinHPowerBoolean1 != "true"){
				if(minMaxHPowerBoolean1 === "true"){
					modelFlagHighLow = "true";
					if($("#hPowerAndYear1MinWrong").hasClass('hide')){
						$("#hPowerAndYear1MinWrong").removeClass('hide');
					}
					if($("#hPowerAndYear1MaxWrong").hasClass('hide')){
						$("#hPowerAndYear1MaxWrong").removeClass('hide');
					}
				}
			}
			if(nanMinHPowerBoolean1 != "true" && blankMinHPowerBoolean1 != "true" && minMaxHPowerBoolean1 != "true" && zeroMinHPowerBoolean1 != "true"){
				if(! $("#hPowerAndYear1MinWrong").hasClass('hide')){
					$("#hPowerAndYear1MinWrong").addClass('hide');
				}
			}
			if(nanMaxHPowerBoolean1 !="true" && blankMaxHPowerBoolean1 != "true" && minMaxHPowerBoolean1 != "true" && zeroMaxHPowerBoolean1 != "true"){
				if(! $("#hPowerAndYear1MaxWrong").hasClass('hide')){
					$("#hPowerAndYear1MaxWrong").addClass('hide');
				}
			}
		}else if(! $("#price1").hasClass("hide")){
			if(blankMinPriceBoolean1 === "true"){
				modelFlagBlank = "true";
				if($("#price1MinWrong").hasClass('hide')){
					$("#price1MinWrong").removeClass('hide');
				}
			}else if(zeroMinPriceBoolean1 === "true"){
				modelFlagZero = "true";
				if($("#price1MinWrong").hasClass('hide')){
					$("#price1MinWrong").removeClass('hide');
				}
			}else if(nanMinPriceBoolean1 === "true"){
				modelFlagNumeric = "true";
				if($("#price1MinWrong").hasClass('hide')){
					$("#price1MinWrong").removeClass('hide');
				}
			}
			if(blankMaxPriceBoolean1 === "true"){
				modelFlagBlank = "true";
				if($("#price1MaxWrong").hasClass('hide')){
					$("#price1MaxWrong").removeClass('hide');
				}
			}else if(zeroMaxPriceBoolean1 === "true"){
				modelFlagZero = "true";
				if($("#price1MaxWrong").hasClass('hide')){
					$("#price1MaxWrong").removeClass('hide');
				}
			}else if(nanMaxPriceBoolean1 === "true"){
				modelFlagNumeric = "true";
				if($("#price1MaxWrong").hasClass('hide')){
					$("#price1MaxWrong").removeClass('hide');
				}
			}
			if(nanMinPriceBoolean1 != "true" && nanMaxPriceBoolean1 !="true" && blankMinPriceBoolean1 != "true" && blankMaxPriceBoolean1 != "true" && zeroMaxPriceBoolean1 != "true" && zeroMinPriceBoolean1 != "true"){
				if(minMaxPriceBoolean1 === "true"){
					modelFlagHighLow = "true";
					if($("#price1MaxWrong").hasClass('hide')){
						$("#price1MaxWrong").removeClass('hide');
					}
					if($("#price1MinWrong").hasClass('hide')){
						$("#price1MinWrong").removeClass('hide');
					}
				}
			}
			if(nanMinPriceBoolean1 != "true" && blankMinPriceBoolean1 != "true" && minMaxPriceBoolean1 != "true" && zeroMinPriceBoolean1 != "true"){
				if(! $("#price1MinWrong").hasClass('hide')){
					$("#price1MinWrong").addClass('hide');
				}
			}
			if(nanMaxPriceBoolean1 !="true" && blankMaxPriceBoolean1 != "true" && minMaxPriceBoolean1 != "true" && zeroMaxPriceBoolean1 != "true"){
				if(! $("#price1MaxWrong").hasClass('hide')){
					$("#price1MaxWrong").addClass('hide');
				}
			}
		}
		if(! $("#hPowerAndYear2").hasClass('hide')){
			if(blankMinHPowerBoolean2 === "true"){
				modelFlagBlank = "true";
				if($("#hPowerAndYear2MinWrong").hasClass('hide')){
					$("#hPowerAndYear2MinWrong").removeClass('hide');
				}
			}else if(zeroMinHPowerBoolean2 === "true"){
				modelFlagZero = "true";
				if($("#hPowerAndYear2MinWrong").hasClass('hide')){
					$("#hPowerAndYear2MinWrong").removeClass('hide');
				}
			}else if(nanMinHPowerBoolean2 === "true"){
				modelFlagNumeric = "true";
				if($("#hPowerAndYear2MinWrong").hasClass('hide')){
					$("#hPowerAndYear2MinWrong").removeClass('hide');
				}
			}
			if(blankMaxHPowerBoolean2 === "true"){
				modelFlagBlank = "true";
				if($("#hPowerAndYear2MaxWrong").hasClass('hide')){
					$("#hPowerAndYear2MaxWrong").removeClass('hide');
				}
			}else if(zeroMaxHPowerBoolean2 === "true"){
				modelFlagZero = "true";
				if($("#hPowerAndYear2MaxWrong").hasClass('hide')){
					$("#hPowerAndYear2MaxWrong").removeClass('hide');
				}
			}else if(nanMaxHPowerBoolean2 === "true"){
				modelFlagNumeric = "true";
				if($("#hPowerAndYear2MaxWrong").hasClass('hide')){
					$("#hPowerAndYear2MaxWrong").removeClass('hide');
				}
			}
			if(nanMinHPowerBoolean2 != "true" && nanMaxHPowerBoolean2 !="true" && blankMinHPowerBoolean2 != "true" && blankMaxHPowerBoolean2 != "true" && zeroMaxHPowerBoolean2 != "true" && zeroMinHPowerBoolean2 != "true"){
				if(minMaxHPowerBoolean2 === "true"){
					modelFlagHighLow = "true";
					if($("#hPowerAndYear2MinWrong").hasClass('hide')){
						$("#hPowerAndYear2MinWrong").removeClass('hide');
					}
					if($("#hPowerAndYear2MaxWrong").hasClass('hide')){
						$("#hPowerAndYear2MaxWrong").removeClass('hide');
					}
				}
			}
			if(nanMinHPowerBoolean2 != "true" && blankMinHPowerBoolean2 != "true" && minMaxHPowerBoolean2 != "true" && zeroMinHPowerBoolean2 != "true"){
				if(! $("#hPowerAndYear2MinWrong").hasClass('hide')){
					$("#hPowerAndYear2MinWrong").addClass('hide');
				}
			}
			if(nanMaxHPowerBoolean2 !="true" && blankMaxHPowerBoolean2 != "true" && minMaxHPowerBoolean2 != "true" && zeroMaxHPowerBoolean2 != "true"){
				if(! $("#hPowerAndYear2MaxWrong").hasClass('hide')){
					$("#hPowerAndYear2MaxWrong").addClass('hide');
				}
			}
		}else if(! $("#price2").hasClass("hide")){
			if(blankMinPriceBoolean2 === "true"){
				modelFlagBlank = "true";
				if($("#price2MinWrong").hasClass('hide')){
					$("#price2MinWrong").removeClass('hide');
				}
			}else if(zeroMinPriceBoolean2 === "true"){
				modelFlagZero = "true";
				if($("#price2MinWrong").hasClass('hide')){
					$("#price2MinWrong").removeClass('hide');
				}
			}else if(nanMinPriceBoolean2 === "true"){
				modelFlagNumeric = "true";
				if($("#price2MinWrong").hasClass('hide')){
					$("#price2MinWrong").removeClass('hide');
				}
			}
			if(blankMaxPriceBoolean2 === "true"){
				modelFlagBlank = "true";
				if($("#price2MaxWrong").hasClass('hide')){
					$("#price2MaxWrong").removeClass('hide');
				}
			}else if(zeroMaxPriceBoolean2 === "true"){
				modelFlagZero = "true";
				if($("#price2MaxWrong").hasClass('hide')){
					$("#price2MaxWrong").removeClass('hide');
				}
			}else if(nanMaxPriceBoolean2 === "true"){
				modelFlagNumeric = "true";
				if($("#price2MaxWrong").hasClass('hide')){
					$("#price2MaxWrong").removeClass('hide');
				}
			}
			if(nanMinPriceBoolean2 != "true" && nanMaxPriceBoolean2 !="true" && blankMinPriceBoolean2 != "true" && blankMaxPriceBoolean2 != "true"  && zeroMaxPriceBoolean2 != "true" && zeroMinPriceBoolean2 != "true"){
				if(minMaxPriceBoolean2 === "true"){
					modelFlagHighLow = "true";
					if($("#price2MaxWrong").hasClass('hide')){
						$("#price2MaxWrong").removeClass('hide');
					}
					if($("#price2MinWrong").hasClass('hide')){
						$("#price2MinWrong").removeClass('hide');
					}
				}
			}if(nanMinPriceBoolean2 != "true" && blankMinPriceBoolean2 != "true" && minMaxPriceBoolean2 != "true" && zeroMinPriceBoolean2 != "true"){
				if(! $("#price2MinWrong").hasClass('hide')){
					$("#price2MinWrong").addClass('hide');
				}
			}
			if(nanMaxPriceBoolean2 !="true" && blankMaxPriceBoolean2 != "true" && minMaxPriceBoolean2 != "true" && zeroMaxPriceBoolean2 != "true"){
				if(! $("#price2MaxWrong").hasClass('hide')){
					$("#price2MaxWrong").addClass('hide');
				}
			}
		}
		if(! $("#hPowerAndYear3").hasClass('hide')){
			if(blankMinHPowerBoolean3 === "true"){
				modelFlagBlank = "true";
				if($("#hPowerAndYear3MinWrong").hasClass('hide')){
					$("#hPowerAndYear3MinWrong").removeClass('hide');
				}
			}else if(zeroMinHPowerBoolean3 === "true"){
				modelFlagZero = "true";
				if($("#hPowerAndYear3MinWrong").hasClass('hide')){
					$("#hPowerAndYear3MinWrong").removeClass('hide');
				}
			}else if(nanMinHPowerBoolean3 === "true"){
				modelFlagNumeric = "true";
				if($("#hPowerAndYear3MinWrong").hasClass('hide')){
					$("#hPowerAndYear3MinWrong").removeClass('hide');
				}
			}
			if(blankMaxHPowerBoolean3 === "true"){
				modelFlagBlank = "true";
				if($("#hPowerAndYear3MaxWrong").hasClass('hide')){
					$("#hPowerAndYear3MaxWrong").removeClass('hide');
				}
			}else if(zeroMaxHPowerBoolean3 === "true"){
				modelFlagZero = "true";
				if($("#hPowerAndYear3MaxWrong").hasClass('hide')){
					$("#hPowerAndYear3MaxWrong").removeClass('hide');
				}
			}else if(nanMaxHPowerBoolean3 === "true"){
				modelFlagNumeric = "true";
				if($("#hPowerAndYear3MaxWrong").hasClass('hide')){
					$("#hPowerAndYear3MaxWrong").removeClass('hide');
				}
			}
			if(nanMinHPowerBoolean3 != "true" && nanMaxHPowerBoolean3 !="true" && blankMinHPowerBoolean3 != "true" && blankMaxHPowerBoolean3 != "true" && zeroMaxHPowerBoolean3 != "true" && zeroMinHPowerBoolean3 != "true"){
				if(minMaxHPowerBoolean3 === "true"){
					modelFlagHighLow = "true";
					if($("#hPowerAndYear3MinWrong").hasClass('hide')){
						$("#hPowerAndYear3MinWrong").removeClass('hide');
					}
					if($("#hPowerAndYear3MaxWrong").hasClass('hide')){
						$("#hPowerAndYear3MaxWrong").removeClass('hide');
					}
				}
			}
			if(nanMinHPowerBoolean3 != "true" && blankMinHPowerBoolean3 != "true" && minMaxHPowerBoolean3!= "true" && zeroMinHPowerBoolean3 != "true"){
				if(! $("#hPowerAndYear3MinWrong").hasClass('hide')){
					$("#hPowerAndYear3MinWrong").addClass('hide');
				}
			}
			if(nanMaxHPowerBoolean3 !="true" && blankMaxHPowerBoolean3 != "true" && minMaxHPowerBoolean3 != "true" && zeroMaxHPowerBoolean3 != "true"){
				if(! $("#hPowerAndYear3MaxWrong").hasClass('hide')){
					$("#hPowerAndYear3MaxWrong").addClass('hide');
				}
			}
		}else if(! $("#price3").hasClass("hide")){
			if(blankMinPriceBoolean3 === "true"){
				modelFlagBlank = "true";
				if($("#price3MinWrong").hasClass('hide')){
					$("#price3MinWrong").removeClass('hide');
				}
			}else if(zeroMinPriceBoolean3 === "true"){
				modelFlagZero = "true";
				if($("#price3MinWrong").hasClass('hide')){
					$("#price3MinWrong").removeClass('hide');
				}
			}else if(nanMinPriceBoolean3 === "true"){
				modelFlagNumeric = "true";
				if($("#price3MinWrong").hasClass('hide')){
					$("#price3MinWrong").removeClass('hide');
				}
			}
			if(blankMaxPriceBoolean3 === "true"){
				modelFlagBlank = "true";
				if($("#price3MaxWrong").hasClass('hide')){
					$("#price3MaxWrong").removeClass('hide');
				}
			}else if(zeroMaxPriceBoolean3 === "true"){
				modelFlagZero = "true";
				if($("#price3MaxWrong").hasClass('hide')){
					$("#price3MaxWrong").removeClass('hide');
				}
			}else if(nanMaxPriceBoolean3 === "true"){
				modelFlagNumeric = "true";
				if($("#price3MaxWrong").hasClass('hide')){
					$("#price3MaxWrong").removeClass('hide');
				}
			}
			if(nanMinPriceBoolean3 != "true" && nanMaxPriceBoolean3 !="true" && blankMinPriceBoolean3 != "true" && blankMaxPriceBoolean3 != "true" && zeroMaxPriceBoolean3 != "true" && zeroMinPriceBoolean3 != "true"){
				if(minMaxPriceBoolean3 === "true"){
					modelFlagHighLow = "true";
					if($("#price3MinWrong").hasClass('hide')){
						$("#price3MinWrong").removeClass('hide');
					}
					if($("#price3MaxWrong").hasClass('hide')){
						$("#price3MaxWrong").removeClass('hide');
					}
				}
			}if(nanMinPriceBoolean3 != "true" && blankMinPriceBoolean3 != "true" && minMaxPriceBoolean3 != "true" && zeroMinPriceBoolean3 != "true"){
				if(! $("#price3MinWrong").hasClass('hide')){
					$("#price3MinWrong").addClass('hide');
				}
			}
			if(nanMaxPriceBoolean3 !="true" && blankMaxPriceBoolean3 != "true" && minMaxPriceBoolean3 != "true" && zeroMaxPriceBoolean3 != "true"){
				if(! $("#price3MaxWrong").hasClass('hide')){
					$("#price3MaxWrong").addClass('hide');
				}
			}
		}

		if(modelFlagBlank === "true"){
			$("#alertMessage").text("Oh snap! Please do-not leave any fields empty and make sure you enter only numeric values other than zero for Minimum and Maximum ranges");
			$("#alertMessageHider").removeClass("hide");
		}else if(modelFlagZero === "true"){
			$("#alertMessage").text("Oh snap! Zero or decimal values are not allowed in min and Max fields");
			$("#alertMessageHider").removeClass("hide");
		}else if(modelFlagNumeric === "true"){
			$("#alertMessage").text("Oh snap! Please enter only numeric values other than zero in min and Max fields");
			$("#alertMessageHider").removeClass("hide");
		}else if(modelFlagHighLow === "true"){
			$("#alertMessage").text("Oh snap! Minimum Range values are more than Maximum Range values");
			$("#alertMessageHider").removeClass("hide");
		}

	};

	module().formValidation = function(){
		if(! $("#hPowerAndYear1").hasClass('hide')){
			var minId = "minHPowerAndYear1";
			var maxId = "maxHPowerAndYear1";
			zeroMinHPowerBoolean1 = CarInfo.main.formValidationZero(minId);
			zeroMaxHPowerBoolean1 = CarInfo.main.formValidationZero(maxId);
			blankMinHPowerBoolean1 = CarInfo.main.formValidationBlank(minId);
			blankMaxHPowerBoolean1 = CarInfo.main.formValidationBlank(maxId);
			nanMinHPowerBoolean1 = CarInfo.main.formValidationNaN(minId);
			nanMaxHPowerBoolean1 = CarInfo.main.formValidationNaN(maxId);
			if(blankMinHPowerBoolean1 === "false" && blankMaxHPowerBoolean1 === "false" && nanMinHPowerBoolean1 === "false"  && nanMaxHPowerBoolean1 === "false"){
				minMaxHPowerBoolean1 = CarInfo.main.formValidationMinMax(minId, maxId);
			}
		}else if(! $("#price1").hasClass("hide")){
			var minId = "minPrice1";
			var maxId = "maxPrice1";
			zeroMinPriceBoolean1 = CarInfo.main.formValidationZero(minId);
			zeroMaxPriceBoolean1 = CarInfo.main.formValidationZero(maxId);
			blankMinPriceBoolean1 = CarInfo.main.formValidationBlank(minId);
			blankMaxPriceBoolean1 = CarInfo.main.formValidationBlank(maxId);
			nanMinPriceBoolean1 = CarInfo.main.formValidationNaN(minId);
			nanMaxPriceBoolean1 = CarInfo.main.formValidationNaN(maxId);
			if(blankMinPriceBoolean1 === "false" && blankMaxPriceBoolean1 === "false" && nanMinPriceBoolean1 === "false"  && nanMaxPriceBoolean1 === "false"){
				minMaxPriceBoolean1 =CarInfo.main.formValidationMinMax(minId, maxId);
			}
		}
		if(! $("#hPowerAndYear2").hasClass('hide')){
			var minId = "minHPowerAndYear2";
			var maxId = "maxHPowerAndYear2";
			zeroMinHPowerBoolean2 = CarInfo.main.formValidationZero(minId);
			zeroMaxHPowerBoolean2 = CarInfo.main.formValidationZero(maxId);
			blankMinHPowerBoolean2 = CarInfo.main.formValidationBlank(minId);
			blankMaxHPowerBoolean2 = CarInfo.main.formValidationBlank(maxId);
			nanMinHPowerBoolean2 = CarInfo.main.formValidationNaN(minId);
			nanMaxHPowerBoolean2 = CarInfo.main.formValidationNaN(maxId);
			if(blankMinHPowerBoolean2 === "false" && blankMaxHPowerBoolean2 === "false" && nanMinHPowerBoolean2 === "false"  && nanMaxHPowerBoolean2 === "false"){
				minMaxHPowerBoolean2 = CarInfo.main.formValidationMinMax(minId, maxId);
			}

		}else if(! $("#price2").hasClass("hide")){
			var minId = "minPrice2";
			var maxId = "maxPrice2";
			zeroMinPriceBoolean2 = CarInfo.main.formValidationZero(minId);
			zeroMaxPriceBoolean2 = CarInfo.main.formValidationZero(maxId);
			blankMinPriceBoolean2 = CarInfo.main.formValidationBlank(minId);
			blankMaxPriceBoolean2 = CarInfo.main.formValidationBlank(maxId);
			nanMinPriceBoolean2 = CarInfo.main.formValidationNaN(minId);
			nanMaxPriceBoolean2 = CarInfo.main.formValidationNaN(maxId);
			if(blankMinPriceBoolean2 === "false" && blankMaxPriceBoolean2 === "false" && nanMinPriceBoolean2 === "false"  && nanMaxPriceBoolean2 === "false"){
				minMaxPriceBoolean2 =CarInfo.main.formValidationMinMax(minId, maxId);
			}
		}
		if(! $("#hPowerAndYear3").hasClass('hide')){
			var minId = "minHPowerAndYear3";
			var maxId = "maxHPowerAndYear3";
			zeroMinHPowerBoolean3 = CarInfo.main.formValidationZero(minId);
			zeroMaxHPowerBoolean3 = CarInfo.main.formValidationZero(maxId);
			blankMinHPowerBoolean3 = CarInfo.main.formValidationBlank(minId);
			blankMaxHPowerBoolean3 = CarInfo.main.formValidationBlank(maxId);
			nanMinHPowerBoolean3 = CarInfo.main.formValidationNaN(minId);
			nanMaxHPowerBoolean3 = CarInfo.main.formValidationNaN(maxId);
			if(blankMinHPowerBoolean3 === "false" && blankMaxHPowerBoolean3 === "false" && nanMinHPowerBoolean3 === "false"  && nanMaxHPowerBoolean3 === "false"){
				minMaxHPowerBoolean3 = CarInfo.main.formValidationMinMax(minId, maxId);
			}

		}else if(! $("#price3").hasClass("hide")){
			var minId = "minPrice3";
			var maxId = "maxPrice3";
			zeroMinPriceBoolean3 = CarInfo.main.formValidationZero(minId);
			zeroMaxPriceBoolean3 = CarInfo.main.formValidationZero(maxId);
			blankMinPriceBoolean3 = CarInfo.main.formValidationBlank(minId);
			blankMaxPriceBoolean3 = CarInfo.main.formValidationBlank(maxId);
			nanMinPriceBoolean3 = CarInfo.main.formValidationNaN(minId);
			nanMaxPriceBoolean3 = CarInfo.main.formValidationNaN(maxId);
			if(blankMinPriceBoolean3 === "false" && blankMaxPriceBoolean3 === "false" && nanMinPriceBoolean3 === "false"  && nanMaxPriceBoolean3 === "false"){
				minMaxPriceBoolean3 =CarInfo.main.formValidationMinMax(minId, maxId);
			}
		}
	};

	module().formValidationMinMax = function(minId, maxId){
		minIdValue = $("#"+minId).val();
		maxIdValue = $("#"+maxId).val();

		if(parseInt(maxIdValue) > parseInt(minIdValue)){
			return "false";
		}else{
			return "true";
		}
	};

	module().formValidationBlank = function(Id){
		IdValue = $("#"+Id).val();
		if(IdValue != ""){
			return "false";
		}else{
			return "true";
		}
	};

	module().formValidationNaN= function(Id){
		IdValue = $("#"+Id).val();
		if(! isNaN(IdValue) && IdValue != ""){
			return "false";
		}else{
			return "true";
		}
	};

	module().formValidationZero = function(Id){
		IdValue = $("#"+Id).val();
		if(IdValue != "0" && IdValue.isInteger()){
			return "false";
		}else{
			return "true";
		}
	};


})(function() {return CarInfo.main;}, jQuery);


$( document ).ready(function() {
	CarInfo.main.init();
});