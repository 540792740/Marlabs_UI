package src.Web_programming.src;

import java.io.IOException;

public class AjaxServlet extends javax.servlet.http.HttpServlet {
    protected void doPost(javax.servlet.http.HttpServletRequest request, javax.servlet.http.HttpServletResponse response) throws javax.servlet.ServletException, IOException {
        //get parameter
        String username = request.getParameter("username");

        //Print Username
        System.out.println(username);

        // Response
        response.getWriter().write("hello : " + username);

    }

    protected void doGet(javax.servlet.http.HttpServletRequest request, javax.servlet.http.HttpServletResponse response) throws javax.servlet.ServletException, IOException {

    }
}
