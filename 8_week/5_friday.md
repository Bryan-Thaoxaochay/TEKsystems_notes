# Week 8: Friday - Spring Boot
## Annotations
**@Controller**
- indicate class is a Spring controller  

*Allows auto-detection of component classes in the classpath*  

**@RequestMapping**
- responsible to routing incoming HTTP requests to the methods of a controller  

Example
```
@Controller
public class UserController {
  @RequestMapping("/user")
  pubic String getUser() {
    // code
  }
}
```
- annotation can be above the method or above the class  

Variants of @RequestMapping
- @GetMapping
- @PostMapping
- @PutMapping
- @DeleteMapping
- @PatchMapping
- *these are shortcuts for @RequestMapping(method = RequestMethod.(request method i.e. GET))*  

## Rest and Rest App
REST (Representational State Transfer)
- stateless client-server architecture
  - web services are resources + can be ID by their URLs  
- Composed of REST server + REST client
  - REST server: provide access to the resource
  - REST client: access + modify REST resource  

RESTful App
- Purpose
  - generate HTTP requests performing CRUD operations on resources
  - data usually transferred in JSON or XML format  

REST Endpoint
- if a user goes to a specific URL, we can set up Spring to run a specific method + send the return value to the user  

**@RestController**
- label a class as a REST controller  
- combo of @Controller + @ResponseBody

Example
```
@RestController
public class GreetingController {
  @GetMapping("/greeting")
  public String greeting() {
    return "Hello!";
  }
}
```
- when the user goes to a URL w/ "/greeting" at the end, this method will execute + returns a string object in the HTTP response as JSON  

**@RequestBody and @ResponseBody**
- used to bind returned objects from methods to the HTTP request/response  

@RequestBody
- binds the body of an HTTP request to an object in our method  

Example
```
@PostMapping("/users")
public void printData(@RequestBody User user) {}
```
- data sent from the browser will be stored in the user object variable  

@ResponseBody
- turn a return object into JSON or XML + send it as part of the HTTP response
- should not be used at method level, since it is a part of @RestController already  

## Spring Model
- interface to add attributes to a model
- contains methods to handle data between controller + view  

Purpose
- used to pass data from the controller to the view  

*3 Ways to Define a Model in a Spring MVC App*
1. Model: holder for model attributes, mainly used to add attributes to model
2. ModelMap: store attributes in a map + chain method calls
3. ModelAndView: holder for model + view  

**@ModelAttribute**
- binds method return value to a model attribute that is going to be on a web view
- used at the method level or method-parameter level