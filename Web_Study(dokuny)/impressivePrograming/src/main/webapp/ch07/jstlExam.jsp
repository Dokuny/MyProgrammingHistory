<%@ page contentType="text/html;charset=UTF-8" language="java" pageEncoding="UTF-8" %>
<%@ taglib uri="http://java.sun.com/jsp/jstl/core" prefix="c"%>
<html>
    <head>
        <title>JSTL 종합예제</title>
    </head>
    <body>
        <h2>JSTL 종합예제</h2>
        <hr>
        <h3>set,out</h3>
        <c:set var="product1" value ="<b>애플 아이폰</b>" />
        <c:set var="product2" value="삼성 갤럭시 노트"/>
        <c:set var="intArray" value="${[1,2,3,4,5]}"/>

        <p>
            product1(jstl):
            <c:out value="${product1}" default="Not registered" escapeXml="false"/>
        </p>
        <h3>forEach: 배열출력</h3>
        <ul>
            <c:forEach var="num" varStatus="i" items="${intArray}">
                <li>${i.index}:${num}</li>
            </c:forEach>
        </ul>
    </body>
</html>
