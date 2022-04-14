# Week 10: Thursday - 
## Web Services
- apps that communicate over HyperText Transfer Protocol (HTTP) to exchange data messages  

*Client <--- message ---> Server*
- message sent back and forth between client + server  

**Characteristics**
- apps can be written in different languages, but can still exchange data via a web service
- it is able to support various messages w/ the help of XML or JSON, SOAP, and WSDL
- has synchronous functionality, so that the app can wait till an operation is complete  

**Service-Oriented Architecture**
Several things need to occur in a service-oriented environment
1. Web service needs to be created, along w/ defined methods
2. Web service needs to be published to 1+ internet repositories so that it can be located by potential users
3. Web service needs to be located to be used by potential users
4. Web service must be unpublished after no more need  

*3 Key Operations*
1. Publish
2. Find
3. Bind  

*3 Distinct Roles*
- Provider
  - creates web service and makes it available to client app
- Requester
  - client app that commmunicates w/ the web service
- Broker
  - allows web service to be available to any service requestor  

Steps of Communication
1. Provider sends a message to Broker about the data it needs
2. Requester talks to Broker to find out which Provider has the data
3. Requester then talks to Provider via SOAP protocol
4. Provider validates Requester message + sends data back to Requester
5. Requester then validates message again  

**Web Apps vs Web Services**
- web services help web apps access data
- web services use SOAP, web apps use HTTP/HTTPS  

**Types of Web Services**
- SOAP (Simple Object Access Protocol)
  - XML-based
  - language independent
- REST (Representational State Transfer)
  - identified via URL
  - stateless
  - REST server accesses resources
  - REST client modifies resources  

**Spring Data REST**
- allows us to write REST services in Spring
- simplifies how our code and file structure work by combining controllers + services  

*Dependency*
```
<dependency>
    <groupId>org.springframework.boot</groupId>
    <artifactId>spring-boot-starter-data-rest</artifactId>
</dependency>
```

*@RepositoryResource*
```
@RepositoryRestResource
public interface StudentRepository extends JpaRepository<Student, Long> {}
```
- Creates 2 REST endpoints
  - Single Item: /students/{id}
  - Collection: /students
  - endpoint is always entity name in lowercase + plural form, but can be customized w/ @RepositoryRestResource(collectionResourceRel = "", path = "")  

*In a Nutshell*
Client <-> Spring Data REST <-> DAO (repository) <-> DB
- Spring Data REST replaces controller + service  

