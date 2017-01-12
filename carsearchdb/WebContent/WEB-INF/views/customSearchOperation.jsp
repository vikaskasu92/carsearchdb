<%@ page language="java" contentType="text/html; charset=UTF8"
	pageEncoding="UTF8"%>
<%@ taglib uri="http://java.sun.com/jsp/jstl/core" prefix="c"%>
<!DOCTYPE html>
<html lang="en">
<head>
<meta name="viewport" content="width=device-width, initial-scale=1">
<title>Search Operation Result</title>
</head>
<body>
	<c:if test="${nonEmptyList}">
		<div id="uniqueSelector">
			<c:forEach items="${uniqueList}" var="uniqueListSelector"
				varStatus="count">

				<div class="displayResultsBorder col-xs-12">
					<div id="perCarinfo${count.index +1}" class="row paddingBottom20">
						<div class="col-xs-12">
							<div class='col-xs-6'>
								<label>Brand Name</label> <span>${uniqueListSelector.brandName}</span>
								<br /> <label>Car Name</label> <span>${uniqueListSelector.carName}</span>
							</div>
							<div class='col-xs-6'>
								<label>Model Year</label> <span>${uniqueListSelector.modelYear}</span>
								<br /> <label>Car Type</label> <span>${uniqueListSelector.carType}</span>
							</div>
						</div>
						<div class="col-xs-12">
						<div class='col-xs-6'>
								<label>Price $</label> <span>${uniqueListSelector.price}</span>
							</div>
							<div class='col-xs-6' align="center">
								<input type="button" value="More Info" id="${count.index +1}"
								class="btn btn-info moreInfo" />
							</div>
							
						</div>
					</div>
					<div id="info${count.index +1}" class="hide paddingBottom20">
						<ul class="nav nav-tabs">
							<li class="active"><a id="engineDetails${count.index +1}" href="#">Engine Details</a></li>
							<li><a id="driveTrainDetails${count.index +1}" href="#">Drive Train</a></li>
							<li><a id="chassisDetails${count.index +1}" href="#">Chassis</a></li>
						</ul>
						<div id="tabEngineDetails${count.index +1}" class="paddingOverall">
							<div class="row">
								<div class="col-xs-12">
									<div class="row">
										<div class="col-xs-6">
											<label>Displacement :</label>
										</div>
										<div class="col-xs-6">
											<span>${uniqueListSelector.engineSpecification.displacement}</span>
										</div>
									</div>
									<div class="row">
										<div class="col-xs-6">
											<label>Engine Type :</label>
										</div>
										<div class="col-xs-6">
											<span>${uniqueListSelector.engineSpecification.engineType}</span>
										</div>
									</div>
									<div class="row">
										<div class="col-xs-6">
											<label>Horse Power :</label>
										</div>
										<div class="col-xs-6">
											<span>${uniqueListSelector.engineSpecification.brakeHorsePower} hp</span>
										</div>
									</div>
									<div class="row">
										<div class="col-xs-6">
											<label>Torque :</label>
										</div>
										<div class="col-xs-6">
											<span>${uniqueListSelector.engineSpecification.torque} ft/lb</span>
										</div>
									</div>
									<div class="row">
										<div class="col-xs-6">
											<label>MPG City :</label>
										</div>
										<div class="col-xs-6">
											<span>${uniqueListSelector.engineSpecification.milesPerGallonCity} mpg</span>
										</div>
									</div>
									<div class="row">
										<div class="col-xs-6">
											<label>MPG FreeWay :</label>
										</div>
										<div class="col-xs-6">
											<span>${uniqueListSelector.engineSpecification.milesPerGallonFreeWay} mpg</span>
										</div>
									</div>
									<div class="row">
										<div class="col-xs-6">
											<label>Top Speed :</label>
										</div>
										<div class="col-xs-6">
											<span>${uniqueListSelector.engineSpecification.topSpeed}</span>
										</div>
									</div>
									<div class="row">
										<div class="col-xs-6">
											<label>0 - 60 mph :</label>
										</div>
										<div class="col-xs-6">
											<span>${uniqueListSelector.engineSpecification.zeroToSixty}</span>
										</div>
									</div>
								</div>
							</div>
						</div>
						<div id="tabDriveTrainDetails${count.index +1}" class="hide paddingOverall">
							<div class="row">
								<div class="col-xs-12">
									<div class="row">
										<div class="col-xs-6">
											<label>valveTrain :</label>
										</div>
										<div class="col-xs-6">
											<span>${uniqueListSelector.driveTrainDetails.valveTrain}</span>
										</div>
									</div>
									<div class="row">
										<div class="col-xs-6">
											<label>transmission :</label>
										</div>
										<div class="col-xs-6">
											<span>${uniqueListSelector.driveTrainDetails.transmission}</span>
										</div>
									</div>
									<div class="row">
										<div class="col-xs-6">
											<label>driveTrainType :</label>
										</div>
										<div class="col-xs-6">
											<span>${uniqueListSelector.driveTrainDetails.driveTrainType}</span>
										</div>
									</div>
									<div class="row">
										<div class="col-xs-6">
											<label>compressionRatio :</label>
										</div>
										<div class="col-xs-6">
											<span>${uniqueListSelector.driveTrainDetails.compressionRatio}</span>
										</div>
									</div>
								</div>
							</div>
						</div>
						<div id="tabChassisDetails${count.index +1}" class="hide paddingOverall">
							<div class="row">
								<div class="col-xs-12">
									<div class="row">
										<div class="col-xs-6">
											<label>Suspension :</label>
										</div>
										<div class="col-xs-6">
											<span>${uniqueListSelector.chassis.suspension}</span>
										</div>
									</div>
									<div class="row">
										<div class="col-xs-6">
											<label>Steering :</label>
										</div>
										<div class="col-xs-6">
											<span>${uniqueListSelector.chassis.steering}</span>
										</div>
									</div>
									<div class="row">
										<div class="col-xs-6">
											<label>WheelsAvailable :</label>
										</div>
										<div class="col-xs-6">
											<span>${uniqueListSelector.chassis.wheelsAvailable}</span>
										</div>
									</div>
									<div class="row">
										<div class="col-xs-6">
											<label>CarLength :</label>
										</div>
										<div class="col-xs-6">
											<span>${uniqueListSelector.chassis.carLength} Inches</span>
										</div>
									</div>
									<div class="row">
										<div class="col-xs-6">
											<label>CarWidth :</label>
										</div>
										<div class="col-xs-6">
											<span>${uniqueListSelector.chassis.carWidth} Inches</span>
										</div>
									</div>
									<div class="row">
										<div class="col-xs-6">
											<label>WheelBase :</label>
										</div>
										<div class="col-xs-6">
											<span>${uniqueListSelector.chassis.wheelBase} Inches</span>
										</div>
									</div>
								</div>
							</div>
						</div>
						<div class='row'>
							<div class='col-md-offset-10 col-md-2'>
								<input type="button" value="hide"
									id="hideButton${count.index +1}"
									class="btn btn-info hideMoreInfo circularMargin5" />
							</div>
						</div>
					</div>
				</div>
			</c:forEach>
		</div>
		<input type='hidden' value="false" id="emptyResult" />
	</c:if>
	<c:if test="${! nonEmptyList}">
		<br />
		<br />
		<div class="alert alert-danger col-md-12" role="alert">
			<span><Strong>No Search Results Found!</Strong></span>
		</div>
		<div></div>
		<input type='hidden' value="true" id="emptyResult" />
	</c:if>
	<div id="pagination">
		<input type="hidden" value="${totalPages}" id="rowCount" />
		<ul class="pagination">
		</ul>
	</div>
</body>
</html>