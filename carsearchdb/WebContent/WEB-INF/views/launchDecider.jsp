<%@ page language="java" contentType="text/html; charset=UTF8"
	pageEncoding="UTF8"%>
<!DOCTYPE html>
<html>
<head>
<meta http-equiv="Content-Type" content="text/html; charset=UTF8">
<title>Car Search</title>
<link rel="stylesheet"
	href="${pageContext.servletContext.contextPath}/resources/styles/bootstrap.css"
	type="text/css" />
<link rel="stylesheet"
	href="${pageContext.servletContext.contextPath}/resources/styles/bootstrap-theme.css"
	type="text/css" />
<link rel="stylesheet"
	href="${pageContext.servletContext.contextPath}/resources/styles/admin.css"
	type="text/css" />
<link rel="stylesheet"
	href="${pageContext.servletContext.contextPath}/resources/styles/main.css"
	type="text/css" />
<link rel="stylesheet"
	href="//code.jquery.com/ui/1.12.1/themes/base/jquery-ui.css">
</head>
<body>
	<div id="navBarMain"
		class="navbar navbar-inverse navbar-static-top marginBot0">
		<div class="container">
			<div class='navbar-header'>
				<button type="button" class="navbar-toggle" data-toggle="collapse"
					data-target=".navbar-collapse">
					<span class="sr-only">Toggle navigation</span> <span
						class="icon-bar"></span> <span class="icon-bar"></span> <span
						class="icon-bar"></span>
				</button>
				<a class="navbar-brand" href="#">Car Search</a>
			</div>
			<div class="navbar-collapse collapse">
				<ul id="navBarMenuItems" class="nav navbar-nav navbar-right hide">
					<li><a href="#" id="goHome">Home</a></li>
					<li><a href="#" id="adminContentDecider">Admin Page</a></li>
				</ul>
			</div>
		</div>
	</div>
	<div id="mainDiv" class="backGroundImage paddingBottom100">
		<section>
			<div id='openingImageConent' class="imageContent">
				<div class="carousel slide" id="imageCarousel" data-interval="3000"
					data-ride="carousel">
					<ol class="carousel-indicators">
						<li data-target="imageCarousel" data-slide-to="0"></li>
						<li data-target="imageCarousel" data-slide-to="1"></li>
						<li data-target="imageCarousel" data-slide-to="2"></li>
						<li data-target="imageCarousel" data-slide-to="3"></li>
					</ol>
					<div class='carousel-inner'>
						<div class='item active'>
							<img alt="Carousel Image 1"
								src="/resources/images/AudiRS7.jpg"
								class="image-responsive width100">
							<div class="carousel-caption">
								<input type="button" class="btn btn-primary marginTop20"
									id="explore1" value="Explore" />
							</div>
						</div>
						<div class='item'>
							<img alt="Carousel Image 2"
								src="/resources/images/BentleyContinentalGT.jpg"
								class="image-responsive width100">
							<div class="carousel-caption">
								<input type="button" class="btn btn-primary marginTop20"
									id="explore2" value="Explore" />
							</div>
						</div>
						<div class='item'>
							<img alt="Carousel Image 3"
								src="/resources/images/FerrariAventador.jpg"
								class="image-responsive width100">
							<div class="carousel-caption">
								<input type="button" class="btn btn-primary marginTop20"
									id="explore3" value="Explore" />
							</div>
						</div>
					</div>
				</div>
			</div>
		</section>
		<div id="deciderContent"
			class="container containerBackgroundColor padding50 hide">
			<div id="basicDiv"></div>
			<div id="adminDiv"></div>
		</div>
		<div id="navbarBottom"
			class="navbar navbar-inverse navbar-fixed-bottom" role="navigation">
			<div class="container">
				<div class="navbar-text pull-left">
					Car Search WebSite, by <Strong>Vikas Kasu</Strong>
				</div>
				<div class="navbar-text pull-right">
					<a href="#" id="disclaimer">Disclaimer</a>
					<div id="disclaimerContent" class="navbar-text hide">This Website is purely knowledge purpose and is not commercial, The intial Images rolled on the page is taken from wikiemedia Commons</div>
				</div>
			</div>
		</div>
	</div>
	<div id="loadingModal" class="modal fade" role="dialog">
		<div class="modal-dialog modal-sm">
			<div class="modal-content">
				<div class="modal-body">
					&nbsp; &nbsp; &nbsp; <img alt="loading..."
						src="/resources/images/loading.gif"> <strong>Loading....</strong>
				</div>
			</div>
		</div>
	</div>

	<div id="loginModal" class="modal fade" role="dialog">
		<div class="modal-dialog">
			<div class="modal-content">
				<div class="col-md-12" align="center">
					<br /> <span class="authentication"><strong>Authentication</strong></span>
					<br />
					<div align="center" class="circularMargin5">
						<div id="credentialsDecision" class="hide">
							<span id="textResult"></span>
						</div>
					</div>
				</div>
				<div class="modal-body">
					<form id="loginForm">
						<div class="col-md-12">
							<span>User ID :</span> <input class="form-control" type="text"
								id="userID" name="username" />
						</div>
						<div class="col-md-12">
							<span>Password :</span> <input class="form-control"
								type="password" id="password" name="password" />
						</div>
					</form>
				</div>
				<div class="row">
					<div align="center" class="circularMargin5">
						<br />
						<button type="button" class="btn btn-default circularMargin5"
							id="loginClose">Cancel</button>
						<button type="button" class="btn btn-primary circularMargin5"
							id="login">Login</button>
						<br />
					</div>
				</div>
			</div>
		</div>
	</div>
	<script type="text/javascript"
		src="https://code.jquery.com/jquery-3.1.1.min.js"></script>
	<script src="https://code.jquery.com/ui/1.12.1/jquery-ui.js"></script>
	<script type="text/javascript"
		src="${pageContext.servletContext.contextPath}/resources/scripts/admin.js"></script>
	<script type="text/javascript"
		src="${pageContext.servletContext.contextPath}/resources/scripts/utils.js"></script>
	<script type="text/javascript"
		src="${pageContext.servletContext.contextPath}/resources/scripts/pageDecider.js"></script>
	<script type="text/javascript"
		src="${pageContext.servletContext.contextPath}/resources/scripts/bootstrap.min.js"></script>
	<script type="text/javascript"
		src="${pageContext.servletContext.contextPath}/resources/scripts/main.js"></script>
</body>
</html>