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
<div id="multipleRetrieve">
			<div id="completeListTableResponsive" class="table-responsive tableSizeControl">
				<table id="completeListTable" class="table table-striped margin10">
					<thead>
							<tr>
								<td align="center" width="5%">Select</td>
								<td align="center" width="5%">S.no</td>
								<td align="center" width="45%">Model Year</td>
								<td align="center" width="45%">Brand Name</td>
								<td align="center" width="45%">Car Name</td>
								<td align="center" width="45%">MSRP ($)</td>
								<td align="center" width="45%">Horse Power</td>
								<td align="center" width="45%">Torque</td>
								<td align="center" width="45%">Displacement</td>
								<td align="center" width="45%">Engine Type</td>
								<td align="center" width="45%">Top Speed</td>
								<td align="center" width="45%">MPG City</td>
								<td align="center" width="45%">MPG Freeway</td>
								<td align="center" width="45%">Zero To Sixty</td>
								<td align="center" width="45%">Transmission</td>
								<td align="center" width="45%">Valve Train</td>
								<td align="center" width="45%">Drive Train Type</td>
								<td align="center" width="45%">Compression Ratio</td>
								<td align="center" width="45%">Suspension</td>
								<td align="center" width="45%">Steering</td>
								<td align="center" width="45%">Wheels Available</td>
								<td align="center" width="45%">Car Length</td>
								<td align="center" width="45%">Car Width</td>
								<td align="center" width="45%">Wheel Base</td>
							</tr>
					</thead>
					<tbody>
						<c:forEach items="${completeList}" var="carDetailsList"
							varStatus="count">
							<tr>
								<td align="center"><input id="${count.index +1}"
									name="checkBoxData" type="checkbox"></td>
								<td align="center" id="carId${count.index +1}">${carDetailsList.carId}</td>
								<td align="center" id="modelYear${count.index +1}">${carDetailsList.modelYear}</td>
								<td align="center" id="brandName${count.index +1}">${carDetailsList.brandName}</td>
								<td align="center" id="carName${count.index +1}">${carDetailsList.carName}</td>
								<td align="center" id="price${count.index +1}">$
									${carDetailsList.price}</td>
								<td align="center" id="horsePower${count.index +1}">${carDetailsList.engineSpecification.brakeHorsePower}</td>
								<td align="center" id="torque${count.index +1}">${carDetailsList.engineSpecification.torque}</td>
								<td align="center" id="torque${count.index +1}">${carDetailsList.engineSpecification.displacement}</td>
								<td align="center" id="torque${count.index +1}">${carDetailsList.engineSpecification.engineType}</td>
								<td align="center" id="torque${count.index +1}">${carDetailsList.engineSpecification.topSpeed}</td>
								<td align="center" id="torque${count.index +1}">${carDetailsList.engineSpecification.milesPerGallonCity}</td>
								<td align="center" id="torque${count.index +1}">${carDetailsList.engineSpecification.milesPerGallonFreeWay}</td>
								<td align="center" id="torque${count.index +1}">${carDetailsList.engineSpecification.zeroToSixty}</td>
								<td align="center" id="torque${count.index +1}">${carDetailsList.driveTrainDetails.transmission}</td>
								<td align="center" id="torque${count.index +1}">${carDetailsList.driveTrainDetails.valveTrain}</td>
								<td align="center" id="torque${count.index +1}">${carDetailsList.driveTrainDetails.driveTrainType}</td>
								<td align="center" id="torque${count.index +1}">${carDetailsList.driveTrainDetails.compressionRatio}</td>
								<td align="center" id="torque${count.index +1}">${carDetailsList.chassis.suspension}</td>
								<td align="center" id="torque${count.index +1}">${carDetailsList.chassis.steering}</td>
								<td align="center" id="torque${count.index +1}">${carDetailsList.chassis.wheelsAvailable}</td>
								<td align="center" id="torque${count.index +1}">${carDetailsList.chassis.carLength}</td>
								<td align="center" id="torque${count.index +1}">${carDetailsList.chassis.carWidth}</td>
								<td align="center" id="torque${count.index +1}">${carDetailsList.chassis.wheelBase}</td>
							</tr>
						</c:forEach>
					</tbody>
				</table>
			</div>
	</div>
	</body>
	</html>