<%@ page language="java" contentType="text/html; charset=UTF8"
    pageEncoding="UTF8"%>
<%@ taglib uri="http://java.sun.com/jsp/jstl/core" prefix="c"%>
<!DOCTYPE html>
<html>
<head>
<meta http-equiv="Content-Type" content="text/html; charset=UTF8">
<title>Technical Error</title>
<link rel="stylesheet"
	href="${pageContext.servletContext.contextPath}/resources/styles/bootstrap.css"
	type="text/css" />
<link rel="stylesheet"
	href="${pageContext.servletContext.contextPath}/resources/styles/bootstrap-theme.css"
	type="text/css" />
</head>
<body>
<div class="container">
		<h1 align="center">There has been a technical exception and now being looked into...</h1>
	
	<c:if test="${!webException}">
	<label title="date & time" >${datetime}</label>
	<br/>
	<label title="Exception">${exception}</label>
	<br/>
	<label title="URL">${url}</label>
	</c:if>
</div>
</body>
</html>