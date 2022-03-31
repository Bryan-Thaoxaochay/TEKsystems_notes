# Week 8: Thursday - Back-End
## Model-View-Controller
- a way to organize our code files  

Model
- contains files that interact directly w/ the database  

View
- contains files related w/ displaying stuff on the front-end  

Controller
- contains files that will connect the model and view files  

## Spring Framework
- app development framework for Java EE
- handles the infrastructure so we can focus on the app  
- *A framework of frameworks. Has support for various other frameworks*
  - Struts
  - Hibernate
  - Tapestry  

*Main Cornerstones of Spring*
- Dependency Injection
- Inversion of Control  

*Spring has 6 main modules that have their own functionality to help build an app. Each main module contains it's own modules.*
1. Core Container
   - Spring Core
   - Spring Bean
   - Spring Context
   - Spring Expression Languages
2. Data Access/Integration
   - JDBC
   - ORM
   - OXM
   - JMS
   - Transaction
3. Web
   - Web
   - Web-Servlet
   - Web-Socket
   - Web-Portlet
4. Aspect Oriented Programming
5. Instrumentation
6. Test  

## Spring Boot
- project built on top of the Spring framework  

Purpose
- makes setting up our app easier so we can get to actual coding  

*Benefits*
- helps setting up an app easier
- sets up a default test setup
- has powerful db transaction management capabilities
- simplifies integration w/ other Java frameworks
- decrease cost + development time of the app
- provides production-ready features
- provides a lot of plugins w/ the help of Gradle/Maven  

*Key Components of Spring Boot*
1. Spring Boot Starters
   - Purpose: combine related dependencies into a single dependency
2. Spring Boot 'AutoConfigurator'
3. Spring Boot CLI
4. Spring Boot Actuator  

*Core Spring Boot Annotations*
Packages
```
org.springframework.boot.autoconfigure
org.springframework.boot.autoconfigure.condition
```  

@SpringBootApplication
- placed into the class that contains the main() method
- saves time by combining the following annotations:
  - @EnableAutoConfiguration
  - @ComponentScan
  - @SpringBootConfiguration  

*application.properties*
- file to help set up stuff (i.e. server-port #, db connection configuration)
- placed in the resource folder
- @Value - annotation to access properties
  ```
  @Value("${custom.value}")
  private String customVal;
  ```  

*Context Path*
- URL to access the app
- root ("/") is default, but we can change it in the application.properties file
  ```
  server.servlet.context-path=/newroute
  ```  

## Project Lombok
- Java library to minimize code

How it Works
- provides annotations that will generate the code necessary during compilation  

Dependency
```
<dependency>
    <groupId>org.projectlombok</groupId>
    <artifactId>lombok</artifactId>
    <version>1.18.20</version>
    <scope>provided</scope>
</dependency>
```

Example
```
import lombok.Getter;
import lombok.Setter;

@Getter
@Setter
public class User {
  private String username;
  print String password;
}
```
- annotations will create getters + setters for the vars  

