<%@ page language="java" contentType="text/html; charset=UTF8"
	pageEncoding="UTF8"%>
<!DOCTYPE html>
<html>
<head>
<meta http-equiv="Content-Type" content="text/html; charset=UTF8">
<title>Main Page</title>
</head>
<body>
	<div id="alertMessageHider" class="alert alert-danger hide col-md-12"
		role="alert">
		<span id="alertMessage"></span>
	</div>
	<div id="modifySearchButtonDisplay"
		class="hide col-md-offset-10 col-md-2">
		<input id="modifySearch" type="button" class="btn btn-secondary"
			value="Modify Search" />
	</div>
	<div id="searchCategory">
		<form id="searchCategoryForm">
			<div class="circularMargin5">
				<div class='col-md-12'>
					<div id="brandSelect" class="displayBlock col-md-6">
						<span><strong>Brand Name :</strong></span><select
							id="brandNameSelect" class="form-control"
							name="brandNameSelection">
							<option value="Ford">Ford</option>
						</select>
					</div>
					<div id="carType" class="displayBlock col-md-6">
						<span><strong>Car Type :</strong></span><select
							id="carTypeSelect" class="form-control"
							name="carType">
							<option value="Sedan">Sedan</option>
							<option value="Coupe">Coupe</option>
							<option value="Hatch">Hatch</option>
							<option value="Convertible">Convertible</option>
						</select>
					</div>
				</div>
				<div id="searchBy1" class="displayBlock col-md-12">
					<span><strong>Search Category 1</strong></span> <select
						id="searchBy1Select" class="form-control" name="searchCategory1">
						<option value="Select One">Select One</option>
						<option value="Horse Power">Horse Power</option>
						<option value="Price">Price</option>
						<option value="milesPerGallonCity">MPG City</option>
					</select> <input type="button" value="+ add Category" id='addCategory1'
						class="btn btn-secondary hide circularMargin5" />
					<div id="rangeSelectors1">
						<div id="hPowerAndYear1" class="row hide">
							<div class="col-md-offset-2 col-md-4">
								<span class="paddingRight11">Min Range </span> <input
									id="minHPowerAndYear1" name="minRange1" type="text"
									class="circularMargin5" /> <img id="hPowerAndYear1MinWrong"
									alt="WrongSymbol"
									src="/resources/images/wrong.png" class="hide">
							</div>
							<div class="col-md-4">
								<span class="paddingRight11">Max Range </span> <input
									id="maxHPowerAndYear1" name="maxRange1" type="text"
									class="circularMargin5" /> <img id="hPowerAndYear1MaxWrong"
									alt="WrongSymbol"
									src="/resources/images/wrong.png" class="hide">
							</div>
						</div>
						<div id="price1" class="row hide">
							<div class="col-md-offset-2 col-md-4">
								<span>Min Range $</span> <input id="minPrice1" type="text"
									name="minRange2" class="circularMargin5" /> <img
									id="price1MinWrong" alt="WrongSymbol"
									src="/resources/images/wrong.png" class="hide">
							</div>
							<div class="col-md-4">
								<span>Max Range $</span> <input id="maxPrice1" type="text"
									name="maxRange2" class="circularMargin5" /> <img
									id="price1MaxWrong" alt="WrongSymbol"
									src="/resources/images/wrong.png" class="hide">
							</div>
						</div>
					</div>
				</div>
				<div id="searchBy2" class="displayBlock col-md-12 hide">
					<span><strong>Search Category 2</strong></span> <select
						id="searchBy2Select" class="form-control" name="searchCategory2">
						<option value="Select One">Select One</option>
						<option value="Horse Power">Horse Power</option>
						<option value="Price">Price</option>
						<option value="milesPerGallonCity">MPG City</option>
					</select> <input type="button" value="+ add Category" id='addCategory2'
						class="btn btn-secondary hide circularMargin5" />
					<div id="rangeSelectors2">
						<div id="hPowerAndYear2" class="row hide">
							<div class="col-md-offset-2 col-md-4">
								<span class="paddingRight11">Min Range </span> <input
									id="minHPowerAndYear2" name="minRange3" type="text"
									class="circularMargin5" /> <img id="hPowerAndYear2MinWrong"
									alt="WrongSymbol"
									src="/resources/images/wrong.png" class="hide">
							</div>
							<div class="col-md-4">
								<span class="paddingRight11">Max Range </span> <input
									id="maxHPowerAndYear2" type="text" name="maxRange3"
									class="circularMargin5" /> <img id="hPowerAndYear2MaxWrong"
									alt="WrongSymbol"
									src="/resources/images/wrong.png" class="hide">
							</div>
						</div>
						<div id="price2" class="row hide">
							<div class="col-md-offset-2 col-md-4">
								<span>Min Range $</span> <input id="minPrice2" name="minRange4"
									type="text" class="circularMargin5" /> <img
									id="price2MinWrong" alt="WrongSymbol"
									src="/resources/images/wrong.png" class="hide">
							</div>
							<div class="col-md-4">
								<span>Max Range $</span> <input id="maxPrice2" type="text"
									name="maxRange4" class="circularMargin5" /> <img
									id="price2MaxWrong" alt="WrongSymbol"
									src="/resources/images/wrong.png" class="hide">
							</div>
						</div>
					</div>
				</div>
				<div id="searchBy3" class="displayBlock col-md-12 hide">
					<span><strong>Search Category 3</strong></span> <select
						id="searchBy3Select" class="form-control" name="searchCategory3">
						<option value="Select One">Select One</option>
						<option value="Horse Power">Horse Power</option>
						<option value="Price">Price</option>
						<option value="milesPerGallonCity">MPG City</option>
					</select>
					<div id="rangeSelectors3">
						<div id="hPowerAndYear3" class="row hide">
							<div class="col-md-offset-2 col-md-4">
								<span class="paddingRight11">Min Range </span> <input
									id="minHPowerAndYear3" type="text" name="minRange5"
									class="circularMargin5" /> <img id="hPowerAndYear3MinWrong"
									alt="WrongSymbol"
									src="/resources/images/wrong.png" class="hide">
							</div>
							<div class="col-md-4">
								<span class="paddingRight11">Max Range </span> <input
									id="maxHPowerAndYear3" name="maxRange5" type="text"
									class="circularMargin5" /> <img id="hPowerAndYear3MaxWrong"
									alt="WrongSymbol"
									src="/resources/images/wrong.png" class="hide">
							</div>
						</div>
						<div id="price3" class="row hide">
							<div class="col-md-offset-2 col-md-4">
								<span>Min Range $</span> <input id="minPrice3" type="text"
									name="minRange6" class="circularMargin5" /> <img
									id="price3MinWrong" alt="WrongSymbol"
									src="/resources/images/wrong.png" class="hide">
							</div>
							<div class="col-md-4">
								<span>Max Range $</span> <input id="maxPrice3" type="text"
									name="maxRange6" class="circularMargin5" /> <img
									id="price3MaxWrong" alt="WrongSymbol"
									src="/resources/images/wrong.png" class="hide">
							</div>
						</div>
					</div>
				</div>
			</div>
		</form>
		<input id="customSearch" class="btn btn-primary circularMargin5"
			type="button" value="Search" /> <input id="customSearchReset"
			class="btn btn-secondary circularMargin5" type="button" value="Reset" />

	</div>

	<div id="searchData"></div>

	<!-- Modal -->
	<div id="uniqueModal" class="modal fade" role="dialog">
		<div class="modal-dialog">
			<!-- Modal content-->
			<div class="modal-content">
				<div class="modal-header">
					<button type="button" class="close" data-dismiss="modal">&times;</button>
					<h4 class="modal-title">In-Correct Selection</h4>
				</div>
				<div class="modal-body">
					<p>Please choose unique search categories from the drop down
						menu</p>
				</div>
				<div class="modal-footer">
					<button type="button" class="btn btn-default" data-dismiss="modal">Close</button>
				</div>
			</div>
		</div>
	</div>
</body>
</html>