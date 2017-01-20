<%@ taglib prefix="spring" uri="http://www.springframework.org/tags"%>
<%@ taglib prefix="c" uri="http://java.sun.com/jsp/jstl/core"%>
<!DOCTYPE html>
<html lang="en">
<head>
<title>Maven + Spring MVC</title>
    <%--<base href="/survey-web/">--%>
<spring:url value="/resources/core/css/hello.css" var="coreCss" />
<spring:url value="/resources/core/css/bootstrap.min.css" var="bootstrapCss" />
<link href="${bootstrapCss}" rel="stylesheet" />
<link href="${coreCss}" rel="stylesheet" />
<%--<script src="resources/node_modules/zone.js/dist/zone.min.js"></script>
<script src="resources/node_modules/reflect-metadata/Reflect.js"></script>
<script src="resources/js/system.src.js"></script>
<script src="resources/systemjs.config.js"></script>--%>

<script>
    //System.import('app').catch(function(err){ console.error(err); });
</script>
</head>
<body>
<ng-component></ng-component>

<script src="resources/dist/polyfills.bundle.js"></script>
<script src="resources/dist/vendor.bundle.js"></script>
<script src="resources/dist/app.bundle.js"></script>
</body>
</html>