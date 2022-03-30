# Week 8: Wednesday - JavaScript and Back-End
## Browser Object Model
- objects that help us interact w/ the browser  

*There are methods + properties available for us to use*  

### **BOM Hierarchy**
Window
  - Navigator: info about the browser
  - Location: info on current URL
  - Document: current webpage
  - Screen: screen properties
  - History: array of URLs visited by the user  

[Docs on the Window Object](https://www.w3schools.com/jsref/obj_window.asp)  

## Back-End
### **Web Resource**
- a web app is a collection of web resources that generate web pages  

### **Server-Side Web Tech**
Purpose
- develop web resource programs to generate dynamic web pages

*Java comes w/ a web server (Tomcat)*  

### **HTTP Requests**
- how we can get data from the front-end side of the web app  

*Contains various info about the request*  

*HTTP Request Methods: used to transfer data between the front-end and back-end*
- GET
- POST
- HEAD
- TRACE
- PUT
- DELETE
- OPTIONS  

### **Servlet**
- Java program(class) used to interact w/ the web server, which then sends it to the web client  

Packages
- javax.servlet
- javax.servlet.http
- *Implement the Servlet Interface*  

*Servlet Life Cycle*
1. Load Servlet classes
   - web server starts (tomcat)
   - servlet container deploys
   - servlets are loaded
2. Create instance of Servlet
   - servlet container creates instances of each servlet class
3. Invoke init()
   - initialize the servlet
4. Invoke service() for each client request
5. Invoke destroy()  
   - after the server closes, each instance is destroyed  

*Servlet Container*
- use Java to dynamically generate web pages on the server side
- provide runtime environment for Java EE apps  

