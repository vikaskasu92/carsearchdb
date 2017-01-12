<%@ page language="java" contentType="text/html; charset=UTF8"
	pageEncoding="UTF8"%>
<%@ taglib uri="http://java.sun.com/jsp/jstl/core" prefix="c"%>
<!DOCTYPE html>
<html lang="en">
<head>
<meta name="viewport" content="width=device-width, initial-scale=1">
<title>Car Search Admin</title>
</head>
<body>
	<c:if test="${userAuthenticated}">
		<div id="adminPageHeading">
			<h3 align="center">${launchPageHeading}</h3>
		</div>
		<div id="pageHeading" class="hide">
			<div id="successAlert" class="alert alert-success" role="alert">
				<h4 align="center">Your Operation has been completed
					sucessfully</h4>
			</div>
		</div>
		<div id="enterDetailsForm">
			<form id="saveAdminOperation">
				<div class="col-sm-12">
					<div id="coloumn1" class="col-sm-4 col-lg-4">
						<div class="form-group">
							<select name="carType">
								<option value="Sedan">Sedan</option>
								<option value="Coupe">Coupe</option>
								<option value="Hatch">Hatch</option>
								<option value="Convertible">Convertible</option>
							</select>
						</div>
						<div class="form-group">
							<label for="modelYear">Model Year</label><select name="modelYear">
								<option value="2017">2017</option>
							</select>
						</div>
						<div class="form-group">
							<label for="brandName">Brand Name</label> <input name="brandName"
								type="text" class="form-control" id="brandNameTextInput"
								placeholder="Brand Name">
						</div>
						<div class="form-group">
							<label for="carName">Car Name</label> <input name="carName"
								type="text" class="form-control" id="carNameTextInput"
								placeholder="please enter a string here">
						</div>
						<div class="form-group">
							<label for="price">Price $</label> <input name="price"
								type="text" class="form-control" id="priceTextInput"
								placeholder="MSRP in USD">
						</div>
						<div class="form-group">
							<label for="brakeHorsePower">HorsePower</label> <input name="engineSpecification.brakeHorsePower"
								type="text" class="form-control" id="brakeHorsePowerTextInput"
								placeholder="brakeHorsePower">
						</div>
						<div class="form-group">
							<label for="torque">Torque</label> <input name="engineSpecification.torque"
								type="text" class="form-control" id="torqueTextInput"
								placeholder="torque">
						</div>
						<div class="form-group">
							<label for="displacement">Displacement</label> <input name="engineSpecification.displacement"
								type="text" class="form-control" id="displacementTextInput"
								placeholder="displacement">
						</div>
						<div class="form-group">
							<label for="engineType">Engine Type</label> <input name="engineSpecification.engineType"
								type="text" class="form-control" id="engineTypeTextInput"
								placeholder="engineType">
						</div>
						<div class="form-group">
							<label for="zeroToSixty">0 - 60</label> <input name="engineSpecification.zeroToSixty"
								type="text" class="form-control" id="zeroToSixtyTextInput"
								placeholder="zeroToSixty">
						</div>
						<div class="form-group">
							<label for="topSpeed">Top Speed</label> <input name="engineSpecification.topSpeed"
								type="text" class="form-control" id="topSpeedTextInput"
								placeholder="topSpeed">
						</div>
					</div>
					<div id="coloumn2" class="col-sm-4 col-lg-4">
						<div class="form-group">
							<label for="milesPerGallonCity">Miles Per Gallon City</label> <input
								name="engineSpecification.milesPerGallonCity" type="text"
								class="form-control" id="milesPerGallonCityTextInput"
								placeholder="miles Per Gallon City">
						</div>
						<div class="form-group">
							<label for="milesPerGallonFreeWay">Miles Per Gallon
								FreeWay</label> <input name="engineSpecification.milesPerGallonFreeWay"
								type="text" class="form-control"
								id="milesPerGallonFreeWayTextInput"
								placeholder="miles Per Gallon FreeWay">
					</div>
					<div class="form-group">
							<label for="valveTrain">valveTrain</label> <input name="driveTrainDetails.valveTrain"
								type="text" class="form-control" id="valveTrainTextInput"
								placeholder="valveTrain">
						</div>
						<div class="form-group">
							<label for="transmission">transmission</label> <input name="driveTrainDetails.transmission"
								type="text" class="form-control" id="transmissionTextInput"
								placeholder="transmission">
						</div>
						<div class="form-group">
							<label for="driveTrainType">driveTrainType</label> <input name="driveTrainDetails.driveTrainType"
								type="text" class="form-control" id="driveTrainTypeTextInput"
								placeholder="driveTrainType">
						</div>
						<div class="form-group">
							<label for="compressionRatio">compressionRatio</label> <input name="driveTrainDetails.compressionRatio"
								type="text" class="form-control" id="compressionRatioTextInput"
								placeholder="compressionRatio">
						</div>
					</div>
					<div id="coloumn3" class="col-sm-4 col-lg-4">
						<div class="form-group">
							<label for="suspension">suspension</label> <input name="chassis.suspension"
								type="text" class="form-control" id="suspensionRatioTextInput"
								placeholder="suspension">
						</div>
						<div class="form-group">
							<label for="wheelsAvailable">wheelsAvailable</label> <input name="chassis.wheelsAvailable"
								type="text" class="form-control" id="wheelsAvailableTextInput"
								placeholder="wheelsAvailable">
						</div>
						<div class="form-group">
							<label for="steering">steering</label> <input name="chassis.steering"
								type="text" class="form-control" id="steeringTextInput"
								placeholder="steering">
						</div>
						<div class="form-group">
							<label for="carLength">carLength</label> <input name="chassis.carLength"
								type="text" class="form-control" id="carLengthTextInput"
								placeholder="carLength">
						</div>
						<div class="form-group">
							<label for="wheelBase">wheelBase</label> <input name="chassis.wheelBase"
								type="text" class="form-control" id="wheelBaseTextInput"
								placeholder="wheelBase">
						</div>
						<div class="form-group">
							<label for="carWidth">carWidth</label> <input name="chassis.carWidth"
								type="text" class="form-control" id="carWidthTextInput"
								placeholder="carWidth">
						</div>
					</div>
				</div>
			</form>
			<div>
				<form id="createAdminForm">
					<div class="row">
						<span>Username :</span> <input type="text" id="usernameField"
							name="username" class="form-control">
					</div>
					<div class="row">
						<span>Password :</span> <input type="text" id="usernameField"
							name="password" class="form-control">
					</div>
				</form>
			</div>
			<input type="button" value="Save to Database" id="saveToDatabase"
				class="btn btn-primary floatLeft margin10" /> <input
				id="retrieveAllTransaction" type="button"
				value="Retrieve Complete Details" class="btn btn-primary margin10" />
			<input type="button" value="Create User" id="createUser"
				class="btn btn-default circularMargin5" />
		</div>
		<div id="retrieveDataAdminDiv"></div>
	</c:if>
	<c:if test="${! userAuthenticated}">
		<div id="inCorrectData">
			<span>In Correct Username or Password</span>
		</div>
	</c:if>
</body>
</html>