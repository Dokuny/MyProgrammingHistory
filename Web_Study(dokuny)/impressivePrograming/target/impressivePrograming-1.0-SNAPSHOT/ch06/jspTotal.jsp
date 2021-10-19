<%--
  Created by IntelliJ IDEA.
  User: uooy
  Date: 2021-10-19
  Time: 오후 12:05
  To change this template use File | Settings | File Templates.
--%>

<%@ page contentType="text/html;charset=UTF-8" language="java" pageEncoding="utf-8" %>
<%!
    String[] members = {"김길동", "홍길동", "김사랑", "박사랑"};
    int num1 = 10;

    int calc(int num2) {
        return num1 + num2;
    }
%>
<html>
    <head>

        <title>Title</title>
    </head>
    <body>
        <h3>
            <%=calc(10)%>
        </h3>
        <h3>
            <ul>
                <%
                    for (String name : members) {
                %>
                <li><%=name%></li>
                <%
                    }
                %>
            </ul>
        </h3>
    </body>
</html>
