# Week 9: Monday - Spring Boot
## Spring Boot Annotation
**@RequestParam**
- read values from the request
- can retrieve
  - query params
  - form data
  - files from request
- best used for a low # of params  

Example
```
GetMapping("/empInfo")
public String showEmpData (@RequestParam("id") int id, Model model) {
  User useobj = new User(id);
  model.addAttribute("userAtt", useobj);

  return "showData";
}
```
- URL: localhost:8080/empInfo?id=95124  

**@PathVariable**
- another annotation to retrieve data from a URL  

Example
```
// Controller
@GetMapping("/books/{ISBN}")
public String showBook(@PathVariable("ISBN") String id, Model model) {
  model.addAttribute("ISBNAttribute", id);

  return "bookDetails";
}

// View
<p th: text="${ISBN}"></p>
```  

**@ModelAttribute**
- used w/ forms w/ a lot of fields
- provides additional functions i.e.
  - data binding
  - validation  

**@SessionAttributes / @SessionAttribute**
- used to store model attributes in a session btw requests  

*Sessions last for 15 mins*
- session duration can change in the application.properties file
  ```
  Server.servlet.session.timeout = 30m
  ```  

*Session Life Cycle*
1. Annotation initialized when placed into class
2. Session is updated when the method w/ the corresponding model attribute is invoked
3. Session is closed when setComplete() is called  

Example
```
@Controller
@SessionAttribute("visitor")
@RequestMapping("/trades")
public Class TradeController {
  ....


  @ModelAttribute("visitor")
  public Visitor getVisitor() {
    ...
  }
}
```
- session attribute and model attribute are connected  

