package ch05;

import javax.servlet.*;
import javax.servlet.http.*;
import javax.servlet.annotation.*;
import java.io.IOException;
import java.io.PrintWriter;

@WebServlet(name = "HelloWorld", value = "/HelloWorld")
public class HelloWorld extends HttpServlet {
    private static final long serialVersionUID = 1L;

    public HelloWorld() {
        super();
    }

    @Override
    protected void doGet(HttpServletRequest request, HttpServletResponse response) throws ServletException, IOException {
       response.setContentType("text/html; charset=utf-8");
        PrintWriter out = response.getWriter();
        out.append("<doctype html><html><head><title>Hello World Servelet</title></head><body>")
                .append("<h2>Hello World</h2><hr>").append("현재 날짜와 시간은: "+ java.time.LocalDateTime.now())
                .append("</body></html>");
    }

    @Override
    protected void doPost(HttpServletRequest request, HttpServletResponse response) throws ServletException, IOException {
        doGet(request,response);
    }
}
